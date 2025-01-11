import React from "react";

const OCTabs = ({ activeTab, onTabClick }) => {
  const tabsData = [
    {
      tab: "Yoga",
      image: "/assets/yoga.jpg",
      reverse: false,
      text1: "Why are your Yoga?",
      text2: "When comes Yoga Your Time",
    },
    {
      tab: "Group",
      image: "/assets/group.webp",
      reverse: true,
      text1: "Why are your Group?",
      text2: "When comes Group Your Time",
    },
    {
      tab: "Solo",
      image: "/assets/solo.jpg",
      reverse: false,
      text1: "Why are your Solo?",
      text2: "When comes Yoga Your Time",
    },
    {
      tab: "Stretching",
      image: "/assets/stret.webp",
      reverse: true,
      text1: "Why are your Stretching?",
      text2: "When comes Group Your Time",
    },
  ];

  return (
    <div className="tabs">
      {tabsData.map(({ tab, image, reverse, text1, text2 }) => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabClick(tab, image, reverse, text1, text2)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default OCTabs;
