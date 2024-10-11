import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editState, saveEditState] = useState(false);

  function handleEditClick() {
    // in react when updating value of state based on previous state
    // should not use '!state' as react "schedules" those lines of code and it does not occur instantly
    // ie: saveEditState(!editState) would be bad practice
    // instead you should call a function instead
    saveEditState((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let btnCaption = "Edit";

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (editState) {
    editablePlayerName = (
        // two-way binding
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
