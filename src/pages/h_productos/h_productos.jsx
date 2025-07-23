import './components/style.css'
import Banner_P from '../../components/Banner_P'; 
import ServicesTabs from './components/ServicesTabs';
import MapSelector from './components/MapSelector';
import RequestForm from './components/RequestForm';

import productosImage from '/images/productos.jpg';

const ProductsPage = () => {
  const bannerData = {
    title: "Productos y servicios",
    subtitle: "Cartografía temática, análisis de datos, geoestadística, entre otros servicios que ofrece el SIGEH",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/productos.jpg')"
  };

  return (
    <div className="products-page">
      <Banner_P {...bannerData} />
      
      <section className="section">
        <div className="container">
          <h2>¿Qué hacemos?</h2>
          <br />
          <ServicesTabs />
        </div>
      </section>

      <section className="container">
        <h2>Banco de mapas</h2>
        <hr className="customhr" />
        <MapSelector />
      </section>
    </div>
  );
};

export default ProductsPage;