import React from "react";
import Cell from "./Cell";

const Row = ({row}) => {
    return(
        <>
        {row.map( cell => <Cell cell={cell}/>)}
        </>
    )
}

export default Row;