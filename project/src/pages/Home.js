import React from "react";
import "./Home.css";
import image1 from "./image1.jpg"; // Adjust the path as needed

function Home() {
  return (
    <div className="home-container">
      <div className="image1">
        <img src={image1} alt="Exam Proctoring System" className="home-image" />
      </div>{" "}
      <div className="homediv">
        <h1> Exam Proctoring System </h1>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
