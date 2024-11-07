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
      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50" // Bootstrap class for responsive input
          placeholder="Search flashcards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row flashcards-grid">
        {filteredFlashcards.map((flashcard) => (
          <div key={flashcard.id} className="col-md-4 mb-4"> {/* Responsive columns */}
            <div className="flashcard-item">
              <h3>{flashcard.term}</h3>
              <p>{flashcard.translation}</p>
              <div className="flashcard-buttons d-flex justify-content-around">
                <button onClick={() => editFlashcard(flashcard)} className="edit-btn btn btn-success">Edit</button>
                <button onClick={() => removeFlashcard(flashcard.id)} className="delete-btn btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
