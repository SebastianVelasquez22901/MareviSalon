import { Image } from "./image";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root'); // Necesario para accesibilidad

export const Gallery = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index, event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : props.data.length - 1));
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < props.data.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestras fotos</h2>
          <p>
            Podras observar algunas fotos de nuestros servicios y productos
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    onClick={(event) => openModal(i, event)}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '77vw', // Usar unidades relativas
            height: '55vh', // Usar unidades relativas
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <button 
          onClick={closeModal} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          X
        </button>
        {selectedImageIndex !== null && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <button 
              onClick={showPreviousImage} 
              style={{
                cursor: 'pointer',
                marginRight: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              ←
            </button>
            <img 
              src={props.data[selectedImageIndex].largeImage} 
              alt="Selected" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                borderRadius: '10px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
              }} 
            />
            <button 
              onClick={showNextImage} 
              style={{
                cursor: 'pointer',
                marginLeft: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              →
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};