import React, { useState } from "react";
import "./Login.css";
import { FaLock, FaEnvelope } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // To navigate programmatically

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5002/api/users/login",
        {
          email, // Sending email instead of username
          password,
        }
      );

      // Assuming the response contains a token
      const { token } = response.data;

      // Store the token (e.g., in local storage)
      localStorage.setItem("authToken", token);

      // Redirect to a protected route, e.g., dashboard
      navigate("/dashboard");
    } catch (err) {
      // Handle error response
      if (err.response && err.response.status === 400) {
        setError("Invalid email or password");
      } else {
        setError("Server error, please try again later");
      }
    }

    setLoading(false);
  };

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1> Login </h1> {error && <div className="error"> {error} </div>}{" "}
          <div className="input-box">
            <input
              type="email" // Input type is now email
              placeholder="Email" // Placeholder updated to Email
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>{" "}
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>{" "}
          <div className="forgot">
            <label>
              <input type="checkbox" /> Remember me{" "}
            </label>{" "}
            <Link to="/forgot-password"> Forgot password </Link>{" "}
          </div>{" "}
          <button type="submit" disabled={loading}>
            {" "}
            {loading ? "Logging in..." : "Login"}{" "}
          </button>{" "}
          <div className="registration">
            Don 't have an account? <Link to="/success">Register</Link>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
