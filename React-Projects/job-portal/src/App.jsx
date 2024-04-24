import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import { Route, Routes } from "react-router-dom";
import Jobs from "./Jobs.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
