import React from "react";

const DropArrows = ({length}) => {
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
            {arrowRows.map( drop => <button>{drop}</button>)}
        </div>
    )
}

export default DropArrows;