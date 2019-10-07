import React from "react";

const Cell = ({cell}) => {
        
    return(
        <div class="cell">
            <button>{cell}</button>
        </div>
    )
}

export default Cell;