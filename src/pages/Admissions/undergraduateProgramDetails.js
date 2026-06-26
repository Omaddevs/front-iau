import agriImg from "../../iau-images/3.png";
import businessImg from "../../iau-images/4.png";
import image5 from "../../iau-images/5.png";
import image6 from "../../iau-images/6.png";
import javlonbekImg from "../../images/javlonbek-asrakulov.png";
import begzodImg from "../../images/begzod.png";

const YEAR_ONE_BUSINESS = [
  "U1021 – People and Organisations",
  "U1015 – Business Finance",
  "U1019 – Global Business Environment",
  "U1018 – Principles of Marketing",
  "U1020 – Principles of Economics",
  "U1001 – English for Academic Purposes II (EAPII)",
  "U1022 – Business Informatics",
  "U1013 – Introduction to the Agri-Food Industry",
];

export const PROGRAM_DETAILS = {
  agroEconomics: {
    id: "agroEconomics",
    layout: "economics",
    titleKey: "agroEconomics",
    breadcrumbKey: "breadAgroEcon",
    image: agriImg,
    courseKeys: ["courseAgroEcon"],
    profile: {
      name: "Javlonbek Asrakulov",
      email: "javlonbek.asrakulov@iau.uz",
      img: javlonbekImg,
      roleKey: "headOfDepartment",
    },
    skills: ["skillQuant", "skillPolicy", "skillResearch", "skillConsult"],
    modules: {
      year1: YEAR_ONE_BUSINESS,
      year2: [
        "U2030 – Marketing Management",
        "U2017 – Practical E- Business and E-Commerce",
        "U2011 – Introduction to Research Skills",
        "U2004 – Personal and Professional Development Skills and Employability",
        "U2033 – Environmental and Natural Resource Economics",
        "U2022 – Entrepreneurship, Intrapreneurship and Enterprise Development",
        "U2023 – Experimental Design and Statistical Analysis",
        "U2024 – Business Strategy",
      ],
      year3: [
        "U3004 – Dissertation",
        "U3016 – International Business Issues",
        "U3017 – Smart Food Systems",
        "U3022 – Econometrics",
        "U3021 – Corporate Finance",
        "U3023 – Circular Economy and Circular Business Models",
        "U3015 – Entrepreneurship",
      ],
    },
    showCareersList: true,
  },

  agroLogistics: {
    id: "agroLogistics",
    layout: "logistics",
    titleKey: "agroLogistics",
    breadcrumbKey: "breadAgroLog",
    image: businessImg,
    courseKeys: ["courseAgroLog"],
    profile: {
      name: "Javlonbek Asrakulov",
      email: "javlonbek.asrakulov@iau.uz",
      img: javlonbekImg,
      roleKey: "headOfDepartment",
    },
    flowSteps: ["flowSource", "flowTransport", "flowDistribute", "flowDeliver"],
    modules: {
      year1: YEAR_ONE_BUSINESS,
      year2: [
        "U2032 – Logistics Information Technology",
        "U2017 – Practical E- Business and E-Commerce",
        "U2011 – Introduction to Research Skills",
        "U2004 – Personal and Professional Development Skills and Employability",
        "U2018 – Operations Management",
        "U2019 – Agricultural Products Logistics",
        "U2020 – Supply Chain Management",
        "U2021 – Logistics Systems Planning and Design",
      ],
      year3: [
        "U3004 – Dissertation",
        "U3016 – International Business Issues",
        "U3017 – Smart Food Systems",
        "U3018 – International Logistics Practice",
        "U3019 – International Marketing",
        "U3020 – Strategic Management",
        "U3021 – Corporate Finance",
      ],
    },
    showCareersList: true,
  },

  foodSafety: {
    id: "foodSafety",
    layout: "safety",
    titleKey: "foodSafety",
    breadcrumbKey: "breadFood",
    image: image5,
    courseKeys: ["courseFoodSafety"],
    profile: {
      name: "Bekhzod Kodirkhonov",
      email: "bekhzod.kodirkhonov@iau.uz",
      img: begzodImg,
      roleKey: "headOfDepartment",
    },
    pillars: ["pillarScience", "pillarCompliance", "pillarChain"],
    modules: {
      year1: YEAR_ONE_BUSINESS,
      year2: [
        "U2031 – Food Science and Technology",
        "U2017 – Practical E- Business and E-Commerce",
        "U2011 – Introduction to Research Skills",
        "U2004 – Personal and Professional Development Skills and Employability",
        "U2018 – Operations Management",
        "U2025 – Human Nutrition, Health and Society",
        "U2026 – People, Food and Society",
        "U2027 – Food Safety and Quality Management",
      ],
      year3: [
        "U3004 – Research Project / Dissertation",
        "U3016 – International Business Issues",
        "U3017 – Smart Food Systems",
        "U3024 – Food, Ethics and Governance",
        "U3025 – Inspiring Change in Policy and Practice",
        "U3026 – Poverty and Food Security",
        "U3027 – Facing the Global Challenges in Food and Agriculture",
      ],
    },
    showCareersList: false,
  },

  smartAgriculture: {
    id: "smartAgriculture",
    layout: "smart",
    titleKey: "smartAgriculture",
    breadcrumbKey: "breadSmart",
    image: image6,
    courseKeys: ["courseSmart1", "courseSmart2"],
    profile: {
      name: "Bekhzod Kodirkhonov",
      email: "bekhzod.kodirkhonov@iau.uz",
      img: begzodImg,
      roleKey: "headOfDepartment",
    },
    metrics: ["metricSustain", "metricTech", "metricInnovation"],
    modules: {
      year1: [
        "U1007 – Soil and the Environment",
        "New – Data Science and Management",
        "U1422 – Ecosystem Services and Sustainability",
        "U1441 – Applied Animal Science",
        "U1442 – Applied Plant Science",
        "U1001 – English for Academic Purposes II (EAPII)",
        "U1325 – Agriculture and Food Systems",
        "U1445 – Innovation and Technology",
      ],
      year2Core: [
        "U2004 – Professional Development",
        "New – Managing Smart Agricultural Systems",
        "U2011 – Introduction to Research Skills",
        "U2373 – Agronomy",
        "U2372 – Animal Health and Welfare",
        "U2349 – The Resilience of Agro-Ecosystems",
      ],
      year2Elective: [
        "New – Regenerative Food Systems",
        "New – Fresh Produce Production",
        "New – Grassland and Forage Production",
        "New – Fibre Production (Plant and Animal)",
        "New – Urban and Controlled Environment Systems",
        "New – Precision Agriculture",
      ],
      year3Core: [
        "U3004 – Research Project / Dissertation",
        "U3330 – Technology and Agroecological Innovation",
        "U3329 – Climate Change and Natural Resource Challenges",
        "U3331 – Food Supply Systems and Policy",
        "U3332 – Specialist Study (Shell Module)",
      ],
      year3Elective: [
        "New – Sustainable Farm Management",
        "New – Agronomy Challenges and Solutions",
        "New – Land Tenure and Governance",
        "New – Livestock System Challenges and Solutions",
        "New – Data Application and Innovation",
        "New – Applied Agri-Finance",
      ],
    },
    showCareersList: false,
  },
};

export function getProgramDetail(id) {
  return PROGRAM_DETAILS[id] ?? null;
}
