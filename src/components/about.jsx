import React, { useState } from "react";

export const About = (props) => {
  const images = ["img/about.jpeg", "img/about1.jpeg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="image-slider">
              <button onClick={showPreviousImage} className="nav-button prev-button">
                ←
              </button>
              <img src={images[currentImageIndex]} className="img-responsive" alt="" />
              <button onClick={showNextImage} className="nav-button next-button">
                →
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>¿Por qué este es tu salón de confianza?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};