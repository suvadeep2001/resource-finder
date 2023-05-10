import React, { useState, useEffect } from "react";
import "../css/Quiz.css";
import { Layout } from "../components/Layout";

const App = () => {
  const questions = [
    {
      question:
        "A can do a piece of work in 12 days and B can do it in 18 days. They work together for 2 days and then A leaves. How long will B take to finish the remaining work ?",
      options: ["6 days", "8 days", "10 days", "13 days"],
      answer: "13 days",
    },
    {
      question:
        "A certain number of men can complete a job in 30 days. If there were 5 men more, it could be completed in 10 days less. How many men were in the beginning?",
      options: ["10", "15", "20", "25"],
      answer: "10",
    },
    {
      question:
        "If a number is as much greater than 31 as it is less than 75, then the number is",
      options: ["45", "78", "53", "74"],
      answer: "53",
    },
    {
      question:
        "If 12 carpenters working 6 hours a day can make 460 chairs in 240 days, then the number of chairs made by 18 carpenters in 36 days each working 8 hours a day is ",
      options: ["138", "45", "78", "40"],
      answer: "138",
    },
    {
      question:
        "A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
      options: ["222", "224", "451", "480"],
      answer: "224",
    },
    {
      question:
        "Which of the following statement is correct regarding destructor of base class?",
      options: [
        "Destructor of base class should always be static",
        "Destructor of base class should always be virtual",
        "Destructor of base class should not be virtual",
        "Destructor of base class should always be private",
      ],
      answer: "Destructor of base class should always be virtual",
    },
    {
      question: "Introducing a boy, a girl said, \"He is the son of the daughter of the father of my uncle.\" How is the boy related to the girl?",
      options: ["Brother","Nephew","Uncle","Son-in-law"],
      answer: "Nephew",
    },
    {
      question: "The total of the ages of Amar, Akbar and Anthony is 100 years. What was the total of their ages three years ago ?",
      options: ["90","91","92","93"],
      answer: "91",
    },
    {
      question: "A, B, C, D and E play a game of cards. A says to B, \"If you give me three cards, you will have as many as E has and if I give you three cards, you will have as many as D has.\" A and B together have 10 cards more than what D and E together have. If B has two cards more than what C has and the total number of cards be 133, how many cards does B have ?",
      options: ["22","23","25","35"],
      answer: "25",
    },
    {
      question: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
      options: ["145","150","155","160"],
      answer: "155",
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
              Go To <a href="https://resource-finder-8c366.web.app/">Home Page</a>
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
