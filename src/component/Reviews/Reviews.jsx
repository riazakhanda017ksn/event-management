import React from "react";
import "./Review.scss";
const Reviews = () => {
  return (
    <div className="container">
      <div className="Review">
        <div className="categories ">
          <div className="text-center">
            <h3>TESTIMONIALS</h3>
            <h1> Hear From Our Organizers</h1>
            <div className="reviews-description">
              <img
                src="https://i.ibb.co/X4Lg5ZF/aiony-haust-3-TLl-97-HNJo-unsplash.jpg"
                alt=""
              />
              <h4>Developer Alex</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                iure, eos tempore soluta laudantium quam sapiente magni officia,
                alias quisquam, itaque totam harum obcaecati suscipit neque
                ullam! Quas, sequi ea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
