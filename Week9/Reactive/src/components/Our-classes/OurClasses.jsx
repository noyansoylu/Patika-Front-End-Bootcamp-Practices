import React, { useState } from "react";
import OCTabs from "./OCTabs";
import OCClassContent from "./OCClassContent";
import "./OurClasses.css";

const OurClasses = () => {
  const [activeTab, setActiveTab] = useState("Yoga");
  const [currentImage, setCurrentImage] = useState("/assets/yoga.jpg");
  const [text, setText] = useState({
    heading1: "Why are your Yoga?",
    heading2: "When comes Yoga Your Time",
  });
  const [isReversed, setIsReversed] = useState(false);

  const handleTabClick = (tab, image, reverse, text1, text2) => {
    setActiveTab(tab);
    setCurrentImage(image);
    setIsReversed(reverse);
    setText({ heading1: text1, heading2: text2 });
  };

  return (
    <section id="our-classes">
      <div className="container">
        <div className="our-class-header">
          <h3>OUR CLASSES</h3>
          <span></span>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a place of
            classical at <br />
            Hampden-Sydney College.
          </p>
        </div>
        <OCTabs activeTab={activeTab} onTabClick={handleTabClick} />
        <OCClassContent
          image={currentImage}
          text={text}
          isReversed={isReversed}
        />
      </div>
    </section>
  );
};

export default OurClasses;
