import { render } from '../suiweb.js';
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
  running: true,
  lastToken: {"x":0, "y":0}
}
let history = [];
const SERVICE = "http://localhost:3000/api/data/gamestate?api-key=c4game";

const App = () => [Board, { "x": 7, "y": 6 }];

const Board = ({ x, y }) => {
  let fields = [];
  for (var row = 0; row < y; row++) {
      for (var column = 0; column < x; column++) {
          fields.push([Field, { "x": column, "y": row}])
      }
  }
  return (
      ["div", { className: "board" }, ...fields]
  )
}

const Field = ({ x, y }) => {
  let token = createToken(x, y);
  return ["div", { className: "field", "xPos": x, "yPos": y }, {}, token];
};

//  Initialize game
//
function initGame () {
  let board = showBoard()
}
window.initGame = initGame;


//  Show board
// 
function showBoard () {
  let appRoot = document.getElementsByClassName("app")[0];
  render([App], appRoot);
  // first remove all fields
  //render(createBoard(7, 6), appRoot);

  let boardRoot = document.getElementsByClassName("board")[0];
  boardRoot.addEventListener("click", (el) => {
    history.push(state);
    let target = el.target.classList.contains("piece") ? el.target.parentNode : el.target;
    let pos = target["xPos"];
    setToken(pos);
  });

  if (!state.running) {
    let node = elt("label");
    node.textContent = "The winner is player :" + state.color;
    boardRoot.appendChild(node);
  }

  return boardRoot;
}


//create token in board
//
function createToken(x, y) {
  let jsdon = "";
  switch(state.board[y][x]) {
    case "r":
      jsdon = ["div", { className: "red piece"}];
      break;
    case "b":
      jsdon = ["div", { className: "blue piece"}];
      break;
    default:
  }
  return jsdon;
}

//set token in board
//
function setToken(x) {
  if (state.running) {
    let i = 5;
    while(i >= 0 && state.board[i][x] !='') {
      i--;
    }
    if(i>=0){
      let board = setInList(state.board, i, x, state.color);
      state = setInObj(state, "board", board);
      state = setInObj(state, "lastToken", {"x": x,"y": i});
    }
    if (checkWon(state.lastToken.x, state.lastToken.y, state.color)) {
      winnerSet(false);
    } else {
      winnerSet(true);
      state.color = state.color==="r" ? "b" : "r";
    } 
    showBoard();
  }
}

function winnerSet(bool) {
  state.running = bool;
}

function setInList(lst, idx, idy, val) {
  let newList = []
  let rows = []
  for (var row = 0; row < lst.length; row++) {
      for (var column = 0; column < lst[0].length; column++) {
          if (row == idx && column == idy) {
              rows.push(val)
          } else {
              rows.push(lst[row][column])
          }
      }
      newList.push(rows)
      rows = []
  }
  return newList;
}

function setInObj(obj, attr, val) {
  let newObject = {}
  for (let element in obj) {
      if (element === attr) {
          newObject[element] = val
      } else {
          newObject[element] = obj[element]
      }
  }
  return newObject;
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

function undoState () {
  if (history.length != 0) state = history.pop();
  showBoard();
}
window.undoState = undoState;

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