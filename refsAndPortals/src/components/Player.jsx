import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleChange() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* 
      ?? = JS shortcut to display the condition if it's truthy
      */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
