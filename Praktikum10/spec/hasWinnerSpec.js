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


function resetField() {
    state.board = Array(6).fill('').map(el => Array(7).fill(''));
    state.color = 'b';
    state.running = true;
}

describe("row"), function() {
    beforeEach(resetField);

    it("win game, blue, bottom row", function() {
        state.board[0][0] = 'b';
        state.board[0][1] = 'b';
        state.board[0][2] = 'b';
        state.board[0][3] = 'b';
        expect(checkWon(0, 0, 'b')).toBeTrue();
        expect(checkWon(0, 0, 'r')).toBeFalse();
    });

    it("win game, red, bottom row", function() {
        state.board[0][0] = 'r';
        state.board[0][1] = 'r';
        state.board[0][2] = 'r';
        state.board[0][3] = 'r';
        expect(checkWon(0, 0, 'r')).toBeTrue();
        expect(checkWon(0, 0, 'b')).toBeFalse();
    });

    it("win game, red, high row", function() {
        state.board[3][1] = 'r';
        state.board[3][2] = 'r';
        state.board[3][3] = 'r';
        state.board[3][4] = 'r';
        expect(checkWon(1, 3, 'r')).toBeTrue();
        expect(checkWon(1, 3, 'b')).toBeFalse();
    });

    it("not win game", function() {
        state.board[3][1] = 'r';
        state.board[3][2] = 'r';
        state.board[3][3] = 'b';
        state.board[3][4] = 'r';
        expect(checkWon(1, 3, 'r')).toBeFalse();
        expect(checkWon(1, 3, 'b')).toBeFalse();
    });
}

describe("diag"), function() {
    beforeEach(resetField);

    it("win game, blue, bottom diag", function() {
        state.board[0][0] = 'b';
        state.board[1][1] = 'b';
        state.board[2][2] = 'b';
        state.board[3][3] = 'b';
        expect(checkWon(0, 0, 'b')).toBeTrue();
        expect(checkWon(0, 0, 'r')).toBeFalse();
    });

    it("win game, red, bottom diag", function() {
        state.board[0][0] = 'r';
        state.board[1][1] = 'r';
        state.board[2][2] = 'r';
        state.board[3][3] = 'r';
        expect(checkWon(0, 0, 'r')).toBeTrue();
        expect(checkWon(0, 0, 'b')).toBeFalse();
    });

    it("win game, red, high diag", function() {
        state.board[4][1] = 'r';
        state.board[3][2] = 'r';
        state.board[2][3] = 'r';
        state.board[1][4] = 'r';
        expect(checkWon(1, 4, 'r')).toBeTrue();
        expect(checkWon(1, 4, 'b')).toBeFalse();
    });

    it("not win game", function() {
        state.board[4][1] = 'r';
        state.board[3][2] = 'b';
        state.board[2][3] = 'r';
        state.board[1][4] = 'r';
        expect(checkWon(1, 4, 'r')).toBeFalse();
        expect(checkWon(1, 4, 'b')).toBeFalse();
    });
}

describe("column"), function() {
    beforeEach(resetField);

    it("win game, blue, bottom column", function() {
        state.board[0][0] = 'b';
        state.board[1][0] = 'b';
        state.board[2][0] = 'b';
        state.board[3][0] = 'b';
        expect(checkWon(0, 0, 'b')).toBeTrue();
        expect(checkWon(0, 0, 'r')).toBeFalse();
    });

    it("win game, red, bottom column", function() {
        state.board[0][0] = 'r';
        state.board[1][0] = 'r';
        state.board[2][0] = 'r';
        state.board[3][0] = 'r';
        expect(checkWon(0, 0, 'r')).toBeTrue();
        expect(checkWon(0, 0, 'b')).toBeFalse();
    });

    it("win game, red, high column", function() {
        state.board[1][3] = 'r';
        state.board[2][3] = 'r';
        state.board[3][3] = 'r';
        state.board[4][3] = 'r';
        expect(checkWon(1, 3, 'r')).toBeTrue();
        expect(checkWon(1, 3, 'b')).toBeFalse();
    });

    it("not win game", function() {
        state.board[1][3] = 'r';
        state.board[2][3] = 'b';
        state.board[3][3] = 'r';
        state.board[4][3] = 'r';
        expect(checkWon(1, 3, 'r')).toBeFalse();
        expect(checkWon(1, 3, 'b')).toBeFalse();
    });
};