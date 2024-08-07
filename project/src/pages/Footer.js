import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2> Follow Us </h2>{" "}
          <Link
            to="https://www.facebook.com"
            target="_blank"
            className="footer-link"
          >
            <i className="fab fa-facebook-f"> </i> Facebook{" "}
          </Link>{" "}
          <Link
            to="https://www.twitter.com"
            target="_blank"
            className="footer-link"
          >
            <i className="fab fa-twitter"> </i> Twitter{" "}
          </Link>{" "}
          <Link
            to="https://www.instagram.com"
            target="_blank"
            className="footer-link"
          >
            <i className="fab fa-instagram"> </i> Instagram{" "}
          </Link>{" "}
        </div>{" "}
        <div className="footer-section">
          <h2> Contact Us </h2>{" "}
          <p>
            <i className="fas fa-envelope"> </i> a.eppalapalli@iitg.ac.in{" "}
          </p>{" "}
          <p>
            <i className="fas fa-envelope"> </i> kasireddy.reddy@iitg.ac.in{" "}
          </p>{" "}
        </div>{" "}
        <div className="footer-section">
          <h2> Useful Links </h2>{" "}
          <Link to="/about" className="footer-link">
            <i className="fas fa-info-circle"> </i> About{" "}
          </Link>{" "}
          <Link to="/contact" className="footer-link">
            <i className="fas fa-address-book"> </i> Contact Us{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer-bottom">
        & copy; {new Date().getFullYear()}
        IIT Guwahati.All Rights Reserved.{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
