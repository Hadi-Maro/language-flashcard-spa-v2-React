// StudyFlashcardsPage.jsx

import React, { useState } from 'react';
import '../styles/Flashcard.css';

const StudyFlashcardsPage = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false); // Reset flip state when moving to the next card
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setFlipped(false); // Reset flip state when moving to the previous card
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="container mt-5 text-center">
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
        <p className="mt-4">No flashcards available. Please create some first!</p>
      )}
      <div className="d-flex justify-content-between mt-3">
        <button onClick={handlePrevious} className="btn btn-secondary">Previous</button>
        <button onClick={handleNext} className="btn btn-secondary">Next</button>
      </div>
    </div>
  );
};

export default StudyFlashcardsPage;
