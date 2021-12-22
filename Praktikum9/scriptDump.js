import {elt} from "./elt.mjs";

let state = {
  board: Array(6).fill("").map(el => Array(7).fill("")),
  color: "r"
};

let boardsize = {
  x: 0,
  y: 0
};

function showBoard(x=7, y=6) {
  boardsize.x = x;
  boardsize.y = y;
  initPlayfield();
  updateBoard(boardsize.x, boardsize.y);
  updatePlayerDisplay();
}
window.showBoard = showBoard;

function initPlayfield() {
  let root = document.getElementsByClassName("head")[0];
  let btnReset = elt("button", {class: "info"});
  btnReset.textContent = "reset board";
  btnReset.addEventListener("click", () => {
                                          state.board = Array(boardsize.y).fill("").map(el => Array(boardsize.x).fill(""));
                                          updateBoard(boardsize.x, boardsize.y);
                                        });
  root.appendChild(btnReset);
  updatePlayerDisplay();
}

function updatePlayerDisplay() {
  let label = document.getElementById("currentPlayer");
  label.textContent = "Current player is: " + state.color;
}

function updateBoard(x, y) {
  let boardRoot = document.getElementsByClassName("board")[0];
  clearBoard();
  for (let i = 0; i<y; i++) {
    let collums = [];
    for (let j = 0; j<x; j++) {
      let node = elt("div", {class: "field"});
      node.addEventListener("click", () => setToken(j));
      createToken(i, j, node);
      collums.push(node);
    }
    boardRoot.appendChild(elt("div", {class: "row"}, ...collums));
  }
}

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

function clearBoard() {
  const board = document.getElementsByClassName("board")[0];
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

function setToken(x) {
  let i = 5;
  while(state.board[i][x] !== "" && i >= 0) {
    i--;
  }
  if(i>=0) state.board[i][x] = state.color;
  state.color = state.color==="r" ? "b" : "r";
  updateBoard(boardsize.x, boardsize.y);
  updatePlayerDisplay();
}