import MapContainer from './components/MapContainer';
import MapControls from './components/MapControls';
import './components/styleRelleno.css';

const RellenoSanitario = () => {
  return (
    <div className="container2">
      <MapControls />
      <MapContainer />
    </div>
  );
};

export default RellenoSanitario;