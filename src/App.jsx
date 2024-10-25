import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateFlashcardPage from './pages/CreateFlashcardPage';
import StudyFlashcardsPage from './pages/StudyFlashcardsPage';
import Error from './components/Error';
import './index.css';




const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=AIzaSyA1Pe-N7ShOAE-SJPoDKpTEHkUpbfkmnlw`,
      {
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text',
      }
    );
    console.log("API Response:", response.data);
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Fallback if error occurs
  }
};



const App = () => {
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    return savedFlashcards ? JSON.parse(savedFlashcards) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const [editMode, setEditMode] = useState(false);
  const [flashcardToEdit, setFlashcardToEdit] = useState(null);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const removeFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter((flashcard) => flashcard.id !== id);
    setFlashcards(updatedFlashcards);
  };

  const editFlashcard = (flashcard) => {
    setFlashcardToEdit(flashcard);
    setEditMode(true);
    history.push('/create');
  };

  const updateFlashcard = (updatedFlashcard) => {
    const updatedFlashcards = flashcards.map((flashcard) =>
      flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
    );
    setFlashcards(updatedFlashcards);
    setEditMode(false);
    setFlashcardToEdit(null);
    history.push('/');
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Switch>
        <Route path="/" exact>
          <Home flashcards={flashcards} removeFlashcard={removeFlashcard} editFlashcard={editFlashcard} />
        </Route>
        <Route path="/create">
          <CreateFlashcardPage 
            addFlashcard={addFlashcard} 
            editMode={editMode} 
            flashcardToEdit={flashcardToEdit} 
            updateFlashcard={updateFlashcard}
            translateText={translateText} 
          />
        </Route>
        <Route path="/study">
          <StudyFlashcardsPage flashcards={flashcards} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
