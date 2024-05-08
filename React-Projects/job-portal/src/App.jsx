import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Jobs from "./components/Jobs/Jobs.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import PostJob from "./components/PostJob/PostJob.jsx";
import { MyJobs } from "./components/MyJobs/MyJobs.jsx";

import { JobDescription } from "./components/JobDescription/JobDescription.jsx";
import EditJob from "./components/EditJob/EditJob.jsx";
import { ViewApplicationsEmployers } from "./components/ViewApplicationsEmployers/ViewApplicationsEmployers.jsx";
import { MyApplications } from "./components/MyApplications/MyApplications.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { About } from "./components/About/About.jsx";
import { UserPortal } from "./components/UserPortal/UserPortal.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/my-jobs/edit/:id" element={<EditJob />} />
        <Route
          path="/my-jobs/applications/:id"
          element={<ViewApplicationsEmployers />}
        />

        <Route path="/job-description/:id" element={<JobDescription />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/user-portal" element={<UserPortal />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
