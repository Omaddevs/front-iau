export const DEPARTMENT_TITLES = {
  rectorate: "Rectorate",
  deans: "Deans",
  heads: "Heads of Departments",
  "academic-staff": "Academic Staff",
  "administrative-staff": "Administrative and Support Staff",
};

export const DEPARTMENT_ORDER = [
  "rectorate",
  "deans",
  "heads",
  "academic-staff",
  "administrative-staff",
];

// Manual overrides by staff full name.
// Value can be:
// - department id string, e.g. "heads"
// - object with custom id/title, e.g. { id: "control-execution", title: "Department of Control and Execution Control" }
export const DEPARTMENT_OVERRIDES = {};
