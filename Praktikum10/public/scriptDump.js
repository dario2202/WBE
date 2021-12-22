/*
 *  This solution sould be considered as a proof of concept – the code 
 *  definitely needs some cleanup and documentation
 */
 
let state = {
  board: [
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ],
    [ '', '', '', '', '', '', '' ]
  ],
  color: 'b',
  running: true
}

const SERVICE = "http://localhost:3000/api/data/gamestate?api-key=c4game"


//  Initialize game
//
function initGame () {
  let board = showBoard()
}
window.initGame = initGame;


//  Show board
// 
function showBoard () {
  let boardRoot = document.getElementsByClassName("board")[0];

  // first remove all fields
  while (boardRoot.firstChild) { boardRoot.removeChild(boardRoot.firstChild) }

  for (let i = 0; i<7; i++) {
    let collums = [];
    for (let j = 0; j<6; j++) {
      let node = elt("div", {class: "field"});
      node.addEventListener("click", () => {setToken(i)});
      createToken(j, i, node);
      collums.push(node);
    }
    boardRoot.appendChild(elt("div", {class: "row"}, ...collums));
  }

  if (!state.running) {
    let node = elt("label");
    node.textContent = "The winner is player :" + state.color;
    boardRoot.appendChild(node);
  }

  return boardRoot;
}

//create token in board
//
function createToken(x, y, node) {
  switch(state.board[x][y]) {
    case "r":
      node.appendChild(elt("div", {class: "red piece"}));
      break;
    case "b":
      node.appendChild(elt("div", {class: "blue piece"}));
      break;
    default:
  }
}


//set token in board
//
function setToken(x) {
  if (state.running) {
    let i = 5;
    while(i >= 0 && state.board[i][x] !='') {
      i--;
    }
    if(i>=0) state.board[i][x] = state.color;
    if (checkWon(x, i, state.color)) winnerSet(state.color)
    else state.color = state.color==="r" ? "b" : "r";
    showBoard();
  }
  
}

function winnerSet(color) {
  state.running = false;
}


//  Helper function for DOM manipulation
// 
function elt (type, attrs, ...children) {
  let node = document.createElement(type)
  for (let a in attrs) {
    node.setAttribute(a, attrs[a])
  }
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child)
    else node.appendChild(document.createTextNode(child))
  }
  return node
}


//  Get current state from server and re-draw board
//
function loadState () {
  fetch(SERVICE)
  .then(res => res.json())
  .then(data => state = data)
  .then(showBoard);
}
window.loadState = loadState;

//  Put current state to server
//
function saveState () {
  fetch(SERVICE, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(state)
  });
}
window.saveState = saveState;

// steps to traverse grid
//
const diagUpLeft = (x, y) => [--x, --y];
const diagUpRight = (x, y) => [++x, --y];
const diagDownLeft = (x, y) => [--x, ++y];
const diagDownRight = (x, y) => [++x, ++y];

const rowUp = (x, y) => [x, --y];
const rowDown = (x, y) => [x, ++y];
const rowLeft = (x, y) => [--x, y];
const rowRight = (x, y) => [++x, y];

//  Check if player has won
function checkWon (x, y, color) {
  return checkField(x, y, color, diagUpLeft) + checkField(x, y, color, diagDownRight) >= 5 ||
  checkField(x, y, color, diagUpRight) + checkField(x, y, color, diagDownLeft) >= 5 ||
  checkField(x, y, color, rowUp) + checkField(x, y, color, rowDown) >= 5 ||
  checkField(x, y, color, rowLeft) + checkField(x, y, color, rowRight) >= 5
}

function checkField (x, y, color, direction) {
  if (pointInBoard (x, y) && state.board[y][x] == color) {
    return checkField(...direction(x, y), color, direction) + 1;
  }
  else return 0;
}

function pointInBoard (x, y) {
  return x >= 0 && x < 7 && y >= 0 && y < 6;
}