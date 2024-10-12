import React, { useState, useEffect } from 'react';
import '../css/TestimonialSlider.css';

const TestimonialSlider: React.FC<{ videos: string[] }> = ({ videos }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="testimonial-slider">
      <div style={{ margin: '10px', marginBottom: '50px', display: 'flex', justifyContent: 'center', color: 'white', backgroundColor: 'transparent' }}>
        <h1 style={{ backgroundColor: 'transparent' }}>Testimonials</h1>
      </div>

      <div className={`video-container ${isSmallScreen ? 'vertical' : ''}`}>
        {videos.map((video, index) => (
          <div className="video-slide" key={index}>
            <video className="video" autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ marginTop: '10px', color: 'white' }}>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
