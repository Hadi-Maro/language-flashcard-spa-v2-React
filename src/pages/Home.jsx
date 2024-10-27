// Home.jsx

import React, { useState } from 'react';
import '../styles/Home.css';

const Home = ({ flashcards, removeFlashcard, editFlashcard }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter flashcards based on search term
  const filteredFlashcards = flashcards.filter(flashcard =>
    flashcard.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search flashcards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flashcards-grid">
        {filteredFlashcards.map((flashcard) => (
          <div
            key={flashcard.id}
            className="flashcard-item"
            onClick={() => editFlashcard(flashcard)}
          >
            <h3>{flashcard.term}</h3>
            <p>{flashcard.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
