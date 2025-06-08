import React from "react";

export default function QuestionCard({ question, handleAnswer }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl w-full max-w-xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="grid gap-3">
        {question.options.map((opt, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition"
            onClick={() => handleAnswer(opt.trait)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}