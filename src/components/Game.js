import { useEffect, useState } from "react";
import "./Game.css";
import { getRandomWord } from "../utils";

export default function Game({ onRestart, incrementTime }) {
  const [enteredWord, setEnteredWord] = useState("");
  const [word, setWord] = useState(() => {
    return getRandomWord();
  });
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [status, setStatus] = useState("started");

  function handleChange(e) {
    const entry = e.target.value;
    if (entry === word) {
      setWord(getRandomWord());
      setEnteredWord("");
      setScore((s) => s + 1);
      setTime((t) => t + incrementTime);
      return;
    }

    setEnteredWord(entry);
  }

  //   Effect for interval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("running interval");
      setTime((t) => {
        if (t > 0) {
          return t - 1;
        }
        clearInterval(interval);
        setStatus("ended");
        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let content;
  if (status === "ended") {
    content = (
      <div className="game-end">
        <h3>Time over</h3>
        <p>Your final score is {score}</p>
        <button type="button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    );
  } else {
    content = (
      <div className="game-start">
        <h2>⌨️ Speed Typing 🧑‍💻</h2>
        <div className="progress">
          <p className="time">
            Time left: <span>{time}s</span>
          </p>
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </div>
        <p>
          <small>Type the following word:</small>
        </p>
        <div className="word">{word}</div>
        <input
          autoFocus
          type="text"
          autoComplete="false"
          value={enteredWord}
          onChange={handleChange}
        />
      </div>
    );
  }

  return <div className="game">{content}</div>;
}
