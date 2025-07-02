// components/MapSection.jsx
import React from 'react';

const MapSection = ({ title = "UBICACIÓN", mapUrl }) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-primary" style={{ fontWeight: 700 }}>
                            {title}
                        </h3>
                        <hr />
                    </div>
                </div>
            </div>
            <iframe
                src={mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.994347693391!2d-98.8041431242979!3d20.134283417897844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a8d523d568d%3A0x92d9d067fe2857fc!2sCITNOVA!5e0!3m2!1ses-419!2smx!4v1709925226635!5m2!1ses-419!2smx"}
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Mapa de ubicación"
            ></iframe>
        </section>
    );
};

export default MapSection;