/*import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import "./faceRegister.css"; // Import the CSS file

const FaceRegister = () => {
  const webcamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [isCameraOn, setIsCameraOn] = useState(true);

  // Webcam settings
  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  // Capture photo function
  const capturePhoto = useCallback(() => {
    if (webcamRef.current && photos.length < 5) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setPhotos([...photos, imageSrc]);
      }
    }
  }, [photos]);

  // Delete photo function
  const deletePhoto = (index) => {
    const updatedPhotos = photos.filter(
      (_, photoIndex) => photoIndex !== index
    );
    setPhotos(updatedPhotos);
  };

  // Toggle camera on/off
  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
    if (isCameraOn) {
      webcamRef.current.stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div className="webcam-container">
      <h1> Webcam Capture </h1>{" "}
      <div className="webcam-content">
        {" "}
        {isCameraOn ? (
          <div className="webcam-feed">
            <Webcam
              audio={false}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={videoConstraints}
            />{" "}
            <button
              className="webcam-button"
              onClick={capturePhoto}
              disabled={photos.length >= 5}
            >
              Capture Photo{" "}
            </button>{" "}
          </div>
        ) : (
          <p> Camera is off </p>
        )}{" "}
        <button className="toggle-button" onClick={toggleCamera}>
          {" "}
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}{" "}
        </button>{" "}
        <div className="photo-gallery">
          {" "}
          {photos.length === 5 && <p> You have taken 5 photos </p>}{" "}
          {photos.map((photo, index) => (
            <div key={index} className="photo-container">
              <img src={photo} alt={`Captured photo ${index + 1}`} />{" "}
              <button
                className="delete-button"
                onClick={() => deletePhoto(index)}
              >
                X{" "}
              </button>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FaceRegister;*/

import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./faceRegister.css";

const FaceRegister = () => {
  const webcamRef = useRef(null);
  const [localPhotos, setLocalPhotos] = useState([]);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const capturePhoto = useCallback(() => {
    if (webcamRef.current && localPhotos.length < 5) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setLocalPhotos([...localPhotos, imageSrc]);
      }
    }
  }, [localPhotos]);

  const savePhotosToBackend = async () => {
    setIsSaving(true);
    const uploadPromises = localPhotos.map(async (photo, index) => {
      const blob = await (await fetch(photo)).blob();
      const formData = new FormData();
      formData.append("photo", blob, `photo${index}.jpg`);

      try {
        const response = await axios.post(
          "http://localhost:5003/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response.data.filePath;
      } catch (error) {
        console.error("Error uploading photo:", error);
        return null;
      }
    });

    const uploadedPhotos = await Promise.all(uploadPromises);
    setLocalPhotos([]);
    setIsSaving(false);

    // Navigate to the success page
    navigate("/save-success", {
      state: {
        photos: uploadedPhotos.filter((path) => path !== null),
        message: "Your photos have been successfully saved!",
      },
    });
  };

  const deletePhoto = (index) => {
    const updatedPhotos = localPhotos.filter(
      (_, photoIndex) => photoIndex !== index
    );
    setLocalPhotos(updatedPhotos);
  };

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
    if (isCameraOn && webcamRef.current) {
      const tracks = webcamRef.current.stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div className="webcam-container">
      <h1> Webcam Capture </h1>{" "}
      <div className="webcam-content">
        {" "}
        {isCameraOn ? (
          <div className="webcam-feed">
            <Webcam
              audio={false}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={480}
              videoConstraints={videoConstraints}
            />{" "}
            <button
              className="webcam-button"
              onClick={capturePhoto}
              disabled={localPhotos.length >= 5}
            >
              Capture Photo{" "}
            </button>{" "}
          </div>
        ) : (
          <p> Camera is off </p>
        )}{" "}
        <button className="toggle-button" onClick={toggleCamera}>
          {" "}
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}{" "}
        </button>{" "}
        <div className="photo-gallery">
          {" "}
          {localPhotos.length > 0 && (
            <>
              {" "}
              {localPhotos.length === 5 && (
                <p> You have taken 5 photos </p>
              )}{" "}
              {localPhotos.map((photo, index) => (
                <div key={index} className="photo-container">
                  <img src={photo} alt={`Captured photo ${index + 1}`} />{" "}
                  <button
                    className="delete-button"
                    onClick={() => deletePhoto(index)}
                  >
                    X{" "}
                  </button>{" "}
                </div>
              ))}{" "}
              <button
                className="save-button"
                onClick={savePhotosToBackend}
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Save Photos"}{" "}
              </button>{" "}
            </>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FaceRegister;
