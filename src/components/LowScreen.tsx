import { useState, useEffect } from 'react';
import '../css/LowScreen.css';
import ModalForm from './ModalForm'; // Import the modal form component

function LowScreen() {
  const [showDocs, setShowDocs] = useState(true);
  const [largeScreen, setLargeScreen] = useState(true);
  const [transition, setTransition] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setLargeScreen(true);
      }

      if (window.innerWidth <= 478) {
        setShowDocs(false);
      } else {
        setShowDocs(true);
      }

      if (window.innerWidth <= 990) {
        setLargeScreen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="header">
      <div id="top-header">
        <div id="logo">
          <img src="/vect.png" alt="" style={{ width: 'auto', height: '8rem' }} />
        </div>
        {!largeScreen && (
          <div id="bar">
            {showDocs && <div id="docs" style={{ color: 'orange' }}>Docs <span>→</span></div>}
            <div id="menu" onClick={() => setTransition(!transition)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {largeScreen && (
          <div id="lbar">
            <li style={{ color: 'white' }}>Home</li>
            <li onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>Connect with us</li> {/* Open modal on click */}
            {showDocs && <li id="docs" style={{ color: 'orange' }}>Docs <span>→</span></li>}
          </div>
        )}
      </div>

      {(!largeScreen) && (
        <div id="down-header" className={transition ? 'transitioned' : ''}>
          <h3>Home</h3>
          <h3 onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>Contact</h3> {/* Open modal on click */}
        </div>
      )}

      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Render the modal */}
    </div>
  );
}

export default LowScreen;
