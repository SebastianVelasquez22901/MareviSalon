import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Swal from 'sweetalert2';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

const initialState = {
  name: "",
  email: "",
  message: "",
};
const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const position = [14.634, -90.594];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    
    emailjs
  .sendForm("service_vsayn36", "template_ofhyd05", e.target, "fgOJk7n4Pzh1bz92Y")
  .then(
    (result) => {
      console.log(result.text);
      clearState();
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Tu mensaje ha sido enviado exitosamente.',
      });
    },
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.',
      });
    }
  );
      
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contáctanos</h2>
                <p>
                  Cualquier duda o comentario no dudes en contactarnos y agenda tu cita con nosotros.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit} style={{ padding: "20px", border: "2px solid #FFD700", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Tu nombre"
                      required
                      onChange={handleChange}
                      style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Tu email"
                      required
                      onChange={handleChange}
                      style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Mensaje"
                  required
                  onChange={handleChange}
                  style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px" }}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar
              </button>
            </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de Contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <h3>Nuestra Ubicación</h3>
              <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <a href={`https://www.google.com/maps?q=${position[0]},${position[1]}`} target="_blank" rel="noopener noreferrer">
                      ¡Estamos aquí! Haz clic para ver en Google Maps.
                    </a>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
              <ul>
  <li>
    <a href={props.data ? props.data.facebook : "/"}>
      <FaFacebook size={32} />
    </a>
  </li>
  <li>
    <a href={props.data ? props.data.tiktok : "/"}>
      <AiFillInstagram size={32} />
    </a>
  </li>
  <li>
    <a href={props.data ? props.data.instagram : "/"}>
      <AiFillTikTok size={32} />
      </a>
  </li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
