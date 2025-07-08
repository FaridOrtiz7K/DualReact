// components/VideoPopup.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../../src/assets/css/style.css';


const VideoPopup = ({
  videoSrc = "./images/sec/6.jpg",
  closeButtonImg = "./slide/cancel.png",
  initialVolume = 0.1, // Valor entre 0 y 1 (10% del volumen)
  autoPlay = true,
  showControls = true,
  startVisible = false
}) => {
  const [isVisible, setIsVisible] = useState(startVisible);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = initialVolume;
    }
  }, [initialVolume]);

  const openDialog = () => setIsVisible(true);
  const closeDialog = () => setIsVisible(false);

  if (!isVisible) {
    return (
      <button onClick={openDialog} className="video-popup-trigger">
        Mostrar publicidad
      </button>
    );
  }

  return (
    <div className="popup" style={{ display: 'block' }}>
      <button 
        onClick={closeDialog} 
        className="close"
        aria-label="Cerrar video"
      >
        <img src={closeButtonImg} alt="Cerrar" />
      </button>
      
      <div className="video-container">
        <video 
          ref={videoRef}
          width="100%" 
          controls={showControls}
          autoPlay={autoPlay}
          muted={autoPlay} // Los navegadores requieren muted para autoplay
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta videos HTML5
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;