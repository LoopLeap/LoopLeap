import React from 'react';
import '../css/VideoBanner.css'; // Create this file for styling

const VideoBanner: React.FC<{ videoSrc: string; overlayText: string }> = ({ videoSrc, overlayText }) => {
  return (
    <div className="video-banner">
      <video className="video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>{overlayText}</h1>
      </div>
    </div>
  );
};

export default VideoBanner;
