import React from "react";
import "./Bannner.scss";
import videoOne from "../../assets/video/video.mp4";
const Banner = () => {
  return (
    <div>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <>
          <div className="container">
            <div className="banner___text">
              <h1>Discover Any Event Around You</h1>
              <p>
                The ability to understand what key stakeholders want from your
                event is critical. These people may not be in the event
                industry, so they might not speak the lingo or know what’s
                realistic. You have to be able to discern their needs and make
                sure all
              </p>
              <a>
                <button>Explore More</button>
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Banner;
