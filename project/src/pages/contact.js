import React from "react";
import "./contact.css"; // Import the CSS file for styling
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function Contact() {
  return (
    <div className="contact-container">
      <h1> Contact Us </h1>{" "}
      <p>
        We’ d love to hear from you!Whether you have questions about our
        services, need support, or just want to say hello, feel free to reach
        out to us through the following channels:
      </p>{" "}
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"> </i>{" "}
          <div>
            <h2> Email </h2> <p> a.eppalapalli @iitg.ac.in </p>{" "}
            <p> kasireddy.reddy @iitg.ac.in </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="contact-item">
          <i className="fas fa-phone"> </i>{" "}
          <div>
            <h2> Phone </h2> <p> +91 - 6300348207 </p> <p> +91 - 6302085238 </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"> </i>{" "}
          <div>
            <h2> Address </h2>{" "}
            <p>
              IIT Guwahati, Amingaon, North Guwahati, Guwahati, Assam 781039.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Contact;
