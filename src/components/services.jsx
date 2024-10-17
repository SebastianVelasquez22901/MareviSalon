import React from "react";
import { FaCcVisa, FaCcMastercard, FaApplePay, FaLink, FaQrcode } from "react-icons/fa";
import '../styles/services.css';

export const Services = (props) => {
  const { data } = props;
  const columnClass = data && data.length % 2 === 0 ? "col-md-3" : "col-md-4";

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros precios</h2>
          <div className="service-desc-title">
            <p>
              En nuestro salón, ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades de nuestros clientes, incluyendo cortes de cabello, peinados, tratamientos capilares, manicura, pedicura y servicios de spa. Nuestro equipo de expertos está comprometido a proporcionar soluciones innovadoras y personalizadas para ayudarle a lucir y sentirse lo mejor posible.
            </p>
          </div>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className={`col-12 ${columnClass}`}>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="service-desc-title">
        <div className="payment-methods">
        <h3>Formas de Pago</h3>
        <div className="payment-icons">
          <div className="payment-icon">
            <FaCcVisa size={40} />
            <p>Visa</p>
          </div>
          <div className="payment-icon">
            <FaCcMastercard size={40} />
            <p>Mastercard</p>
          </div>
          <div className="payment-icon">
            <FaApplePay size={40} />
            <p>ApplePay</p>
          </div>
          <div className="payment-icon">
            <FaLink size={40} />
            <p>Links de pago</p>
          </div>
          <div className="payment-icon">
            <FaQrcode size={40} />
            <p>Códigos QR</p>
          </div>
        </div>
        <div className="paggo-info">
        <h4>Pagos con <a href="https://www.paggoapp.com/gt/inicio" target="_blank" rel="noopener noreferrer">Paggo.gt</a></h4>
        <p>
          También aceptamos pagos a través de <a href="https://www.paggoapp.com/gt/inicio" target="_blank" rel="noopener noreferrer"><strong>Paggo.gt</strong></a>, un servicio que permite realizar pagos de manera rápida y segura en línea. Con Paggo.gt, puedes pagar utilizando diversas formas de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias y más.
        </p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};