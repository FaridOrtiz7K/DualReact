import React, { useState, useRef, useEffect } from 'react';
import '../../src/assets/css/video.css';
import { FaTimes } from 'react-icons/fa';

const VideoPopup = ({
  videoSrc = "./images/vid_planea.mp4",
  initialVolume = 0.1,
  autoPlay = true,
  showControls = true,
  startVisible = true,
  mutedByDefault = true // Nuevo prop para mute obligatorio
}) => {
  const [isVisible, setIsVisible] = useState(startVisible);
  const [requiresInteraction, setRequiresInteraction] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && isVisible) {
      videoRef.current.volume = initialVolume;
      
      // Intentar reproducción con manejo de errores
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          // Si llega aquí, el autoplay funcionó
          setRequiresInteraction(false);
        } catch (err) {
          console.log("Autoplay bloqueado, requiriendo interacción");
          setRequiresInteraction(true);
          videoRef.current.controls = true; // Mostrar controles si falla
        }
      };
      
      playVideo();
    }
  }, [isVisible, initialVolume]);

  const closeDialog = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVisible(false);
  };

  const handleUserInteraction = () => {
    if (requiresInteraction && videoRef.current) {
      videoRef.current.play()
        .then(() => setRequiresInteraction(false))
        .catch(err => console.error("Error al reproducir:", err));
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="video-popup-overlay"
      onClick={handleUserInteraction} // Permitir interacción para desbloquear
    >
      <div className="video-popup-content">
        <button 
          onClick={closeDialog} 
          className="video-close-btn"
          aria-label="Cerrar video"
        >
          <FaTimes className="close-icon-xl" />
        </button>
        
        <video
          ref={videoRef}
          width="100%"
          controls={showControls || requiresInteraction} // Mostrar controles si se requiere interacción
          autoPlay={autoPlay}
          muted={mutedByDefault} // Muteado por defecto (requisito para autoplay)
          playsInline
          loop
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {requiresInteraction && (
          <div className="play-message">
            <p>Haz clic en cualquier lugar para reproducir el video</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPopup;