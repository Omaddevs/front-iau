export const ADMISSIONS_HUB_PAGES = [
  {
    id: "how-to-apply",
    navKey: "HOW TO APPLY",
    titleKey: "howToApply",
    bodyKey: "howToApplyBody",
    path: "/admissions/how-to-apply",
  },
  {
    id: "admission-results-2026",
    navKey: "ADMISSION RESULTS 2026/2027",
    titleKey: "admissionResults2026",
    bodyKey: "admissionResults2026Body",
    path: "/admissions/admission-results-2026",
  },
  {
    id: "offer-holder-guide",
    navKey: "OFFER HOLDER GUIDE",
    titleKey: "offerHolderGuide",
    bodyKey: "offerHolderGuideBody",
    path: "/admissions/offer-holder-guide",
  },
  {
    id: "tuition-fees",
    navKey: "TUITION FEES",
    titleKey: "tuitionFees",
    bodyKey: "tuitionFeesBody",
    path: "/admissions/tuition-fees",
  },
  {
    id: "open-days",
    navKey: "OPEN DAYS AT IAU",
    titleKey: "openDaysAtIau",
    bodyKey: "openDaysAtIauBody",
    path: "/admissions/open-days",
  },
];

export function getAdmissionsHubPage(id) {
  return ADMISSIONS_HUB_PAGES.find((page) => page.id === id) ?? null;
}
