import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TabsComponent from '../components/TabsComponent';

const DataConsultPage = () => {
  const [activeTab, setActiveTab] = useState('mun');

  const tabs = [
    {
      id: 'mun',
      label: 'Por Municipio',
      content: <PublicTab />
    },
    {
      id: 'citypark',
      label: 'CITYPARK',
      content: <ProtectedTab 
        iframeSrc="https://lookerstudio.google.com/embed/reporting/acb40988-5fe0-4334-8480-054b31b3d3d3/page/p_o2s43u4eid"
        password="secure456"
        buttonText="Enlace al bucket de información"
      />
    },
    {
      id: 'cityflow',
      label: 'CITYFLOW',
      content: <ProtectedTab 
        iframeSrc="https://lookerstudio.google.com/embed/reporting/f2f5e981-374f-4301-897e-6ce751a7f26c/page/p_7an505870c"
        password="password123"
        buttonText="Enlace al bucket de información"
      />
    }
  ];

  return (
    <div className="data-consult-page">
      <Header />
      
      <section className="section">
        <div className="container" style={{ paddingTop: '2%', paddingBottom: '5%' }}>
          <h2>Consulta de datos del Banco Único de Información Estadística y Geográfica</h2>
          <br />
          
          <TabsComponent 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DataConsultPage;