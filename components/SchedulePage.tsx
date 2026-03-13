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

export function SchedulePage() {
  const [locale, setLocale] = useState<Locale>("en");

  const copy =
    locale === "zh"
      ? {
          forum: "哈佛大学中国论坛",
          schedule: "2026 日程",
          openInMaps: "在地图中打开",
          venuePending: "地点待定",
          concurrent: "平行论坛。",
          language: "语言",
        }
      : {
          forum: "Harvard College China Forum",
          schedule: "2026 Schedule",
          openInMaps: "Open in Maps",
          venuePending: "Venue to be announced",
          concurrent: "Concurrent sessions.",
          language: "Language",
        };

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
              <p className="dayVenue">{locale === "zh" ? day.venueAnchorZh : day.venueAnchor}</p>
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
                            <p className="sessionDescription">
                              {locale === "zh"
                                ? session.descriptionZh ?? copy.concurrent
                                : session.description ?? copy.concurrent}
                            </p>
                          ) : (
                            <p className="sessionVenue">
                              {venue
                                ? locale === "zh"
                                  ? venue.labelZh
                                  : venue.label
                                : copy.venuePending}
                            </p>
                          )}
                        </div>
                        {!session.tracks && venue ? (
                          <a
                            className="mapAction"
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
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

                            return (
                              <article key={`${session.id}-${track.title}`} className="trackCard">
                                <div className="trackCardTop">
                                  <div>
                                    <p className="trackTitle">
                                      {locale === "zh" ? track.titleZh : track.title}
                                    </p>
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
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(trackVenue?.address ?? "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {copy.openInMaps}
                                  </a>
                                </div>
                                {trackVenue ? (
                                  <MapEmbed
                                    query={trackVenue.embedQuery}
                                    title={`${locale === "zh" ? track.titleZh : track.title} map`}
                                  />
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
