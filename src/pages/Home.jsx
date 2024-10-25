import React, { useState } from 'react';
import FlashcardList from '../components/FlashcardList';

const Home = ({ flashcards, removeFlashcard, editFlashcard }) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering logic based on the search term
  const filteredFlashcards = flashcards.filter(flashcard => 
    flashcard.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    flashcard.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Flashcards</h1>
      {/* Search input for filtering flashcards */}
      <input 
        type="text" 
        placeholder="Search flashcards..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      {/* Pass the filtered flashcards to the FlashcardList */}
      <FlashcardList 
        flashcards={filteredFlashcards} 
        removeFlashcard={removeFlashcard} 
        editFlashcard={editFlashcard} 
      />
    </div>
  );
};

export default Home;
