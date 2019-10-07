import React from "react";

const DropArrows = ({length}) => {
    const createArray = () => {
        let results = [];
        for (let i = 0; i < length; i++) {
            results.push("Drop")
        }
        return results;
    }

    const arrowRows = createArray();
    
    return(
        <>
        {arrowRows.map( drop => <button>drop</button>)}
        </>
    )
}

export default DropArrows;