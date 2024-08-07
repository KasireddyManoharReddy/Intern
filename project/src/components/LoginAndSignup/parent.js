import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FaceRegister from "./faceRegister";

const ParentComponent = () => {
  const navigate = useNavigate();
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [username, setUsername] = useState(""); // Example: Get username from input or context

  const handleSavePhotos = (photos) => {
    // Save photos logic, update savedPhotos state
    setSavedPhotos(photos);

    // Navigate to success page with savedPhotos and username
    navigate("/save-success", { state: { savedPhotos, username } });
  };

  return (
    <>
      <FaceRegister onSavePhotos={handleSavePhotos} />{" "}
      {/* Other components or content */}{" "}
    </>
  );
};

export default ParentComponent;
