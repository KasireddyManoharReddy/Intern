/*import React from "react";
import { useLocation } from "react-router-dom";
import "./photoSuccess.css";

const SaveSuccess = () => {
  const location = useLocation();
  const { photos, message } = location.state || {
    photos: [],
    message: "No photos saved",
  };

  return (
    <div className="success-container">
      <h1> Save Success </h1> <p> {message} </p>{" "}
      <div className="photo-gallery">
        {" "}
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="photo-container">
              <img
                src={`http://localhost:5003/${photo}`}
                alt={`Saved photo ${index + 1}`}
              />{" "}
            </div>
          ))
        ) : (
          <p> No photos saved yet. </p>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default SaveSuccess;*/

import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./photoSuccess.css";

const PhotoSuccess = () => {
  const location = useLocation();
  const { photos, message } = location.state || { photos: [], message: "" };

  return (
    <div className="save-success-container">
      <h1> Photos Saved Successfully! </h1> <p> {message} </p>
      <div className="additional-info">
        <h2> Additional Information </h2>{" "}
        <p> You have successfully saved the following photos: </p>{" "}
      </div>{" "}
      <div className="photos-gallery">
        {" "}
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <img
                src={`http://localhost:5003/${photo}`}
                alt={`Saved photo ${index + 1}`}
              />{" "}
              <p> Photo {index + 1} </p>{" "}
            </div>
          ))
        ) : (
          <p> No photos saved yet. </p>
        )}{" "}
      </div>{" "}
      <div className="navigation-buttons">
        <Link to="/home" className="button">
          Go Home{" "}
        </Link>{" "}
        <Link to="/faceregister" className="button">
          Register More Faces{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default PhotoSuccess;
