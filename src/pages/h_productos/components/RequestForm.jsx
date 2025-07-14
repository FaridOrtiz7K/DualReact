import React, { useState } from 'react';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    producto: '',
    dep_sel: '',
    dependencia: '',
    ayuntamiento: '',
    ayu_nombre: '',
    nombre: '',
    telefono: '',
    correo: '',
    descripcion: ''
  });

  const [showDependencia, setShowDependencia] = useState(false);
  const [showAyuntamiento, setShowAyuntamiento] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Mostrar/ocultar campos adicionales
    if (name === 'dep_sel') {
      setShowDependencia(value === 'Si');
    } else if (name === 'ayuntamiento') {
      setShowAyuntamiento(value === 'Si');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Podrías usar fetch o axios para enviar los datos al servidor
  };

  const dependencias = [
    'Municipios', 'Gobierno', 'Hacienda', 'Bienestar', 
    // ... otras dependencias
  ];

  return (
    <div className="request-form">
      <h2 id="form-titulo">Formulario de Solicitud de Productos</h2>
      <hr className="customhr" />
      
      <form onSubmit={handleSubmit} aria-labelledby="form-titulo">
        <div className="row">
          <div className="form-group col-lg-6">
            <label htmlFor="producto">¿Tipo de Producto que requiere?</label>
            <select 
              className="form-control" 
              id="producto" 
              name="producto" 
              value={formData.producto}
              onChange={handleChange}
              required
            >
              <option value="">-- Seleccione --</option>
              <option value="Mapa">Mapa</option>
              <option value="Base de Datos">Base de Datos</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          
          {/* Resto de campos del formulario */}
          
          <div className="form-group col-lg-12" style={{ marginTop: '5%' }}>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </form>
      
      <hr className="customhr" />
      <br />
      <div className="col-lg-3">
        <a href="/" className="read-more">Volver</a>
      </div>
    </div>
  );
};

export default RequestForm;