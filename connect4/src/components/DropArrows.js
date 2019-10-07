import React from "react";

const DropArrows = ({length, dropPiece}) => {
    const createArray = () => {
        let results = [];
        for (let i = 0; i < length; i++) {
            results.push("D")
        }
        return results;
    }

    const arrowRows = createArray();
    
    return(
        <div class="dropArrows" style={{width: "100%"}}>
            {arrowRows.map( (drop, i) => <button onClick={() => dropPiece(i)}>{drop}</button>)}
        </div>
    )
}

export default DropArrows;