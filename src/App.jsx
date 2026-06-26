import "./App.css";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AccessibilityToolbar from "./components/AccessibilityToolbar/AccessibilityToolbar";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import RouteReadyPulse from "./components/LoadingScreen/RouteReadyPulse";
import { useAppBoot } from "./components/LoadingScreen/useAppBoot";
import { useRouteLoading } from "./components/LoadingScreen/useRouteLoading";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import AcademicsProgram from "./components/AcademicsProgram/AcademicsProgram";
import PartnersSection from "./components/PartnersSection";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import SocialNetworks from "./components/SocialNetworks";
import Footer from "./components/Footer";

const StaffDepartments = lazy(() => import("./pages/staff/StaffDepartments"));
const DepartmentCommunity = lazy(() => import("./pages/staff/DepartmentCommunity"));
const PreFoundation = lazy(() => import("./pages/Admissions/PreFoundation"));
const Foundation = lazy(() => import("./pages/Admissions/Foundation"));
const UndergraduateTrack = lazy(() => import("./pages/Admissions/UndergraduateTrack"));
const AdmissionsHubPage = lazy(() => import("./pages/Admissions/AdmissionsHubPage"));
const Postgraduate = lazy(() => import("./pages/Admissions/Postgraduate"));
const PhDAndDSc = lazy(() => import("./pages/Admissions/PhDAndDSc"));
const AgricultureModules = lazy(() => import("./pages/Admissions/AgricultureModules"));
const BusinessManagementModules = lazy(() => import("./pages/Admissions/BusinessManagementModules"));
const AgroEconomics = lazy(() => import("./pages/Admissions/AgroEconomics"));
const AgroLogistics = lazy(() => import("./pages/Admissions/AgroLogistics"));
const FoodSafetyManagement = lazy(() => import("./pages/Admissions/FoodSafetyManagement"));
const SmartSustainableAgriculture = lazy(() => import("./pages/Admissions/SmartSustainableAgriculture"));
const MScSustainableAgriculture = lazy(() => import("./pages/Admissions/MScSustainableAgriculture"));
const MScAgriBusinessManagement = lazy(() => import("./pages/Admissions/MScAgriBusinessManagement"));
const ScientificCouncil = lazy(() => import("./pages/Research/ScientificCouncil"));
const ResearchProjects = lazy(() => import("./pages/Research/ResearchProjects"));
const ResearchPublication = lazy(() => import("./pages/Research/ResearchPublication"));
const AboutUs = lazy(() => import("./pages/About/AboutUs"));
const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));
const Gucae = lazy(() => import("./pages/Research/Gucae"));
const Summary2025 = lazy(() => import("./pages/Festivals/Summary2025"));
const Summary2024 = lazy(() => import("./pages/Festivals/Summary2024"));
const Summary2023 = lazy(() => import("./pages/Festivals/Summary2023"));
const Reasons22 = lazy(() => import("./pages/Festivals/Reasons22"));
const InternationalDepartmentPage = lazy(() => import("./pages/InternationalDepartment/InternationalDepartmentPage"));
const AcademicCalendar = lazy(() => import("./pages/StudentLife/AcademicCalendar"));
const StudentHandbook = lazy(() => import("./pages/StudentLife/StudentHandbook"));
const IauClubs = lazy(() => import("./pages/StudentLife/IauClubs"));
const PresentationForApplicants = lazy(() => import("./pages/StudentLife/PresentationForApplicants"));
const InternationalStudents = lazy(() => import("./pages/StudentLife/InternationalStudents"));
const EkofaolTalabalar = lazy(() => import("./pages/StudentLife/EkofaolTalabalar"));
const EkofaolNewsDetail = lazy(() => import("./pages/StudentLife/EkofaolNewsDetail"));
const LatestNews = lazy(() => import("./pages/News/LatestNews"));
const NewsDetail = lazy(() => import("./pages/News/NewsDetail"));
const AllEvents = lazy(() => import("./pages/Events/AllEvents"));
const EventDetail = lazy(() => import("./pages/Events/EventDetail"));

function Home() {
  return (
    <>
      <Header />
      <Section />
      <NewsSection />
      <EventsSection />
      <AcademicsProgram />
      <PartnersSection />
      <UsefulLinks />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/staff" element={<StaffDepartments />} />
      <Route path="/staff/:deptId" element={<DepartmentCommunity />} />
      <Route path="/admissions" element={<Navigate to="/admissions/how-to-apply" replace />} />
      <Route path="/admissions/how-to-apply" element={<AdmissionsHubPage pageId="how-to-apply" />} />
      <Route path="/admissions/offer-holder-guide" element={<AdmissionsHubPage pageId="offer-holder-guide" />} />
      <Route path="/admissions/tuition-fees" element={<AdmissionsHubPage pageId="tuition-fees" />} />
      <Route path="/admissions/open-days" element={<AdmissionsHubPage pageId="open-days" />} />
      <Route path="/admissions/pre-foundation" element={<PreFoundation />} />
      <Route path="/admissions/foundation" element={<Foundation />} />
      <Route path="/admissions/undergraduate" element={<Navigate to="/admissions/undergraduate/english" replace />} />
      <Route path="/admissions/undergraduate/:track" element={<UndergraduateTrack />} />
      <Route path="/admissions/postgraduate" element={<Postgraduate />} />
      <Route path="/admissions/phd" element={<PhDAndDSc />} />
      <Route path="/admissions/agriculture" element={<AgricultureModules />} />
      <Route path="/admissions/business-management" element={<BusinessManagementModules />} />
      <Route path="/admissions/agro-economics" element={<AgroEconomics />} />
      <Route path="/admissions/agro-logistics" element={<AgroLogistics />} />
      <Route path="/admissions/food-safety" element={<FoodSafetyManagement />} />
      <Route path="/admissions/smart-agriculture" element={<SmartSustainableAgriculture />} />
      <Route path="/admissions/msc-sustainable-agriculture" element={<MScSustainableAgriculture />} />
      <Route path="/admissions/msc-agri-business" element={<MScAgriBusinessManagement />} />
      <Route path="/research/scientific-council" element={<ScientificCouncil />} />
      <Route path="/research/research-projects" element={<ResearchProjects />} />
      <Route path="/research/research-publication" element={<ResearchPublication />} />
      <Route path="/research/gucae" element={<Gucae />} />
      <Route path="/festivals/summary-2025" element={<Summary2025 />} />
      <Route path="/festivals/summary-2024" element={<Summary2024 />} />
      <Route path="/festivals/summary-2023" element={<Summary2023 />} />
      <Route path="/festivals/22-reasons" element={<Reasons22 />} />
      <Route path="/international-department/cooperation" element={<InternationalDepartmentPage pageId="cooperation" />} />
      <Route path="/international-department/career-services" element={<InternationalDepartmentPage pageId="career-services" />} />
      <Route path="/international-department/faq" element={<InternationalDepartmentPage pageId="faq" />} />
      <Route path="/student-life/academic-calendar" element={<AcademicCalendar />} />
      <Route path="/student-life/student-handbook" element={<StudentHandbook />} />
      <Route path="/student-life/iau-clubs" element={<IauClubs />} />
      <Route path="/student-life/presentation-for-applicants" element={<PresentationForApplicants />} />
      <Route path="/student-life/international-students" element={<InternationalStudents />} />
      <Route path="/student-life/ekofaol-talabalar" element={<EkofaolTalabalar />} />
      <Route path="/student-life/ekofaol-talabalar/:id" element={<EkofaolNewsDetail />} />
      <Route path="/latest-news" element={<LatestNews />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/events" element={<AllEvents />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/our-staff" element={<Navigate to="/staff" replace />} />
      <Route path="/department-community" element={<Navigate to="/staff" replace />} />
    </Routes>
  );
}

export default function App() {
  const { showLoader, loaderExiting, completeBoot, booting } = useAppBoot();
  const { navLoading, navExiting, onRouteReady } = useRouteLoading(booting);

  return (
    <>
      <div
        className={[
          "iau-app-shell",
          booting ? "iau-app-shell--booting" : "",
          showLoader && !loaderExiting ? "iau-app-shell--hidden" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <AccessibilityToolbar />
        <Navbar />

        <Suspense fallback={null}>
          <AppRoutes />
          <RouteReadyPulse onReady={onRouteReady} />
        </Suspense>

        <SocialNetworks />
        <Footer />
      </div>

      {showLoader && (
        <LoadingScreen
          exiting={loaderExiting}
          onComplete={completeBoot}
          loop
        />
      )}
      {!booting && navLoading && (
        <LoadingScreen exiting={navExiting} lockScroll={false} loop />
      )}
    </>
  );
}
