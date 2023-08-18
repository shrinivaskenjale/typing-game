import { FaCog } from "react-icons/fa";
import "./SettingsButton.css";
export default function SettingsButton({ onToggle }) {
  return (
    <button className="settings-button" onClick={onToggle}>
      <FaCog />
    </button>
  );
}
