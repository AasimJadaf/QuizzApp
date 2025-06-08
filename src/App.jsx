import React, { useState } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import { resultColors } from "./styles/resultColors";

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (trait) => {
    const updated = [...answers, trait];
    setAnswers(updated);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const count = answers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      {!showResult ? (
        <QuestionCard question={questions[currentQ]} handleAnswer={handleAnswer} />
      ) : (
        <div className={`p-6 rounded-2xl text-center shadow-xl ${resultColors[getResult()]}`}>
          <h1 className="text-3xl font-bold mb-2">You're an {getResult().toUpperCase()}!</h1>
          <p className="text-lg">Thanks for taking the quiz 🎉</p>
        </div>
      )}
    </div>
  );
}