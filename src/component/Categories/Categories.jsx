import React from "react";
import "./Categories.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { data, data2 } from "./categoriesData";

const Categories = () => {
  return (
    <div className="container">
      <div className="categories">
        <h3>ALL THE FUN STARTS HERE</h3>
        <h1>Entertainment Guides</h1>

        <div className="categories___item">
          {data.map((item) => {
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
                  <a>
                    View Event <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="categories____item">
          {data2.map((item) => {
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
                  <a>
                    View Event <AiOutlineArrowRight />
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

export default Categories;
