import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../assets/css/Popup.jsx';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (showPopup) {
      openDialog();
    }
  }, [showPopup]);

  const openDialog = () => {
    $('#overlay').fadeIn('fast', function() {
      $('#popup').css('display', 'block');
      $('#popup').animate({
        'left': '30%'
      }, 500);
    });
  };

  const closeDialog = (id) => {
    $('#' + id).css('position', 'absolute');
    $('#' + id).animate({
      'left': '-100%'
    }, 500, function() {
      $('#' + id).css('position', 'fixed');
      $('#' + id).css('left', '100%');
      $('#overlay').fadeOut('fast');
      setShowPopup(false);
    });
  };

  return (
    <div id="content">
      <div id="overlay" className="overlay"></div>
      {showPopup && (
        <div id="popup" className="popup" style={{display: 'block'}}>
          <a href="javascript:void(0);" onClick={() => closeDialog('popup')} className="close">
            <img src="/slide/cancel.png" alt="Cerrar" />
          </a>
          <div>
            <video id="miVid" width="100%" controls autoPlay muted>
              <source src="/images/vid_planea.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;