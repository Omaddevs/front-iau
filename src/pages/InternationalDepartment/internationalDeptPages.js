export const INTL_DEPT_ROOT = "/international-department/cooperation";

export const INTL_DEPT_PAGES = [
  {
    id: "cooperation",
    path: "/international-department/cooperation",
    titleKey: "internationalCooperationDepartment",
  },
  {
    id: "career-services",
    path: "/international-department/career-services",
    titleKey: "careerServicesCenter",
  },
  {
    id: "faq",
    path: "/international-department/faq",
    titleKey: "faqMenu",
  },
];

export function getIntlDeptPage(pageId) {
  return INTL_DEPT_PAGES.find((page) => page.id === pageId) ?? null;
}
