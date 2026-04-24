import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

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

import StaffDepartments from "./pages/staff/StaffDepartments";
import DepartmentCommunity from "./pages/staff/DepartmentCommunity";
import PreFoundation from "./pages/Admissions/PreFoundation";
import Foundation from "./pages/Admissions/Foundation";
import Undergraduate from "./pages/Admissions/Undergraduate";
import Postgraduate from "./pages/Admissions/Postgraduate";
import PhDAndDSc from "./pages/Admissions/PhDAndDSc";
import AgricultureModules from "./pages/Admissions/AgricultureModules";
import BusinessManagementModules from "./pages/Admissions/BusinessManagementModules";
import AgroEconomics from "./pages/Admissions/AgroEconomics";
import AgroLogistics from "./pages/Admissions/AgroLogistics";
import FoodSafetyManagement from "./pages/Admissions/FoodSafetyManagement";
import SmartSustainableAgriculture from "./pages/Admissions/SmartSustainableAgriculture";
import MScSustainableAgriculture from "./pages/Admissions/MScSustainableAgriculture";
import MScAgriBusinessManagement from "./pages/Admissions/MScAgriBusinessManagement";
import ScientificCouncil from "./pages/Research/ScientificCouncil";
import ResearchProjects from "./pages/Research/ResearchProjects";
import ResearchPublication from "./pages/Research/ResearchPublication";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/Contact/ContactUs";
import Gucae from "./pages/Research/Gucae";
import Summary2025 from "./pages/Festivals/Summary2025";
import Summary2024 from "./pages/Festivals/Summary2024";
import Summary2023 from "./pages/Festivals/Summary2023";
import Reasons22 from "./pages/Festivals/Reasons22";
import AcademicCalendar from "./pages/StudentLife/AcademicCalendar";
import StudentHandbook from "./pages/StudentLife/StudentHandbook";
import LatestNews from "./pages/News/LatestNews";
import NewsDetail from "./pages/News/NewsDetail";
import AllEvents from "./pages/Events/AllEvents";
import EventDetail from "./pages/Events/EventDetail";
import ChatWidget from "./components/ChatWidget";

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

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/staff" element={<StaffDepartments />} />
        <Route path="/staff/:deptId" element={<DepartmentCommunity />} />
        <Route path="/admissions/pre-foundation" element={<PreFoundation />} />
        <Route path="/admissions/foundation" element={<Foundation />} />
        <Route path="/admissions/undergraduate" element={<Undergraduate />} />
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

        {/* Research Routes */}
        <Route path="/research/scientific-council" element={<ScientificCouncil />} />
        <Route path="/research/research-projects" element={<ResearchProjects />} />
        <Route path="/research/research-publication" element={<ResearchPublication />} />
        <Route path="/research/gucae" element={<Gucae />} />
        <Route path="/festivals/summary-2025" element={<Summary2025 />} />
        <Route path="/festivals/summary-2024" element={<Summary2024 />} />
        <Route path="/festivals/summary-2023" element={<Summary2023 />} />
        <Route path="/festivals/22-reasons" element={<Reasons22 />} />
        <Route path="/student-life/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/student-life/student-handbook" element={<StudentHandbook />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/our-staff" element={<Navigate to="/staff" replace />} />
        <Route path="/department-community" element={<Navigate to="/staff" replace />} />
      </Routes>

      <SocialNetworks />
      <Footer />

      {/* ── Global Chatbot Widget ── */}
      <ChatWidget />
    </div>
  );
}
