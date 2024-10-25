import React, { useState } from 'react';

const CreateFlashcardPage = ({ addFlashcard, editMode, flashcardToEdit, updateFlashcard, translateText }) => {
  const [term, setTerm] = useState(flashcardToEdit ? flashcardToEdit.term : '');
  const [translation, setTranslation] = useState(flashcardToEdit ? flashcardToEdit.translation : '');
  const [language, setLanguage] = useState('fa'); // Set default target language to Persian

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      updateFlashcard({ ...flashcardToEdit, term, translation });
    } else {
      // Translate term to the selected language
      const translatedText = await translateText(term, language);
      const newFlashcard = {
        id: Date.now(),
        term,
        translation: translatedText,
        language,
      };
      addFlashcard(newFlashcard);
    }

    // Clear the form
    setTerm('');
    setTranslation('');
    setLanguage('fa'); // Reset to Persian
  };

  return (
    <div>
      <h1>{editMode ? 'Edit Flashcard' : 'Create New Flashcard'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Term:</label>
          <input 
            type="text" 
            value={term} 
            onChange={(e) => setTerm(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Language:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="fa">Persian</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </div>
        <button type="submit">{editMode ? 'Update Flashcard' : 'Create Flashcard'}</button>
      </form>
    </div>
  );
};

export default CreateFlashcardPage;
