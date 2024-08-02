import React, { useState, useEffect } from "react";
export const Header = (props) => {

  /*const VideoPlayer = () => {
    return (
      <div>
        <video width="600" controls>
          <source src={`${process.env.PUBLIC_URL}/video/v1.mp4`} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    );
  };*/

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const text = props.data ? props.data.paragraph : "Loading";
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 70); // Ajusta la velocidad de escritura aquí
      return () => clearTimeout(timeoutId);
    }
  }, [index, props.data, displayedText]);

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p className="highlighted-text">
                  {displayedText}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saber más
                </a>{" "}

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
