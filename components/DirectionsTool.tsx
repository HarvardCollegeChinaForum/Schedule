"use client";

import { useEffect, useMemo, useState } from "react";
import { getSessionRoutes, type Locale, venues } from "@/data/schedule";

type DirectionsToolProps = {
  locale: Locale;
};

export function DirectionsTool({ locale }: DirectionsToolProps) {
  const sessionRoutes = useMemo(() => getSessionRoutes(locale), [locale]);
  const [fromId, setFromId] = useState(sessionRoutes[0]?.id ?? "");
  const [toId, setToId] = useState(sessionRoutes[1]?.id ?? "");

  useEffect(() => {
    const hasFrom = sessionRoutes.some((route) => route.id === fromId);
    const nextFromId = hasFrom ? fromId : (sessionRoutes[0]?.id ?? "");

    if (!hasFrom && nextFromId !== fromId) {
      setFromId(nextFromId);
    }

    const hasTo = sessionRoutes.some((route) => route.id === toId);
    const fallbackToId =
      sessionRoutes.find((route) => route.id !== nextFromId)?.id ?? nextFromId;
    const nextToId = hasTo ? toId : fallbackToId;

    if (!hasTo && nextToId !== toId) {
      setToId(nextToId);
    }
  }, [fromId, toId, sessionRoutes]);

  useEffect(() => {
    if (fromId !== toId) {
      return;
    }

    const fallback = sessionRoutes.find((route) => route.id !== fromId)?.id;
    if (fallback) {
      setToId(fallback);
    }
  }, [fromId, toId, sessionRoutes]);

  const fromRoute = sessionRoutes.find((route) => route.id === fromId);
  const toRoute = sessionRoutes.find((route) => route.id === toId);
  const fromVenue = venues.find((venue) => venue.id === fromRoute?.venueId);
  const toVenue = venues.find((venue) => venue.id === toRoute?.venueId);

  function getMapTarget(venue: (typeof venues)[number]) {
    return venue.routeTarget ?? venue.embedQuery ?? venue.address;
  }

  const copy =
    locale === "zh"
      ? {
          heading: "规划路线",
          from: "起点",
          to: "终点",
          selectSession: "选择场次",
          open: "在 Google 地图中打开路线",
        }
      : {
          heading: "Plan your route",
          from: "From",
          to: "To",
          selectSession: "Select a session",
          open: "Open directions in Google Maps",
        };

  const directionsUrl =
    fromVenue && toVenue
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(getMapTarget(fromVenue))}&destination=${encodeURIComponent(getMapTarget(toVenue))}&travelmode=walking`
      : "#";

  return (
    <section className="directionsTool" aria-labelledby="directions-heading">
      <h2 id="directions-heading">{copy.heading}</h2>
      <div className="directionFields">
        <label>
          <span>{copy.from}</span>
          <select value={fromId} onChange={(event) => setFromId(event.target.value)}>
            {sessionRoutes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{copy.to}</span>
          <select value={toId} onChange={(event) => setToId(event.target.value)}>
            {sessionRoutes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="directionMeta">
        <div>
          <strong>
            {fromVenue ? (locale === "zh" ? fromVenue.labelZh : fromVenue.label) : copy.selectSession}
          </strong>
          <p>{fromVenue?.address}</p>
        </div>
        <div>
          <strong>
            {toVenue ? (locale === "zh" ? toVenue.labelZh : toVenue.label) : copy.selectSession}
          </strong>
          <p>{toVenue?.address}</p>
        </div>
      </div>
      <a className="buttonPrimary" href={directionsUrl} target="_blank" rel="noreferrer">
        {copy.open}
      </a>
    </section>
  );
}
