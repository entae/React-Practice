import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleChange() {
    // Remember, React should handle all DOM interactions
    // here we're reading a value to set it (declarative)
    setEnteredPlayerName(playerName.current.value);
    // where as the line below is definitely imperative
    //where we directly set the value of a field
      // playerName.current.value = '';
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
