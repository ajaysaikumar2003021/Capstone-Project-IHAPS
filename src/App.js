import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ExecutiveDirector from "./Pages/ExecutiveDirector";
import Curriculum from "./Pages/Curriculum";
import Faculty from "./Pages/Faculty";
import CommunityEngagement from "./Pages/CommunityEngagement";
import Food from "./Pages/Food";
import Transportation from "./Pages/Transportation";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ReportCurriculum from "./Reports/ReportCurriculum";
import AcademicCourses from "./Reports/AcademicCourses";
import AcademicPrograms from "./Reports/AcademicPrograms";
import CampusAsLL from "./Reports/Campusaslivinglab";
import FacultyResearchService from "./Reports/FacultyResearchService";
import PeertoPeer from "./Reports/PeertoPeer";
import BasicDocument  from "./Pdfs/AcademicCourses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/admin"></Route>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-ihaps" element={<AboutUs />} />
          <Route path="/executive-director" element={<ExecutiveDirector />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route
            path="/community-engagement"
            element={<CommunityEngagement />}
          />
          <Route path="/food" element={<Food />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/report-curriculum" element={<ReportCurriculum/>}/>
          <Route path="/report-academic-courses" element={<AcademicCourses />}/>
          <Route path="/report-academic-programs" element={<AcademicPrograms />}/>
          <Route path="/report-campus-as-living-lab" element={<CampusAsLL />}/>
          <Route path="/report-faculty-research-service" element={<FacultyResearchService />}/>
          <Route path="/report-peer-to-peer" element={<PeertoPeer/>}/>
          {/* <Route path="/basic-document" element={<BasicDocument />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
