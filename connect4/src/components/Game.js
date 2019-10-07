import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    //Future: change rows and columns    
    const value = 'O'; // by default
    const myGrid = [...Array(6)].map(e => Array(7).fill(value));
    
    const [board, setBoard] = useState(myGrid);
    const [currentPlayer, setCurrentPlayer] = useState("Y");

    const dropPiece = (column) => {
        for (let i = board.length-1; i >= 0; i--) {
            if (board[i][column] === "O") {
                board[i][column] = currentPlayer;
                currentPlayer === "Y" ? setCurrentPlayer("R") : setCurrentPlayer("Y")
                break;
            }
        }
    }

    return(
        <Board dropPiece={dropPiece} board={board}/>
    )
}

export default Game;