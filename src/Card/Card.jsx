import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = ({ question, onAnswer, isCorrect }) => {
  const [borderClass, setBorderClass] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleAnswer = (answer) => {
    setIsAnswerCorrect(answer === isCorrect);
    onAnswer(answer === isCorrect);
    setBorderClass(answer === isCorrect ? 'correct' : 'incorrect');
  };

  useEffect(() => {
    setBorderClass('');
  }, [question]);

  const cardClassName = `card ${borderClass}`;

  return (
    <div className={cardClassName}>
      <h2>{question}</h2>
      <div className="button-container">
        <button className="validate-btn" onClick={() => handleAnswer(true)}>Valider</button>
        <button className="reject-btn" onClick={() => handleAnswer(false)}>Contester</button>
      </div>
    </div>
  );
};

export default Card;
