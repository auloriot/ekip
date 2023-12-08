import React, { useState } from 'react';
import Card from '../Card/Card.jsx'
import '../Card/Card.css';

const questionsData = [
  {
    id: 1,
    question: "Le changement climatique est principalement causé par les activités humaines.",
    correctAnswer: true,
  },
  {
    id: 2,
    question: "Le changement climatique peut être résolu par les progrès scientifiques.",
    correctAnswer: false,
  },
  {
    id: 2,
    question: "La combustion des énergies fossiles est la principale source d'émissions de gaz à effet de serre.",
    correctAnswer: true,
  },
  // Ajoutez d'autres questions ici
];

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false); // Nouvel état

  const handleAnswer = (answer) => {
    // Récupérez la question actuelle
    const currentQuestion = questionsData[currentQuestionIndex];
  
    // Vérifiez si la réponse est correcte
    const isAnswerCorrect = answer === currentQuestion.correctAnswer;
    console.log("answer :",answer);
     console.log("correctAnswer :", currentQuestion.correctAnswer);
     console.log("result", isAnswerCorrect)
  
    // Ajoutez la réponse à la liste des réponses
    setAnswers([...answers, { id: currentQuestion.id, answer, isCorrect: isAnswerCorrect }]);
  
    // Incrémentez le compteur de points seulement si la réponse est correcte
    if (isAnswerCorrect) {
      setPoints(points + 1);
    }
  
    // Affichez le bouton "Suivant"
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    // Passez à la prochaine question
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      // Masquez le bouton "Suivant" pour la nouvelle question
      setShowNextButton(false);
    } else {
      // Vous avez atteint la dernière question, faites quelque chose ici (par exemple, afficher les résultats)
      console.log("Réponses finales:", answers);
      console.log("Points:", points);
    }
  };

  return (
    <div>
      <h3>Points: {points}</h3>
      <Card
        question={questionsData[currentQuestionIndex].question}
        onAnswer={handleAnswer}
        isCorrect={questionsData[currentQuestionIndex].correctAnswer}
      />
      {showNextButton && (
        <button className="next-btn" onClick={handleNextQuestion}>
          Suivant
        </button>
      )}
    </div>
  );
};

export default Questions;
