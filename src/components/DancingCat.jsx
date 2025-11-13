import { useState, useEffect } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isDancing, setIsDancing] = useState(true);

  const toggleDance = () => {
    setIsDancing(!isDancing);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Space or Enter key to toggle
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        toggleDance();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isDancing]);

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isDancing ? 'dancing' : ''}`}
        role="img"
        aria-label={isDancing ? 'Cat is dancing' : 'Cat is stopped'}
      >
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <button
        className="control-button"
        onClick={toggleDance}
        aria-label={isDancing ? 'Stop the cat from dancing' : 'Start the cat dancing'}
        tabIndex={0}
      >
        {isDancing ? 'Stop Dancing' : 'Start Dancing'}
      </button>
      <p className="keyboard-hint">Press Space or Enter to toggle</p>
    </div>
  );
}

export default DancingCat;
