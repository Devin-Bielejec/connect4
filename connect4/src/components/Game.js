import React, { useState } from "react";

export default Game = () => {
    //Future: change rows and columns    
    const value = 'O'; // by default
    const myGrid = [...Array(6)].map(e => Array(7).fill(value));
    const [board, setBoard] = useState(myGrid)
}