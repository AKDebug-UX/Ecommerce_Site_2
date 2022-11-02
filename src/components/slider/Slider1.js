import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData1 } from "../../slider-data1";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData1.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(prevSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {sliderData1.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
