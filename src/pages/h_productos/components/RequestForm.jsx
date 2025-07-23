import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = () => {
  // Estado para almacenar los datos del formulario
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

  // Estado para campos condicionales
  const [showDependencia, setShowDependencia] = useState(false);
  const [showAyuntamiento, setShowAyuntamiento] = useState(false);
  
  // Estado para manejar el envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Lista de dependencias
  const dependencias = [
    'Municipios', 'Gobierno', 'Hacienda', 'Bienestar', 
    'Infraestructura Pública', 'Economía', 'Medio Ambiente',
    'Campo', 'Turismo', 'Contraloría', 'Educación', 'Salud',
    'Seguridad', 'Trabajo', 'Movilidad', 'Cultura',
    'Planeación - Despacho', 'Planeación - Coord. Normatividad',
    'Planeación - Coord. Evaluación', 'Planeación - Coord. Planeación',
    'Comisión Estatal de Mejora Regulatoria', 'Oficialía Mayor',
    'Procuraduría', 'Dif'
  ];

  // Manejador de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Mostrar/ocultar campos condicionales
    if (name === 'dep_sel') {
      setShowDependencia(value === 'Si');
      if (value !== 'Si') {
        setFormData(prev => ({ ...prev, dependencia: '' }));
      }
    } else if (name === 'ayuntamiento') {
      setShowAyuntamiento(value === 'Si');
      if (value !== 'Si') {
        setFormData(prev => ({ ...prev, ayu_nombre: '' }));
      }
    }
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validación adicional del teléfono
      if (formData.telefono && !/^\d{10}$/.test(formData.telefono)) {
        throw new Error('El teléfono debe tener 10 dígitos');
      }

      // Envío a la API
      const response = await axios.post('/api/solicitudes', formData);

      if (response.status === 200) {
        setSubmitSuccess(true);
        // Resetear el formulario
        setFormData({
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
        setShowDependencia(false);
        setShowAyuntamiento(false);
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitError(error.message || 'Hubo un error al enviar el formulario. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resetear mensaje de éxito después de 5 segundos
  if (submitSuccess) {
    setTimeout(() => setSubmitSuccess(false), 5000);
  }

  return (
    <div className="request-form-container">
      <h2 id="form-titulo">Formulario de Solicitud de Productos</h2>
      <hr className="form-divider" />
      
      {/* Mensajes de estado */}
      {submitSuccess && (
        <div className="alert alert-success" role="alert">
          ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}
      
      {submitError && (
        <div className="alert alert-danger" role="alert">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} aria-labelledby="form-titulo" noValidate>
        <div className="form-row">
          {/* Campo: Tipo de Producto */}
          <div className="form-group col-md-6">
            <label htmlFor="producto">¿Tipo de Producto que requiere? *</label>
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

          {/* Campo: Pertenece a dependencia */}
          <div className="form-group col-md-6">
            <label htmlFor="dep_sel">¿Forma parte de alguna dependencia? *</label>
            <select
              className="form-control"
              id="dep_sel"
              name="dep_sel"
              value={formData.dep_sel}
              onChange={handleChange}
              required
            >
              <option value="">-- Seleccione --</option>
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
          </div>

          {/* Campo condicional: Dependencia */}
          {showDependencia && (
            <div className="form-group col-md-12">
              <label htmlFor="dependencia">En caso de ser "Sí", ¿de cuál dependencia?</label>
              <select
                className="form-control"
                id="dependencia"
                name="dependencia"
                value={formData.dependencia}
                onChange={handleChange}
              >
                <option value="">--- selecciona tu dependencia ---</option>
                {dependencias.map((dep, index) => (
                  <option key={index} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
          )}

          {/* Campo: Pertenece a ayuntamiento */}
          <div className="form-group col-md-6">
            <label htmlFor="ayuntamiento">¿Forma parte de algún ayuntamiento? *</label>
            <select
              className="form-control"
              id="ayuntamiento"
              name="ayuntamiento"
              value={formData.ayuntamiento}
              onChange={handleChange}
              required
            >
              <option value="">-- Seleccione --</option>
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
          </div>

          {/* Campo condicional: Ayuntamiento */}
          {showAyuntamiento && (
            <div className="form-group col-md-6">
              <label htmlFor="ayu_nombre">En caso de ser "Sí", ¿de cuál ayuntamiento?</label>
              <input
                type="text"
                className="form-control"
                id="ayu_nombre"
                name="ayu_nombre"
                value={formData.ayu_nombre}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Campo: Nombre */}
          <div className="form-group col-md-6">
            <label htmlFor="nombre">Nombre de persona que solicita *</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo: Teléfono */}
          <div className="form-group col-md-6">
            <label htmlFor="telefono">Teléfono de contacto *</label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Ej: 1234567890"
            />
            <small className="form-text text-muted">Debe contener 10 dígitos</small>
          </div>

          {/* Campo: Correo */}
          <div className="form-group col-md-6">
            <label htmlFor="correo">Correo electrónico *</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo: Descripción */}
          <div className="form-group col-12">
            <label htmlFor="descripcion">
              Por favor, describa el producto que necesita. De ser necesario algún miembro del equipo lo contactará para obtener más detalles. *
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              name="descripcion"
              rows={4}
              value={formData.descripcion}
              onChange={handleChange}
              maxLength={350}
              required
            />
            <small className="form-text text-muted">Máximo 350 caracteres</small>
          </div>

          {/* Botón de envío */}
          <div className="form-group col-12 text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  {' Enviando...'}
                </>
              ) : (
                'Enviar Solicitud'
              )}
            </button>
          </div>
        </div>
      </form>

      <hr className="form-divider" />
      <div className="text-center">
        <a href="/" className="btn btn-outline-secondary">
          <i className="bi bi-arrow-left"></i> Volver
        </a>
      </div>
    </div>
  );
};

export default RequestForm;