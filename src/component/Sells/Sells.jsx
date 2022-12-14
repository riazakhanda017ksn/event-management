import React from "react";
import { sells, sells2, sells3 } from "../Categories/categoriesData";
import Carousel from "react-material-ui-carousel";
const Sells = () => {
  return (
    <div className="Sells">
      <div className="container">
        <div className="categories">
          <div>
            <h3>HOW TO</h3>
            <h1> Your Ticket Can Be Sold</h1>
          </div>
        </div>
        <Carousel>
          <div className="how-to-sell">
            {sells.map((item) => {
              return (
                <>
                  <div className="sells-ticket">
                    <div className="text">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                      <h3>01</h3>
                    </div>
                  </div>
                  <div className="sells-img">
                    <img src={item.img} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="how-to-sell">
            {sells2.map((item) => {
              return (
                <>
                  <div className="sells-ticket">
                    <div className="text">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                      <h3>02</h3>
                    </div>
                  </div>
                  <div className="sells-img">
                    <img src={item.img} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="how-to-sell">
            {sells3.map((item) => {
              return (
                <>
                  <div className="sells-ticket">
                    <div className="text">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                      <h3>03</h3>
                    </div>
                  </div>
                  <div className="sells-img">
                    <img src={item.img} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </Carousel>
        <br />
        <div className="text-center get-start">
          <button>Get Start</button>
        </div>
      </div>
    </div>
  );
};

export default Sells;
