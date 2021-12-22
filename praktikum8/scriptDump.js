import {elt} from "./elt.mjs";

let state = Array(6).fill("").map(el => Array(7).fill(""));

function showBoard(x=6, y=7) {
  let updateIntervalID = setInterval(updateBoard, 1000, x, y);
  let tokenIntervalID = setInterval(randomMagic, 1000, x, y);
}
window.showBoard = showBoard;

function updateBoard(x, y) {
  let boardRoot = document.getElementsByClassName("board")[0];
  clearBoard();
  for (let i = 0; i<x; i++) {
    let collums = [];
    for (let j = 0; j<y; j++) {
      let node = elt("div", {class: "field"});
      switch(state[i][j]) {
        case "r":
          node.appendChild(elt("div", {class: "red piece"}));
          break;
        case "b":
          node.appendChild(elt("div", {class: "blue piece"}));
          break;
        default:
      }
      collums.push(node);
    }
    boardRoot.appendChild(elt("div", {class: "row"}, ...collums));
  }
}

function clearBoard() {
  const board = document.getElementsByClassName("board")[0];
  while (board.firstChild) {
    board.removeChild(board.lastChild);
  }
}

function randomMagic(x, y) {
  let randoom = Math.floor(Math.random()*3);
  let color = "";
  switch(randoom) {
    case 0:
          color = "r";
          break;
    case 1:
          color = "b";
          break;
    case 2:
          color = "";
          break;
  }

  chooseField(x, y, color);
}

function chooseField(xMax, yMax, color) {
  let x = Math.floor(Math.random()*xMax);
  let y = Math.floor(Math.random()*yMax);
  state[x][y] = color;
}