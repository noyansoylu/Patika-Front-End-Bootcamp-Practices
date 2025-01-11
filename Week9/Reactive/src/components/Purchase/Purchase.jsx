import React from "react";
import PurchaseCard from "./PurchaseCard";
import "./Purchase.css";

const purchaseItems = [
  {
    image: "/assets/purchase1.jpg",
    title: "Kettlebell / 5kg",
    originalPrice: "89.99$",
    discountedPrice: "59.99$",
  },
  {
    image: "/assets/purchase2.jpg",
    title: "Treadmill",
    originalPrice: "899.99$",
    discountedPrice: "599.99$",
  },
  {
    image: "/assets/purchase3.jpg",
    title: "Adjustable Dumbbell",
    originalPrice: "89.99$",
    discountedPrice: "59.99$",
  },
  {
    image: "/assets/purchase4.jpg",
    title: "Kettlebell / 3kg",
    originalPrice: "89.99$",
    discountedPrice: "59.99$",
  },
];

const Purchase = () => {
  return (
    <section id="purchase">
      <div className="container">
        <div className="purchase-header">
          <h3>PURCHASE FROM US</h3>
          <span></span>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a place of
            classical at
            <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {purchaseItems.map((item, index) => (
            <PurchaseCard
              key={index}
              image={item.image}
              title={item.title}
              originalPrice={item.originalPrice}
              discountedPrice={item.discountedPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purchase;
