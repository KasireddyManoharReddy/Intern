import "./App.css";
import Footer from "./pages/Footer";
import NavBar from "./Navbar";
import Home from "./pages/Home";
import Register from "./components/LoginAndSignup/success";
import About from "./pages/about";
import Login from "./components/LoginAndSignup/Login";
import Contact from "./pages/contact";
import FaceRegister from "./components/LoginAndSignup/faceRegister";
import { Route, Routes } from "react-router-dom";
import OtpGenerator from "./components/LoginAndSignup/send-otp";
import Body from "./components/LoginAndSignup/body";
import PhotoSuccess from "./components/LoginAndSignup/photoSuccess";
import ParentComponent from "./components/LoginAndSignup/parent";

function App() {
  return (
    <>
      <div className="cont1">
        <NavBar />
      </div>{" "}
      <div className="cont2">
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/success" element={<Register />} />{" "}
          <Route path="/send-otp" element={<OtpGenerator />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/faceRegister" element={<FaceRegister />} />{" "}
          <Route path="/dashboard" element={<Body />} />{" "}
          <Route path="/save-success" element={<PhotoSuccess />} />{" "}
          <Route path="/parent" element={<ParentComponent />} />{" "}
        </Routes>{" "}
      </div>{" "}
      <div className="cont3">
        <Footer />
      </div>{" "}
    </>
  );
}

export default App;
