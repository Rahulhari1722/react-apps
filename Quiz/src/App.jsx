import { useEffect, useState } from 'react';
import questionData from './question.json';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let interval;
    if (timeLeft > 0 && !showScore) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      setShowScore(true);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft, showScore]);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questionData[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeLeft(10);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  return (
    <>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            <h2>Your Score: {score}/{questionData.length}</h2>
            <button onClick={handleRestartQuiz}>Restart</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionData[currentQuestion].question}</p>
            <div className="option">
              {questionData[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
            <div className="timer">Time left: <span>{timeLeft}s</span></div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;