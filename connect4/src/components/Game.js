import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    //Future: change rows and columns    
    const value = 'O'; // by default
    const myGrid = [...Array(6)].map(e => Array(7).fill(value));
    
    const [board, setBoard] = useState(myGrid);
    const [currentPlayer, setCurrentPlayer] = useState("Y");
    const [turns, setTurns] = useState(1);

    const dropPiece = (column) => {
        for (let i = board.length-1; i >= 0; i--) {
            if (board[i][column] === "O") {
                board[i][column] = currentPlayer;
                currentPlayer === "Y" ? setCurrentPlayer("R") : setCurrentPlayer("Y");
                setTurns(turns+1);
                break;
            }
        }
        console.log(turns);
        if (turns >= 8) {
            //check horizontally
            for (let i = 0; i < board.length; i++){
                let row = board[i];
                for (let j = 0; j < row.length-3; j++){
                    if (row[j] != "O" && row[j] == row[j+1] && row[j + 1] == row[j+2] && row[j + 2] == row[j+3]) {
                        alert("4 HORIZONTALLY");
                    }
                }
            }
        } 
    }

    return(
        <Board dropPiece={dropPiece} board={board}/>
    )
}

export default Game;