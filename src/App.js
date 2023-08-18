import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Settings from "./components/Settings";

export default function App() {
  const [gameId, setGameId] = useState(() => {
    return Date.now();
  });
  const [difficulty, setDifficulty] = useState("medium");

  function handleChange(value) {
    setDifficulty(value);
  }

  function handleRestart() {
    setGameId(Date.now());
  }

  return (
    <main>
      <Settings difficulty={difficulty} onChange={handleChange} />
      <Game
        key={gameId}
        onRestart={handleRestart}
        incrementTime={difficultyTime[difficulty]}
      />
    </main>
  );
}

const difficultyTime = {
  easy: 5,
  medium: 3,
  hard: 2,
};
