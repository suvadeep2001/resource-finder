import React, { useState, useEffect } from "react";
import "../css/Quiz.css";
import { Layout } from "../components/Layout";

const App = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    // Add more questions...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      handleNextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedOption("");
    setTimer(60);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <Layout>
      <div className="quiz-container">
        {currentQuestion < questions.length ? (
          <div className="question-container">
            <h1>Question {currentQuestion + 1}</h1>
            <h2>{questions[currentQuestion].question}</h2>
            <ul className="options-list">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <p>Time Remaining: {timer} seconds</p>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="next-button"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="result-container">
            <h1>Quiz Complete!</h1>
            <p>Your Score: {score}</p>
            <button>
              Go To <a href="http://localhost:3000/aptitude">Try Again</a>
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
