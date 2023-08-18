import { useState } from "react";
import "./Settings.css";
import SettingsButton from "./SettingsButton";
export default function Settings({ difficulty, onChange }) {
  const [showSettings, setShowSettings] = useState(true);

  function handleToggleSettings() {
    setShowSettings((ss) => !ss);
  }

  return (
    <>
      <div className={`settings ${showSettings ? "" : "hidden"}`}>
        <label htmlFor="difficulty">Difficulty:</label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <SettingsButton onToggle={handleToggleSettings} />
    </>
  );
}
