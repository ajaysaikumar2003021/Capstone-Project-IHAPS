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

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
