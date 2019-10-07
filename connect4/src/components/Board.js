import React from "react";
import Row from "./Row";
import DropArrows from "./DropArrows";

const Board = ({board, dropPiece}) => {

    return(
        <div class="board" style={{margin: "50px"}}>
            <DropArrows dropPiece={dropPiece} length={board[0].length}/>
            {board.map( row => <Row row={row} />)}
        </div>
    )
}

export default Board;