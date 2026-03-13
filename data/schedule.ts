export type Venue = {
  id: string;
  label: string;
  labelZh: string;
  shortLabel: string;
  shortLabelZh: string;
  address: string;
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
  tracks?: Array<{
    title: string;
    titleZh: string;
    venueId: string;
  }>;
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
    address: "52 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Northwest Building B103 Cambridge MA",
    coordinates: { lat: 42.3794, lng: -71.1169 },
  },
  {
    id: "nw-b101",
    label: "Northwest Building B101",
    labelZh: "西北楼 B101",
    shortLabel: "NW B101",
    shortLabelZh: "西北楼 B101",
    address: "52 Oxford St, Cambridge, MA 02138",
    embedQuery: "Harvard Northwest Building B101 Cambridge MA",
    coordinates: { lat: 42.3794, lng: -71.1169 },
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
        description: "Concurrent morning discussions.",
        descriptionZh: "上午平行论坛。",
        tracks: [
          { title: "Business", titleZh: "商业", venueId: "nw-b103" },
          { title: "Art", titleZh: "艺术", venueId: "yenching-230" },
        ],
      },
      {
        id: "sat-lunch",
        time: "12:30 - 13:30",
        title: "Lunch",
        titleZh: "午餐",
        type: "meal",
      },
      {
        id: "sat-panels-2",
        time: "13:30 - 14:45",
        title: "Panels 2",
        titleZh: "分论坛 2",
        type: "panel-block",
        tracks: [
          { title: "Strategic Leadership", titleZh: "战略领导力", venueId: "nw-b103" },
          { title: "Building Bridges", titleZh: "搭建桥梁", venueId: "yenching-230" },
          { title: "Latin America", titleZh: "拉丁美洲", venueId: "nw-b101" },
        ],
      },
      {
        id: "sat-panels-3",
        time: "15:00 - 16:15",
        title: "Panels 3",
        titleZh: "分论坛 3",
        type: "panel-block",
        tracks: [
          { title: "Venture Capital", titleZh: "风险投资", venueId: "nw-b103" },
          { title: "Journalism", titleZh: "新闻", venueId: "yenching-230" },
          { title: "Sustainability", titleZh: "可持续发展", venueId: "nw-b101" },
        ],
      },
      {
        id: "sat-panels-4",
        time: "16:30 - 17:45",
        title: "Panels 4",
        titleZh: "分论坛 4",
        type: "panel-block",
        tracks: [
          { title: "Biotech", titleZh: "生物科技", venueId: "nw-b103" },
          { title: "Africa", titleZh: "非洲", venueId: "yenching-230" },
        ],
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
        tracks: [
          { title: "Tech", titleZh: "科技", venueId: "science-b" },
          { title: "History", titleZh: "历史", venueId: "science-c" },
          { title: "Southeast Asia", titleZh: "东南亚", venueId: "science-d" },
        ],
      },
      {
        id: "sun-panels-6",
        time: "11:30 - 12:45",
        title: "Panels 6",
        titleZh: "分论坛 6",
        type: "panel-block",
        tracks: [
          { title: "Film", titleZh: "电影", venueId: "science-b" },
          { title: "AI", titleZh: "人工智能", venueId: "science-c" },
          { title: "Global Health", titleZh: "全球健康", venueId: "science-d" },
        ],
      },
      {
        id: "sun-lunch",
        time: "12:45 - 13:45",
        title: "Lunch",
        titleZh: "午餐",
        type: "meal",
      },
      {
        id: "sun-panels-7",
        time: "14:00 - 15:15",
        title: "Panels 7",
        titleZh: "分论坛 7",
        type: "panel-block",
        tracks: [
          { title: "Geopolitics", titleZh: "地缘政治", venueId: "science-b" },
          { title: "Fintech / Crypto", titleZh: "金融科技 / 加密货币", venueId: "science-c" },
          { title: "Chinese Entrepreneurship", titleZh: "中国创业", venueId: "science-d" },
        ],
      },
      {
        id: "sun-panels-8",
        time: "15:30 - 16:45",
        title: "Panels 8",
        titleZh: "分论坛 8",
        type: "panel-block",
        tracks: [
          { title: "Economics", titleZh: "经济", venueId: "science-b" },
          { title: "Soft Power", titleZh: "软实力", venueId: "science-c" },
          { title: "Consumer", titleZh: "消费", venueId: "science-d" },
        ],
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

    if (!session.venueId || session.type === "meal") {
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
