export const UNDERGRADUATE_TRACKS = [
  { id: "uzbek", labelKey: "trackUzbek", path: "/admissions/undergraduate/uzbek" },
  { id: "english", labelKey: "trackEnglish", path: "/admissions/undergraduate/english" },
  { id: "russian", labelKey: "trackRussian", path: "/admissions/undergraduate/russian" },
];

export const DEFAULT_UNDERGRADUATE_TRACK = "english";

export function isUndergraduateTrack(track) {
  return UNDERGRADUATE_TRACKS.some((item) => item.id === track);
}

export function getUndergraduateTrackPath(trackId = DEFAULT_UNDERGRADUATE_TRACK) {
  const id = isUndergraduateTrack(trackId) ? trackId : DEFAULT_UNDERGRADUATE_TRACK;
  return `/admissions/undergraduate/${id}`;
}

export function withTrackQuery(path, trackId) {
  if (!isUndergraduateTrack(trackId)) return path;
  return `${path}?track=${trackId}`;
}

export function getTrackFromSearch(search) {
  const track = new URLSearchParams(search).get("track");
  return isUndergraduateTrack(track) ? track : DEFAULT_UNDERGRADUATE_TRACK;
}

export const UNDERGRADUATE_PROGRAMS = [
  {
    titleKey: "agroEconomics",
    link: "/admissions/agro-economics",
    imgKey: "agri",
    strip: "blue",
    englishCard: {
      theme: "economics",
      teaserKey: "teaserAgroEcon",
      badgeKey: "badgeFeatured",
      degree: "BSc(Hons)",
    },
  },
  {
    titleKey: "agroLogistics",
    link: "/admissions/agro-logistics",
    imgKey: "business",
    strip: "solid-blue",
    englishCard: {
      theme: "logistics",
      teaserKey: "teaserAgroLog",
      badgeKey: "badgeIndustry",
      degree: "BSc(Hons)",
    },
  },
  {
    titleKey: "foodSafety",
    link: "/admissions/food-safety",
    imgKey: "image5",
    strip: "blue",
    englishCard: {
      theme: "safety",
      teaserKey: "teaserFood",
      badgeKey: "badgeDemand",
      degree: "BSc(Hons)",
    },
  },
  {
    titleKey: "smartAgriculture",
    link: "/admissions/smart-agriculture",
    imgKey: "image6",
    strip: "solid-blue",
    englishCard: {
      theme: "smart",
      teaserKey: "teaserSmart",
      badgeKey: "badgeFuture",
      degree: "BSc(Hons)",
    },
  },
];
