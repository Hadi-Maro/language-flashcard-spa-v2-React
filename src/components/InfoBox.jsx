// InfoBox.jsx
import React from 'react';
import '../styles/Home.css';

const InfoBox = () => {
    return (
        <div className="info-box">
            <h2>How to Use This App</h2>
            <p>Welcome! This app lets you create flashcards to study vocabulary in different languages.</p>
            <ul>
                <li>Create new flashcards by clicking on the "Create Flashcards" tab.</li>
                <li>Use the search bar to find specific flashcards quickly.</li>
                <li>Study and flip each flashcard in the "Study Flashcards" section.</li>
                <li>Toggle the app theme by clicking the button in the top left corner.</li>
            </ul>
        </div>
    );
};

export default InfoBox;
