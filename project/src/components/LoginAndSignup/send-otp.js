import React, { useState } from "react";
import axios from "axios";
import "./OTP.css";
import { useNavigate } from "react-router-dom";

const OtpGenerator = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Function to handle OTP generation and sending via email
  const handleGenerateOtp = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsOtpSent(false);

    try {
      // Using proxy setup in package.json for development
      const response = await axios.post("http://localhost:5000/send-otp", {
        email,
      });
      setMessage(response.data.message);
      setIsOtpSent(true);
    } catch (error) {
      console.error("Failed to send OTP:", error);
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      // Using proxy setup in package.json for development
      const response = await axios.post("http://localhost:5000/verify-otp", {
        email,
        otp,
      });
      if (response.data.message === "OTP is valid") {
        setMessage("OTP verified successfully!");
        // Navigate to the desired page after successful OTP verification
        navigate("/success"); // Replace '/success' with the path you want to redirect to
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("An error occurred while verifying OTP. Please try again.");
    }
  };

  return (
    <div className="otp-generator">
      <h2> Generate and Verify OTP </h2>{" "}
      <form onSubmit={handleGenerateOtp}>
        <div>
          <label htmlFor="email"> IITG Email ID: </label>{" "}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your IITG email"
            required
          />
        </div>{" "}
        <button type="submit"> Generate OTP </button>{" "}
      </form>{" "}
      {error && <p className="error"> {error} </p>}{" "}
      {message && <p className="success"> {message} </p>}{" "}
      {isOtpSent && (
        <div className="otp-verification">
          <h3> Verify OTP </h3>{" "}
          <form onSubmit={handleVerifyOtp}>
            <div>
              <label htmlFor="otp"> Enter OTP: </label>{" "}
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP received"
                required
              />
            </div>{" "}
            <button type="submit"> Verify OTP </button>{" "}
          </form>{" "}
          {error && <p className="error"> {error} </p>}{" "}
          {message && <p className="success"> {message} </p>}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default OtpGenerator;
