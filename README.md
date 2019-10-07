# connect4
Making a react connect4

[
[O,O,O,O,O,O,O]
[O,O,O,O,O,O,O]
[O,O,O,O,O,O,O]
[O,O,O,O,O,O,O]
[O,O,O,O,O,O,O]
[O,Y,O,O,O,O,O]
]

component: gameboard

Game Component
-logic
-determines size of board
-keep track of history
-store array of arrays to keep track of board

STATE
:board
:currentPlayer
**function droppedPiece(column)
    loop through board to find correct item to change
    change it on our board

    winning moves etc

    change state of board

    update who's next player

Board Component
-organizes cells 7x6
-DropArrowsComponent
-has 6 Row Components

DropArrowsComponent
-onClick : function that goes to game component, responsible for placing in the correct position
**pass in column from index

Row Component
-has 7 Cell Components

Cell Component
-mark correct color
-signify win

Plan for State:
-Prob Drilling Initially into Context if we need it