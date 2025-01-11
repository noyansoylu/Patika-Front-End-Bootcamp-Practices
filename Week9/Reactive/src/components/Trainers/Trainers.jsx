import React from "react";
import TrainerCard from "./TrainerCard";
import "./Trainers.css";

const trainersData = [
  {
    image: "/assets/trainer1.jpg",
    name: "Jennie Doe",
    role: "Fitness Trainer",
  },
  {
    image: "/assets/trainer2.jpg",
    name: "John Doe",
    role: "Lifting Trainer",
  },
  {
    image: "/assets/trainer3.jpg",
    name: "Jane Doe",
    role: "Cardio Trainer",
  },
];

const Trainers = () => {
  return (
    <section id="trainers">
      <div className="container">
        <div className="trainers-header">
          <h3>OUR BEST TRAINERS</h3>
          <span></span>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a place of
            classical at
            <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="trainer-cards">
          {trainersData.map((trainer, index) => (
            <TrainerCard
              key={index}
              image={trainer.image}
              name={trainer.name}
              role={trainer.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
