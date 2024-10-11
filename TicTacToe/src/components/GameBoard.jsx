import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // *** Ensure you edit a copy of the board to ensure objects are changed in an immutable way
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {/* 
            In most cases, using this index isn't best practice 
            because the rowIndex is not strictly tied to the value.
            If the row happened to switch place with another row, the index wouldn't be tied to the data.

            As the use case doesn't involve swapping rows for our game, this should be fine.
            */}
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}