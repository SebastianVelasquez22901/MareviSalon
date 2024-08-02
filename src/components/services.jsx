import React from "react";

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
      </div>
    </div>
  );
};