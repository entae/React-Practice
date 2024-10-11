import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBO } from "./components/winning-combo";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// helper function to help set Active player for both:
// displaying active player and displaying correct symbol on gameBoard
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    //destructure turns twice to then use the values
    const { square, player } = turn;
    const { row, col } = square;
    // take those values to then derive the state
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBO) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      console.log(winner);
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {/* If winner is truthy, display win message */}
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
