import React, { useState } from 'react';
import '../css/TestimonialSlider.css'; // Create this file for styling

const TestimonialSlider: React.FC<{ videos: string[] }> = ({ videos }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
      <div className="testimonial-slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div style={{margin: '10px' ,marginBottom : '50px' , display : "flex" , justifyContent: "center", color:"white", backgroundColor:'transparent'}}>  <h1 style={{ backgroundColor:'transparent'}}> Testimonials </h1> </div>
         
      <div className={`video-container ${isPaused ? 'paused' : ''}`}>
        {videos.map((video, index) => (
          <div style={{ backgroundColor:'transparent'}} className="video-slide" key={index}>
                <video style={{ borderRadius: "20px"}} className="video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ marginTop : "10px" ,backgroundColor:'transparent' , color:"white",display : "flex" , justifyContent: "center"}} >  <span style={{color:"white"}}> detaisl</span> </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
