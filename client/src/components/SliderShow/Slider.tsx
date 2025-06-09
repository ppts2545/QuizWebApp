import React, { useState } from 'react';
import "./Slider.css";

import iu1 from '../assets/images/iu1.jpeg';
import iu2 from '../assets/images/iu2.jpeg';
import iu3 from '../assets/images/iu3.jpeg';

type SliderProps = {
  // Define your props here if needed
};

const Slider: React.FC<SliderProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: iu1, caption: "Caption Text" },
    { id: 2, image: iu2, caption: "Caption Two" },
    { id: 3, image: iu3, caption: "Caption Three" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`mySlides fade ${index === currentSlide ? 'active' : ''}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        >
          <div className="numbertext">{slide.id} / {slides.length}</div>
          <img src={slide.image} style={{ width: '100%' }} alt={`Slide ${slide.id}`} />
          <div className="text">{slide.caption}</div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Dots indicator */}
      <div style={{ textAlign: 'center' }}>
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;