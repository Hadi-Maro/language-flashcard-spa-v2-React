import React, { useState, useEffect } from 'react';

const CreateFlashcardPage = ({ addFlashcard, editMode, flashcardToEdit, updateFlashcard, translateText }) => {
  const [term, setTerm] = useState(flashcardToEdit ? flashcardToEdit.term : '');
  const [translation, setTranslation] = useState(flashcardToEdit ? flashcardToEdit.translation : '');
  const [language, setLanguage] = useState(flashcardToEdit ? flashcardToEdit.language : 'fa'); // Set default target language or from flashcard

  // Function to translate whenever term or language changes
  useEffect(() => {
    const fetchTranslation = async () => {
      if (term) {
        const translatedText = await translateText(term, language);
        setTranslation(translatedText);
      }
    };
    fetchTranslation();
  }, [term, language, translateText]); // Re-run effect when term or language changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      // Update the flashcard with the new term and translated text in chosen language
      updateFlashcard({ ...flashcardToEdit, term, translation, language });
    } else {
      // Add new flashcard with translated text
      const newFlashcard = {
        id: Date.now(),
        term,
        translation,
        language,
      };
      addFlashcard(newFlashcard);
    }

    // Clear the form fields after submission
    setTerm('');
    setTranslation('');
    setLanguage('fa'); // Reset language to default (Persian)
  };

  return (
    <div>
      <h1>{editMode ? 'Edit Flashcard' : 'Create New Flashcard'}</h1>
      <form className="create-flashcard-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter term" 
          value={term} 
          onChange={(e) => setTerm(e.target.value)} 
        />
        
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
        >
          <option value="fa">Persian</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="it">Italian</option>
        </select>

        <button type="submit">
          {editMode ? 'Update Flashcard' : 'Create Flashcard'}
        </button>
      </form>
    </div>
  );
};

export default CreateFlashcardPage;
