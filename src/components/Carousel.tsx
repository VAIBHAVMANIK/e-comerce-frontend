import { useEffect, useState } from "react";
import data from "../assets/data.json";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface SlideDataType {
  id: number;
  title: string;
  companyName: string;
  description: string;
  src: string;
  alt: string;
}

const Carousel = () => {
  const Slides: SlideDataType[] = data.Slides;
  const [currentSlide, SetCurrentSlide] = useState<number>(0);
  const [isPaused, SetIsPaused] = useState<boolean>(false);
  const prevSlide = () => {
    SetCurrentSlide(currentSlide == 0 ? Slides.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    SetCurrentSlide(currentSlide == Slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        console.log(isPaused);
        SetCurrentSlide(
          currentSlide == Slides.length - 1 ? 0 : currentSlide + 1
        );
      }
    },10000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="carousel">

      {Slides.map((slide, idx) => {
        return (
          <div
            className={currentSlide === idx ? "slide" : "slide slide-hidden"}
            onMouseEnter={() => SetIsPaused(true)}
            onMouseLeave={() => SetIsPaused(false)}
            key={idx}
          >
            <button className="exp-btn" onClick={prevSlide}>
            <FaArrowAltCircleLeft/>
            </button>
            <div className="desc-carosel">
              <h1 className="slide-title">Category-{slide.title}</h1>
              <h2 className="slide-companyName">Company-{slide.companyName}</h2>
              <h2 className="slide-description">Description</h2>
              <h3 className="slide-description">{slide.description}</h3>
            </div>

            <img
              src={slide.src}
              alt={slide.alt}
              key={idx}
            />
            <button className="exp-btn" onClick={nextSlide}>
              <FaArrowAltCircleRight/>
            </button>
          </div>
        );
      })}
      <span className="indicators">
        {Slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                currentSlide === idx
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
              onClick={() => SetCurrentSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
