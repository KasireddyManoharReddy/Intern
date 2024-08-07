import React, { useState } from "react";
import "./success.css";
import { FaLock, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/register", {
        email,
        password,
      });
      setSuccess(response.data.message);
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code outside of 2xx range
        setError(err.response.data.error);
      } else if (err.request) {
        // The request was made but no response was received
        setError("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an error
        setError("Error in setting up request");
      }
    }
  };

  return (
    <div className="register">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1> Registration </h1>{" "}
          {error && <div className="error"> {error} </div>}{" "}
          {success && <div className="success"> {success} </div>}{" "}
          <div className="input-box">
            <input
              type="text"
              placeholder="@iitg.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>{" "}
          <div className="input-box">
            <input
              type="Password"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>{" "}
          <div className="input-box">
            <input
              type="Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>{" "}
          <button type="submit"> Register </button>{" "}
          <div className="registration">
            Already have an account ? <Link to="/Login"> Login </Link>{" "}
          </div>{" "}
          <div className="registration">
            Register face - <Link to="/faceRegister"> Register </Link>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Register;
