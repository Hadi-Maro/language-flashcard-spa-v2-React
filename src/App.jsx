// App.jsx


import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateFlashcardPage from './pages/CreateFlashcardPage';
import StudyFlashcardsPage from './pages/StudyFlashcardsPage';
import Error from './components/Error';
import './index.css';
//import { ThemeContext } from './context/ThemeContext';  // Import ThemeContext
import { ThemeContext, ThemeProvider } from './context/ThemeContext';


// Translation function for API integration
const translateText = async (text, targetLang) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
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
    return text;
  }
};


const App = () => {
  const { theme } = useContext(ThemeContext);  // Access theme from ThemeContext
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    return savedFlashcards ? JSON.parse(savedFlashcards) : [];
  });

  const [editMode, setEditMode] = useState(false);
  const [flashcardToEdit, setFlashcardToEdit] = useState(null);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

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
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((flashcard) =>
        flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
      )
    );
    setEditMode(false);
    setFlashcardToEdit(null);
    history.push('/');
  };
  
  

  return (
    <div className={`app ${theme}`}>
      <Navbar />  {/* Navbar component */}
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
      <Footer />  {/* Footer component */}
    </div>
  );
};

export default App;
