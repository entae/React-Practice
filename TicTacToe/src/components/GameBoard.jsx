const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    //destructure turns twice to then use the values
    const { square, player } = turn;
    const { row, col } = square;
    // take those values to then derive the state
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {/* 
            In most cases, using this index isn't best practice 
            because the rowIndex is not strictly tied to the value.
            If the row happened to switch place with another row, the index wouldn't be tied to the data.

            As the use case doesn't involve swapping rows for our game, this should be fine.
            */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* Prevented re-clicking square by setting condition to disabled tag on button */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
