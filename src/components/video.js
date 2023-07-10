import React from "react";
import ReactPlayer from 'react-player';
import banner12345 from "./Images/banner12345.jpg";
import "./video.css";

const Video = () => {
return (
<div className="image-section">
          <div className="image-wrapper">
          <img src={banner12345} style={{ maxWidth: '100%' }} />
          </div>
          <div className="image-wrapper">
            <ReactPlayer url='https://youtu.be/myYipHt3Z40' style={{ maxWidth: '100%' }} />
          </div>
    </div>
    )
}

export default Video;


