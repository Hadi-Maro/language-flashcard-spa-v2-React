import React, { useState } from 'react';
import '../styles/Flashcard.css';  // Import the CSS file

const StudyFlashcardsPage = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);  // Reset flipping when going to next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setFlipped(false);  // Reset flipping when going to previous card
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);  // Flip the card
  };

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div>
      <h1>Study Flashcards</h1>
      {flashcards.length > 0 ? (
        <div className="flashcard-container" onClick={toggleFlip}>
          <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <p>{currentFlashcard.term}</p>
            </div>
            <div className="flashcard-back">
              <p>{currentFlashcard.translation}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No flashcards available. Please create some first!</p>
      )}
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StudyFlashcardsPage;
