// Home.jsx

import React, { useState } from 'react';
import InfoBox from '../components/InfoBox';
import '../styles/Home.css';

const Home = ({ flashcards, removeFlashcard, editFlashcard }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFlashcards = flashcards.filter(flashcard =>
    flashcard.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <InfoBox />
      <div className="d-flex justify-content-center mb-3 search-bar">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search flashcards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flashcards-grid">
        {filteredFlashcards.map((flashcard) => (
          <div key={flashcard.id} className="flashcard-item">
            <h3>{flashcard.term}</h3>
            <p>{flashcard.translation}</p>
            <div className="flashcard-buttons">
              <button onClick={() => editFlashcard(flashcard)} className="edit-btn">Edit</button>
              <button onClick={() => removeFlashcard(flashcard.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
