import React from 'react';
import ReviewCard from './ReviewCard';
import './Review.css';

const reviews = [
  {
    image: '/assets/client1.jpg',
    name: 'Diet Expert',
    title: 'Diet Expert',
    position: 'CFO',
    comment:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, aliquam itaque in perspiciatis nostrum repellat, consequatur ex aliquid voluptatum dolore laborum quae delectus id totam assumenda accusantium, unde eos facere?',
  },
  {
    image: '/assets/client2.jpg',
    name: 'Cardio Trainer',
    title: 'Cardio Trainer',
    position: 'CEO',
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur eaque quo molestiae consequatur maxime deleniti voluptatum sed, nisi incidunt! Odit dolor eaque voluptate a excepturi perspiciatis atque, voluptates cum.',
  },
];

const Review = () => {
  return (
    <section id="review">
      <div className="container">
        <div className="review-header">
          <h3>REVIEW CLIENT</h3>
          <span></span>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a place of classical at
            <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="review-part row row-gap-5">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              image={review.image}
              name={review.name}
              title={review.title}
              position={review.position}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
