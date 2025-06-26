import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      {/* Aquí iría el contenido principal de tu aplicación */}
      <main>
        {/* ... */}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;