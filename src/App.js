import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import StudentInformationSystem from './components/Services/StudentInformationSystem';
import OnlineAdmissionSystem from './components/Services/OnlineAdmissionSystem';
import FeesManagementSystem from './components/Services/FeesManagementSystem';
import OnlineExaminationSystem from './components/Services/OnlineExaminationSystem';
import AttendanceManagementSystem from'./components/Services/AttendanceManagementSystem';
import HigherEducationSystem from './components/Services/HigherEducationSystem';
import UniversityManagementSoftware from'./components/Services/UniversityManagementSoftware';
import InstituteManagementSoftware from'./components/Services/InstituteManagementSoftware';
import CollegeManagementSoftware from'./components/Services/CollegeManagementSoftware';
import SchoolManagementSoftware from'./components/Services/SchoolManagementSoftware';
import FacultyManagementSoftware from'./components/Services/FacultyManagementSystem';
import LearningManagementSoftware from'./components/Services/LearningManagementSystem';
import Blogs from './components/Blogs/Blogs';
import Team from './components/Team/Team';
import Organization from './components/Oranization/Organization';
import ContactUs from './components/ContatcUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Importing the global CSS file

function App() {
  return (
    <Router>
      <MyNavbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}> {/* Adjusts for footer height */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/student-information-system" element={<StudentInformationSystem />} />
          <Route path="/online-admission-system" element={<OnlineAdmissionSystem />} />
          <Route path="/fees-management-system" element={<FeesManagementSystem />} />
          <Route path="/online-examination-system" element={<OnlineExaminationSystem/>}/>
          <Route path="/attendance-management-system" element={<AttendanceManagementSystem/>}/>
          <Route path="/higher-education-system" element={<HigherEducationSystem/>}/>
          <Route path="/university-management-software" element={<UniversityManagementSoftware/>}/>
          <Route path="/institute-management-software" element={<InstituteManagementSoftware/>}/>
          <Route path="/college-management-software" element={<CollegeManagementSoftware/>}/>
          <Route path="school-management-software" element={<SchoolManagementSoftware/>}/>
          <Route path="faculty-management-software" element={<FacultyManagementSoftware/>}/>
          <Route path="learning-management-software" element={<LearningManagementSoftware/>}/>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Team" element={<Team />}/>
        </Routes>
      </div>
      <Footer /> {/* Add Footer component here */}
    </Router>
  );
}

export default App;
