import React from "react";
import Row from "./Row";
import DropArrows from "./DropArrows";

const Board = ({board}) => {

    return(
        <div class="board" style={{margin: "50px"}}>
            <DropArrows length={board[0].length}/>
            {board.map( row => <Row row={row} />)}
        </div>
    )
}

export default Board;