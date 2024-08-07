import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  FaHome,
  FaUserPlus,
  FaSignInAlt,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

function NavBar() {
  return (
    <>
      <nav className="taskbar">
        <Link to="/" className="site-name">
          IIT Guwahati{" "}
        </Link>{" "}
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/send-otp">
              <FaUserPlus /> Sign - Up{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/about">
              <FaInfoCircle /> About{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/contact">
              <FaEnvelope /> Contact Us{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </>
  );
}

export default NavBar;
