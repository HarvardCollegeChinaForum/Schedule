"use client";

import { useState } from "react";
import { DirectionsTool } from "@/components/DirectionsTool";
import { MapEmbed } from "@/components/MapEmbed";
import { schedule, type Locale, venues } from "@/data/schedule";

function getVenue(venueId: string) {
  return venues.find((venue) => venue.id === venueId);
}

function getFallbackVenue(dayId: string) {
  return getVenue(dayId === "saturday" ? "mem-church" : "science-center");
}

function getMapTarget(venue: (typeof venues)[number]) {
  return venue.routeTarget ?? venue.embedQuery ?? venue.address;
}

export function SchedulePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [expandedTracks, setExpandedTracks] = useState<Record<string, boolean>>({});

  const copy =
    locale === "zh"
      ? {
          forum: "哈佛中国论坛",
          schedule: "2026 日程",
          openInMaps: "在地图中打开",
          venuePending: "地点待定",
          language: "语言",
          speakers: "嘉宾",
          expand: "展开详情",
          collapse: "收起详情",
          detailsLabel: "论坛详情",
        }
      : {
          forum: "Harvard College China Forum",
          schedule: "2026 Schedule",
          openInMaps: "Open in Maps",
          venuePending: "Venue to be announced",
          language: "Language",
          speakers: "Speakers",
          expand: "Show details",
          collapse: "Hide details",
          detailsLabel: "Panel details",
        };

  function toggleTrack(trackId: string) {
    setExpandedTracks((current) => ({
      ...current,
      [trackId]: !current[trackId],
    }));
  }

  return (
    <main className="pageShell">
      <header className="pageTopbar">
        <div className="pageTitle">
          <p className="pageTitleEyebrow">{copy.forum}</p>
          <h1>{copy.schedule}</h1>
        </div>

        <div className="languageToggle" aria-label={copy.language}>
          <button
            type="button"
            className={locale === "en" ? "isActive" : ""}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={locale === "zh" ? "isActive" : ""}
            onClick={() => setLocale("zh")}
          >
            中文
          </button>
        </div>
      </header>

      <DirectionsTool locale={locale} />

      <section className="scheduleStack" id="schedule">
        {schedule.map((day) => (
          <article key={day.id} className="dayBand">
            <header className="dayBandHeader">
              <div>
                <p className="dayLabel">{locale === "zh" ? day.labelZh : day.label}</p>
                <h2>{day.dateLabel}</h2>
              </div>
            </header>

            <div className="timeline">
              {day.sessions.map((session) => {
                const venue = session.venueId ? getVenue(session.venueId) : getFallbackVenue(day.id);

                return (
                  <section key={session.id} className={`timelineRow session-${session.type}`}>
                    <aside className="timelineTime">
                      <span>{session.time}</span>
                    </aside>

                    <div className="timelineContent">
                      <div className="timelineIntro">
                        <div>
                          <h3>{locale === "zh" ? session.titleZh : session.title}</h3>
                          {session.tracks ? (
                            session.description || session.descriptionZh ? (
                              <p className="sessionDescription">
                                {locale === "zh" ? session.descriptionZh : session.description}
                              </p>
                            ) : null
                          ) : (
                            <>
                              <p className="sessionVenue">
                                {venue
                                  ? locale === "zh"
                                    ? venue.labelZh
                                    : venue.label
                                  : copy.venuePending}
                              </p>
                              {session.description || session.descriptionZh ? (
                                <p className="sessionDescription">
                                  {locale === "zh" ? session.descriptionZh : session.description}
                                </p>
                              ) : null}
                              {session.speakerGroups?.length ? (
                                <div className="sessionSpeakerGroups">
                                  {session.speakerGroups.map((group) => (
                                    <div
                                      key={`${session.id}-${group.label}`}
                                      className="speakerBlock"
                                    >
                                      <p className="trackMetaLabel">
                                        {locale === "zh" ? group.labelZh : group.label}
                                      </p>
                                      <div className="speakerList">
                                        {group.speakers.map((speaker) => (
                                          <p
                                            key={`${session.id}-${group.label}-${speaker.name}-${speaker.title}`}
                                            className="speakerItem"
                                            lang={locale === "zh" ? "zh-Hans" : undefined}
                                          >
                                            <strong className="speakerName">
                                              {locale === "zh" ? speaker.nameZh : speaker.name}
                                            </strong>
                                            {locale === "zh"
                                              ? `（${speaker.titleZh}）`
                                              : ` (${speaker.title})`}
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </>
                          )}
                        </div>
                        {!session.tracks && venue ? (
                          <a
                            className="mapAction"
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getMapTarget(venue))}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {copy.openInMaps}
                          </a>
                        ) : null}
                      </div>

                      {session.tracks ? (
                        <div className="trackGrid">
                          {session.tracks.map((track) => {
                            const trackVenue = getVenue(track.venueId);
                            const trackId = `${session.id}-${track.venueId}`;
                            const isExpanded = expandedTracks[trackId] ?? false;
                            const trackDescription =
                              locale === "zh" ? track.descriptionZh : track.description;

                            return (
                              <article key={trackId} className="trackRow">
                                <div className="trackRowTop">
                                  <div className="trackHeading">
                                    <h4 className="trackTitle">
                                      {locale === "zh" ? track.titleZh : track.title}
                                    </h4>
                                    <p className="trackVenue">
                                      {trackVenue
                                        ? locale === "zh"
                                          ? trackVenue.shortLabelZh
                                          : trackVenue.shortLabel
                                        : ""}
                                    </p>
                                  </div>
                                  <a
                                    className="mapAction"
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trackVenue ? getMapTarget(trackVenue) : "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {copy.openInMaps}
                                  </a>
                                </div>
                                <div className="trackActions">
                                  <button
                                    type="button"
                                    className="detailToggle"
                                    aria-expanded={isExpanded}
                                    aria-controls={`${trackId}-details`}
                                    onClick={() => toggleTrack(trackId)}
                                  >
                                    {isExpanded ? copy.collapse : copy.expand}
                                  </button>
                                </div>
                                {isExpanded ? (
                                  <div
                                    id={`${trackId}-details`}
                                    className="trackDetails"
                                    aria-label={copy.detailsLabel}
                                  >
                                    {trackDescription ? (
                                      <section className="trackDescription">
                                        <p lang={locale === "zh" ? "zh-Hans" : undefined}>
                                          {trackDescription}
                                        </p>
                                      </section>
                                    ) : null}
                                    <div className="speakerBlock">
                                      <p className="trackMetaLabel">{copy.speakers}</p>
                                      <div className="speakerList">
                                        {track.speakers.map((speaker) => (
                                          <p
                                            key={`${session.id}-${track.title}-${speaker.name}-${speaker.title}`}
                                            className="speakerItem"
                                            lang={locale === "zh" ? "zh-Hans" : undefined}
                                          >
                                            <strong className="speakerName">
                                              {locale === "zh" ? speaker.nameZh : speaker.name}
                                            </strong>
                                            {locale === "zh"
                                              ? `（${speaker.titleZh}）`
                                              : ` (${speaker.title})`}
                                          </p>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </article>
                            );
                          })}
                        </div>
                      ) : venue ? (
                        <div className="singleSessionMap">
                          <div className="singleSessionMeta">
                            <p>{venue.address}</p>
                          </div>
                          <MapEmbed
                            query={venue.embedQuery}
                            title={`${locale === "zh" ? session.titleZh : session.title} map`}
                          />
                        </div>
                      ) : null}
                    </div>
                  </section>
                );
              })}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
