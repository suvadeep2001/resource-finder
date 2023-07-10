import React, { useState, useEffect } from "react";
import "../css/Quiz.css";
import { Layout } from "../components/Layout";

const App = () => {
  const questions = [
    {
      "question": "A train travels at a speed of 75 km/h for the first 3 hours, then increases its speed to 90 km/h for the next 2 hours. What is the average speed of the train for the entire journey?",
      "options": ["72 km/h", "78 km/h", "80 km/h", "75 km/h"],
      "answer": "75 km/h"
    },
    {
      "question": "If the ratio of the length to the breadth of a rectangle is 5:3 and its perimeter is 64 cm, what is the area of the rectangle?",
      "options": ["220 cm²", "240 cm²", "200 cm²", "180 cm²"],
      "answer": "240 cm²"
    },
    {
      "question": "In a certain code, 'JUMP' is written as 'KNTO'. How will 'HELP' be written in that code?",
      "options": ["FIMO", "IFMQ", "GKOR", "HLNQ"],
      "answer": "IFMQ"
    },
    {
      "question": "A shopkeeper sold an article for $1,050, incurring a loss of 10%. What was the cost price of the article?",
      "options": ["$1,000", "$1,166.67", "$1,150", "$1,200"],
      "answer": "$1,166.67"
    },
    {
      "question": "If a certain sum of money doubles itself in 5 years at simple interest, in how many years will it become four times the original sum?",
      "options": ["4 years", "5 years", "10 years", "20 years"],
      "answer": "5 years"
    },
    {
      "question": "The difference between a two-digit number and the number obtained by reversing its digits is 36. If the digit at the unit's place is smaller than the digit at the ten's place, what is the sum of the two digits?",
      "options": ["6", "7", "8", "9"],
      "answer": "8"
    },
    {
      "question": "A shopkeeper sells an item at a profit of 20%. If the cost price of the item is $500, what is the selling price?",
      "options": ["$520", "$600", "$480", "$650"],
      "answer": "$600"
    },
    {
      "question": "A car covers a distance of 600 km with a speed of 75 km/h. If the speed is increased by 25%, how much time will the car take to cover the same distance?",
      "options": ["6.2 hours", "5.6 hours", "7.5 hours", "6.4 hours"],
      "answer": "6.4 hours"
    },
    {
      "question": "A man invested a certain sum of money at a simple interest rate of 8% per annum. After 5 years, he received an amount of $4,800. What was the original sum of money invested?",
      "options": ["$10,000", "$12,000", "$8,000", "$5,000"],
      "answer": "$12,000"
    },
    {
      "question": "A box contains 8 red balls and 5 blue balls. If two balls are drawn at random without replacement, what is the probability that both balls are red?",
      "options": ["1/26", "1/20", "7/26", "9/26"],
      "answer": "7/26"
    },
    {
      "question": "If 3 workers can complete a task in 12 days, how many workers are needed to complete the same task in 6 days?",
      "options": ["3 workers", "6 workers", "9 workers", "12 workers"],
      "answer": "6 workers"
    },
    {
      "question": "The ratio of the present ages of two persons is 3:5. After 5 years, the ratio of their ages will be 4:7. What is the present age of the younger person?",
      "options": ["10 years", "12 years", "15 years", "18 years"],
      "answer": "15 years"
    },
    {
      "question": "A boat can travel 12 km/h in still water. It takes 4 hours to travel upstream a certain distance and 3 hours to travel downstream the same distance. What is the speed of the stream?",
      "options": ["3 km/h", "5 km/h", "6 km/h", "8 km/h"],
      "answer": "6 km/h"
    },
    {
      "question": "A can do a piece of work in 12 days, while B can do the same work in 18 days. They start working together but after 4 days, A leaves. In how many more days will B complete the remaining work?",
      "options": ["6 days", "8 days", "10 days", "12 days"],
      "answer": "12 days"
    },
    {
      "question": "The difference between compound interest and simple interest on a certain sum of money for 2 years at 10% per annum is $36. What is the sum of money?",
      "options": ["$100", "$150", "$200", "$171.43"],
      "answer": "$171.43"
    },
    {
      "question": "The ratio of the ages of A and B is 4:5. After 8 years, the sum of their ages will be 72. What will be the ratio of their ages after 8 years?",
      "options": ["3:4", "4:5", "5:6", "6:7"],
      "answer": "5:6"
    },
    {
      "question": "The sum of the present ages of a father and his son is 48 years. Five years ago, the father was eight times older than his son. What are their present ages?",
      "options": ["Father: 36 years, Son: 12 years", "Father: 42 years, Son: 6 years", "Father: 39 years, Son: 9 years", "Father: 45 years, Son: 3 years"],
      "answer": "Father: 39 years, Son: 9 years"
    },
    {
      "question": "A box contains 5 red balls, 4 blue balls, and 3 green balls. If 3 balls are drawn at random without replacement, what is the probability that at least one ball is green?",
      "options": ["0.453", "0.597", "0.703", "0.816"],
      "answer": "0.597"
    }
  ]
  

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
