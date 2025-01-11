import React from "react";
import "./Trainers.css";

const TrainerCard = ({ image, name, role }) => {
  return (
    <div className="trainer-images">
      <img src={image} alt={name} className="img-fluid" />
      <div className="left-bar"></div>
      <div className="right-bar"></div>
      <div className="top-bar"></div>
      <div className="bottom-bar"></div>
      <div className="trainer-info pt-5">
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
