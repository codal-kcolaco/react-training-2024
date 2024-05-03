import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import Jobs from "./Jobs.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import PostJob from "./PostJob.jsx";
import { MyJobs } from "./MyJobs.jsx";
import { JobView } from "./JobView.jsx";
import { JobDescription } from "./JobDescription.jsx";
import EditJob from "./EditJob.jsx";
import { ViewApplicationsEmployers } from "./ViewApplicationsEmployers.jsx";
import { MyApplications } from "./MyApplications.jsx";
import PrivacyPolicyPage from "./PrivacyPolicy.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsAndConditions from "./TermsAndConditions.jsx";
import Contact from "./Contact.jsx";
import { About } from "./About.jsx";
import { UserPortal } from "./UserPortal.jsx";

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
        <Route path="/my-jobs/edit" element={<EditJob />} />
        <Route
          path="/my-jobs/applications"
          element={<ViewApplicationsEmployers />}
        />
        <Route path="/job-view" element={<JobView />} />
        <Route path="/job-description" element={<JobDescription />} />
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
