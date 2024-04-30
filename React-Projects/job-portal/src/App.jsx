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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
