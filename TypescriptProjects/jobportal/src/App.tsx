import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import PostJob from "./components/PostJob/PostJob";
import { MyJobs } from "./components/MyJobs/MyJobs";

import { JobDescription } from "./components/JobDescription/JobDescription";
import EditJob from "./components/EditJob/EditJob";
import { ViewApplicationsEmployers } from "./components/ViewApplicationsEmployers/ViewApplicationsEmployers";
import { MyApplications } from "./components/MyApplications/MyApplications";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Contact from "./components/Contact/Contact";
import { About } from "./components/About/About";
import { UserPortal } from "./components/UserPortal/UserPortal";

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
