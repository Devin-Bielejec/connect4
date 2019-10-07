import React from "react";
import Row from "./Row";
import DropArrows from "./DropArrows";

const Board = ({board}) => {

    return(
        <>
        <DropArrows length={board[0].length}/>
        {board.map( row => <Row row={row}/>)}
        </>
    )
}

export default Board;