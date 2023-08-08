import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { BiLink,BiLogoGithub } from 'react-icons/bi';
import "./Carousel.css";
import data from '../Data/Projectcaurosal';
export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <div className={slide === idx ? "card" : "card slide-hidden"}>
            <div className="text">
              <h1 className={slide === idx ? "" : "slide-hidden"}>{item.title}</h1>
              <p>{item.desc}</p>
              <div className="code">
              {item.git ==""?(<></>): (<a href={item.git}><BiLogoGithub color="white" size={35}/></a>)}
              {item.link ==""? (<></>):(<a href={item.git}><BiLink color="white" size={35}/></a>)}
              </div>
            </div>
            <div className="img">
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            </div>
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
    </div>
  );
};