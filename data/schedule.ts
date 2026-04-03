import { panelTracks, type PanelTrack } from "@/data/panels";

export type Venue = {
  id: string;
  label: string;
  labelZh: string;
  shortLabel: string;
  shortLabelZh: string;
  address: string;
  routeTarget?: string;
  embedQuery: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Session = {
  id: string;
  time: string;
  title: string;
  titleZh: string;
  type: "ceremony" | "check-in" | "meal" | "competition" | "panel-block";
  venueId?: string;
  description?: string;
  descriptionZh?: string;
  tracks?: PanelTrack[];
};

export type DaySchedule = {
  id: string;
  label: string;
  labelZh: string;
  dateLabel: string;
  venueAnchor: string;
  venueAnchorZh: string;
  summary: string;
  summaryZh: string;
  sessions: Session[];
};

export type Locale = "en" | "zh";

export const venues: Venue[] = [
  {
    id: "mem-church",
    label: "Memorial Church",
    labelZh: "纪念教堂",
    shortLabel: "Mem Church",
    shortLabelZh: "纪念教堂",
    address: "1 Harvard Yard, Cambridge, MA 02138",
    embedQuery: "Harvard Memorial Church Cambridge MA",
    coordinates: { lat: 42.3748, lng: -71.1183 },
  },
  {
    id: "nw-b103",
    label: "Northwest Building B103",
    labelZh: "西北楼 B103",
    shortLabel: "NW B103",
    shortLabelZh: "西北楼 B103",
    address: "Northwest Building, 52 Oxford St, Cambridge, MA 02138",
    routeTarget: "42.379368,-71.115918",
    embedQuery: "42.379368,-71.115918",
    coordinates: { lat: 42.379368, lng: -71.115918 },
  },
  {
    id: "nw-b101",
    label: "Northwest Building B101",
    labelZh: "西北楼 B101",
    shortLabel: "NW B101",
    shortLabelZh: "西北楼 B101",
    address: "Northwest Building, 52 Oxford St, Cambridge, MA 02138",
    routeTarget: "42.379368,-71.115918",
    embedQuery: "42.379368,-71.115918",
    coordinates: { lat: 42.379368, lng: -71.115918 },
  },
  {
    id: "northwest-entrance",
    label: "Northwest Building",
    labelZh: "西北楼",
    shortLabel: "Northwest Building",
    shortLabelZh: "西北楼",
    address: "Northwest Building, 52 Oxford St, Cambridge, MA 02138",
    routeTarget: "42.379368,-71.115918",
    embedQuery: "42.379368,-71.115918",
    coordinates: { lat: 42.379368, lng: -71.115918 },
  },
  {
    id: "yenching-230",
    label: "Harvard-Yenching Institute 230",
    labelZh: "哈佛燕京学社 230",
    shortLabel: "Yenching Institute 230",
    shortLabelZh: "燕京学社 230",
    address: "2 Divinity Ave, Cambridge, MA 02138",
    embedQuery: "Harvard-Yenching Institute 230 Cambridge MA",
    coordinates: { lat: 42.3729, lng: -71.1157 },
  },
  {
    id: "science-center",
    label: "Science Center",
    labelZh: "科学中心",
    shortLabel: "Science Center",
    shortLabelZh: "科学中心",
    address: "1 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Science Center Cambridge MA",
    coordinates: { lat: 42.3763, lng: -71.1167 },
  },
  {
    id: "science-b",
    label: "Science Center Hall B",
    labelZh: "科学中心 B 厅",
    shortLabel: "Science Center B",
    shortLabelZh: "科学中心 B",
    address: "1 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Science Center Hall B Cambridge MA",
    coordinates: { lat: 42.3763, lng: -71.1167 },
  },
  {
    id: "science-c",
    label: "Science Center Hall C",
    labelZh: "科学中心 C 厅",
    shortLabel: "Science Center C",
    shortLabelZh: "科学中心 C",
    address: "1 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Science Center Hall C Cambridge MA",
    coordinates: { lat: 42.3763, lng: -71.1167 },
  },
  {
    id: "science-d",
    label: "Science Center Hall D",
    labelZh: "科学中心 D 厅",
    shortLabel: "Science Center D",
    shortLabelZh: "科学中心 D",
    address: "1 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Science Center Hall D Cambridge MA",
    coordinates: { lat: 42.3763, lng: -71.1167 },
  },
  {
    id: "queens-head",
    label: "Queen's Head Pub",
    labelZh: "Queen's Head Pub",
    shortLabel: "Queen's Head",
    shortLabelZh: "Queen's Head",
    address: "45 Quincy St, Cambridge, MA 02138",
    routeTarget: "42.3759961,-71.1156477",
    embedQuery: "42.3759961,-71.1156477",
    coordinates: { lat: 42.3759961, lng: -71.1156477 },
  },
];

export const schedule: DaySchedule[] = [
  {
    id: "saturday",
    label: "Saturday",
    labelZh: "周六",
    dateLabel: "April 11, 2026",
    venueAnchor: "Memorial Church and Northwest Building",
    venueAnchorZh: "纪念教堂与西北楼",
    summary: "Opening ceremony, four panel blocks, and lunch across Harvard Yard and the Northwest Building.",
    summaryZh: "开幕式、四场分论坛与午餐安排，地点分布于哈佛园区和西北楼。",
    sessions: [
      {
        id: "sat-check-in",
        time: "08:00 - 09:00",
        title: "Check-in",
        titleZh: "签到",
        type: "check-in",
        venueId: "mem-church",
      },
      {
        id: "sat-opening",
        time: "09:15 - 11:00",
        title: "Opening Ceremony",
        titleZh: "开幕式",
        type: "ceremony",
        venueId: "mem-church",
      },
      {
        id: "sat-panels-1",
        time: "11:15 - 12:30",
        title: "Panels 1",
        titleZh: "分论坛 1",
        type: "panel-block",
        tracks: [panelTracks.business, panelTracks.journalism],
      },
      {
        id: "sat-lunch",
        time: "12:30 - 13:30",
        title: "Lunch",
        titleZh: "午餐",
        type: "meal",
        venueId: "northwest-entrance",
      },
      {
        id: "sat-panels-2",
        time: "13:30 - 14:45",
        title: "Panels 2",
        titleZh: "分论坛 2",
        type: "panel-block",
        tracks: [panelTracks.chineseWisdom, panelTracks.bridges, panelTracks.latinAmerica],
      },
      {
        id: "sat-panels-3",
        time: "15:00 - 16:15",
        title: "Panels 3",
        titleZh: "分论坛 3",
        type: "panel-block",
        tracks: [panelTracks.ventureCapital, panelTracks.art, panelTracks.sustainability],
      },
      {
        id: "sat-panels-4",
        time: "16:30 - 17:45",
        title: "Panels 4",
        titleZh: "分论坛 4",
        type: "panel-block",
        tracks: [panelTracks.biotech, panelTracks.africa],
      },
    ],
  },
  {
    id: "sunday",
    label: "Sunday",
    labelZh: "周日",
    dateLabel: "April 12, 2026",
    venueAnchor: "Science Center and Harvard-Yenching Institute",
    venueAnchorZh: "科学中心与哈佛燕京学社",
    summary: "Pitch competition, four afternoon panel blocks, lunch, and the closing ceremony.",
    summaryZh: "创业路演、四场分论坛、午餐及闭幕式。",
    sessions: [
      {
        id: "sun-check-in",
        time: "08:00 - 09:00",
        title: "Check-in",
        titleZh: "签到",
        type: "check-in",
        venueId: "science-center",
      },
      {
        id: "sun-pitch",
        time: "09:00 - 10:30",
        title: "Pitch Competition",
        titleZh: "创业路演",
        type: "competition",
        venueId: "yenching-230",
      },
      {
        id: "sun-panels-5",
        time: "10:00 - 11:15",
        title: "Panels 5",
        titleZh: "分论坛 5",
        type: "panel-block",
        tracks: [panelTracks.aiScience, panelTracks.history, panelTracks.southeastAsia],
      },
      {
        id: "sun-panels-6",
        time: "11:30 - 12:45",
        title: "Panels 6",
        titleZh: "分论坛 6",
        type: "panel-block",
        tracks: [panelTracks.film, panelTracks.agenticAi, panelTracks.globalHealth],
      },
      {
        id: "sun-lunch",
        time: "12:45 - 13:45",
        title: "Lunch",
        titleZh: "午餐",
        type: "meal",
        venueId: "queens-head",
      },
      {
        id: "sun-panels-7",
        time: "14:00 - 15:15",
        title: "Panels 7",
        titleZh: "分论坛 7",
        type: "panel-block",
        tracks: [panelTracks.geopolitics, panelTracks.fintech, panelTracks.globalOutlook],
      },
      {
        id: "sun-panels-8",
        time: "15:30 - 16:45",
        title: "Panels 8",
        titleZh: "分论坛 8",
        type: "panel-block",
        tracks: [panelTracks.economics, panelTracks.softPower, panelTracks.consumer],
      },
      {
        id: "sun-closing",
        time: "17:00 - 18:00",
        title: "Closing Ceremony",
        titleZh: "闭幕式",
        type: "ceremony",
        venueId: "science-center",
      },
    ],
  },
];

export function getSessionRoutes(locale: Locale) {
  return schedule.flatMap((day) =>
    day.sessions.flatMap((session) => {
    if (session.tracks) {
      return session.tracks.map((track) => ({
        id: `${session.id}-${track.venueId}`,
        label:
          locale === "zh"
            ? `${day.labelZh} · ${session.time} · ${track.titleZh}`
            : `${day.label} · ${session.time} · ${track.title}`,
        venueId: track.venueId,
      }));
    }

    if (!session.venueId) {
      return [];
    }

    return [
      {
        id: session.id,
        label:
          locale === "zh"
            ? `${day.labelZh} · ${session.time} · ${session.titleZh}`
            : `${day.label} · ${session.time} · ${session.title}`,
        venueId: session.venueId,
      },
    ];
    }),
  );
}
