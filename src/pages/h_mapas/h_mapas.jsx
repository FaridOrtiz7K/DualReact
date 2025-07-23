import Banner from '../../components/Banner_P';
import AccordionSection from './components/AccordionSection';
import './components/style.css'
import productosImage from '/images/cel_map2.jpg';

const HidalgoMapsPage = () => {

  const bannerData = {
    titulo: "Hidalgo en Mapas",
    subtitulo: "Mapas interactivos de interés ciudadano, Gastronomía, recreación, Cultura, etc.",
    imagenFondo: productosImage 
  };

   const accordionData = [
    {
      id: "headingOne",
      title: "Recreación, Gastronomía y Turismo",
      icon: "/images/logos/turismo.png",
      items: [
        { name: "Rutas ciclismo de montaña", path: "hgoenmapas/RGyT/Rutas%20ciclismo%20de%20montaña.html" },
        { name: "Ciclovías", path: "hgoenmapas/RGyT/Ciclovías.html" },
        { name: "Senderos y rutas de trekking más populares", path: "hgoenmapas/RGyT/Senderos%20y%20rutas%20de%20trekking%20m%c3%a1s%20populares.html" },
        { name: "Zonas de camping y áreas de picnic", path: "hgoenmapas/RGyT/Zonas%20de%20camping%20y%20%c3%a1reas%20de%20picnic.html" },
        { name: "Parques y Jardines", path: "hgoenmapas/RGyT/Parques%20y%20Jardines.html" },
        { name: "Plazas comerciales", path: "hgoenmapas/RGyT/Plazas%20comerciales.html" },
        { name: "Artesanías", path: "hgoenmapas/RGyT/Artesanías.html" },
        { name: "Tianguis", path: "hgoenmapas/RGyT/Tianguis.html" },
        { name: "Mercados", path: "hgoenmapas/RGyT/Mercados.html" },
        { name: "Cabañas y haciendas", path: "hgoenmapas/RGyT/Cabañas%20y%20haciendas.html" },
        { name: "Kioscos de orientación turística", path: "hgoenmapas/RGyT/Kioscos%20de%20atención%20turísticos.html" }
      ],
      defaultOpen: true
    },
    {
      id: "headingTwo",
      title: "Cultura y Educación",
      icon: "/images/logos/cultura.png",
      items: [
        { name: "Museos", path: "hgoenmapas/CyE/Museos%20y%20Sitios%20Históricos.html" },
        { name: "Bibliotecas", path: "hgoenmapas/CyE/Bibliotecas.html" },
        { name: "Centros culturales", path: "hgoenmapas/CyE/Centros%20Culturales.html" },
        { name: "Teatros y salas de cine", path: "hgoenmapas/CyE/Teatros%20y%20salas%20de%20cine.html" },
        { name: "Monumentos históricos y lugares de importancia cultural", path: "#" },
        { name: "Universidades públicas", path: "hgoenmapas/CyE/Universidades%20públicas.html" },
        { name: "Centros de investigación y tecnología", path: "hgoenmapas/CyE/Centros%20de%20Investigación%20y%20Tecnología.html" },
        { name: "Pueblos indígenas histórico", path: "hhgoenmapas/CyE/Pueblos%20Históricos.html" }
      ]
    },
    {
      id: "headingThree",
      title: "Gobierno, Desarrollo Social y Seguridad",
      icon: "/images/logos/gobierno.png",
      items: [
        { name: "Palacios de Gobierno", path: "hgoenmapas/GDSyS/Palacios%20de%20Gobierno.html" },
        { name: "Oficinas de Gobierno del Estado de Hidalgo", path: "hgoenmapas/GDSyS/Oficinas%20de%20Gobierno%20del%20Estado%20de%20Hidalgo.html" }
      ]
    },
    {
      id: "headingFour",
      title: "Medio Ambiente",
      icon: "/images/logos/ambiente.png",
      items: [
        { name: "Áreas Naturales protegidas", path: "hgoenmapas/MA/Áreas%20Naturales%20Protegidas.html" },
        { name: "Estaciones Meteorológicas Automáticas", path: "hgoenmapas/MA/Estaciones%20Meteorológicas%20Automáticas.html" },
        { name: "Estaciones de Monitoreo de Calidad del Aire", path: "hgoenmapas/MA/Estaciones%20de%20Monitoreo%20de%20Calidad%20del%20Aire.html" },
        { name: "Sitios de disposición final", path: "hgoenmapas/MA/Sitios%20de%20disposición%20final.html" }
      ]
    },
    {
      id: "headingFive",
      title: "Movilidad y Conectividad",
      icon: "/images/logos/movilidad.png",
      items: [
        { name: "Cobertura Red Móvil 2G", path: "hgoenmapas/MyC/Cobertura%20red%20móvil%202G.html" },
        { name: "Cobertura Red Móvil 3G", path: "hgoenmapas/MyC/Cobertura%20red%20móvil%203G.html" },
        { name: "Cobertura Red Móvil 4G", path: "hgoenmapas/MyC/Cobertura%20red%20móvil%204G.html" },
        { name: "Red Ferroviaria", path: "hgoenmapas/MyC/Red%20Ferroviaria.html" }
      ]
    },
    {
      id: "headingSix",
      title: "Salud y Deporte",
      icon: "/images/logos/deporte.png",
      items: [
        { name: "Centros de Salud", path: "hgoenmapas/SyD/Centros%20de%20Salud.html" },
        { name: "Hospitales", path: "hgoenmapas/SyD/Hospitales.html" },
        { name: "Instalación deportiva recreativa", path: "hgoenmapas/SyD/Instalación%20deportiva%20recreativa.html" },
        { name: "Lugares para realizar deportes extremos", path: "hgoenmapas/SyD/Lugares%20para%20realizar%20deportes%20extremos.html" }
      ]
    }
  ];
return (
    <div className="hidalgo-maps-container">
      <Banner {...bannerData} />
      
      <section className="section hidalgo-section">
        <div className="container">
          <div className="accordion hidalgo-accordion" id="accordionExample">
            {accordionData.map((section, index) => (
              <AccordionSection 
                key={index}
                id={`heading${index + 1}`}
                collapseId={`collapse${index + 1}`}
                {...section}
              />
            ))}
          </div>
          
          <hr className="red small-margin hidalgo-hr" />
          <div className="col-lg-3 hidalgo-back-link">
            <a href="/" className="read-more">Volver</a>
          </div>
        </div>
      </section>
      
    </div>
  );
};
export default HidalgoMapsPage;