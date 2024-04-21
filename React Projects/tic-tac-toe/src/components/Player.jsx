import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, seIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function editClickHandler() {
    seIsEditing((editing) => !editing);
  }

  function changeClickHandler(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={changeClickHandler}
          />
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editClickHandler}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
}
