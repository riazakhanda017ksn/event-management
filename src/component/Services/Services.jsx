import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { products } from "../Categories/categoriesData";

const Services = () => {
  return (
    <div className="container">
      <div className="categories">
        <h3>EVENTS THAT SELL OUT FAST</h3>
        <h1>Check out our popular events</h1>

        <div className="products____item">
          {products.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  background: `url(${item.img})`,
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "60vh",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <div className="items">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <a>
                    Buy Now
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
