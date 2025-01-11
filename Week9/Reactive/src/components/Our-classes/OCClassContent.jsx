import React from "react";

const OCClassContent = ({ image, text, isReversed }) => {
  return (
    <div
      className={`class-content ${isReversed ? "reverse" : ""}`}
      id="class-section"
    >
      <div className="class-text">
        <h2>{text.heading1}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quibusdam minus, hic cum sit delectus distinctio odit fuga ad mollitia
          ex, corrupti autem quidem repellendus quae officia provident commodi
          nostrum.
        </p>
        <h2>{text.heading2}</h2>
        <p>Saturday-Sunday: 8:00am - 10:00am</p>
        <p>Monday-Tuesday: 10:00am - 12:00pm</p>
        <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
      </div>
      <div>
        <img src={image} alt="Class" id="class-image" />
      </div>
    </div>
  );
};

export default OCClassContent;
