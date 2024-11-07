// Components / FlashcardList.jsx

import React from 'react';
import '../styles/Flashcard.css';

const FlashcardList = ({ flashcards, removeFlashcard, editFlashcard }) => {
  return (
    <div>
      <h2>Flashcards</h2>
      {flashcards.length === 0 ? (
        <p>No flashcards available. Please create some.</p>
      ) : (
        <ul>
          {flashcards.map((flashcard) => (
            <li key={flashcard.id}>
              <strong>{flashcard.term}</strong> - {flashcard.translation} ({flashcard.language})
              <button onClick={() => removeFlashcard(flashcard.id)}>Remove</button>
              <button onClick={() => editFlashcard(flashcard)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlashcardList;
