// function runTicTacToe() {
//   let board = [
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//   ];

//   let boardSize = 3;
//   let boardStr;

//   function randomInteger() {
//     return Math.floor(Math.random() * boardSize);
//   }

//   let sign = "x";
//   let x;
//   let y;

//   for (let i = 0; true; i++) {
//     x = randomInteger();
//     y = randomInteger();

//     if (board[x][y] === "_") {
//       board[x][y] = sign;
//     } else {
//       continue;
//     }

//     if (board[0][0] === sign && board[1][0] === sign && board[2][0] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[0][1] === sign && board[1][1] === sign && board[2][1] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[0][2] === sign && board[1][2] === sign && board[2][2] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[0][0] === sign && board[0][1] === sign && board[0][2] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[1][0] === sign && board[1][1] === sign && board[1][2] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[2][0] === sign && board[2][1] === sign && board[2][2] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     } else if (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign) {
//       return (boardStr =
//         board[0].join("  ") +
//         "\n" +
//         board[1].join("  ") +
//         "\n" +
//         board[2].join("  ") +
//         " " +
//         sign +
//         " win!");
//     }
//     if (sign === "x") {
//       sign = "o";
//     } else if (sign === "o") {
//       sign = "x";
//     }
//   }

// }

// console.log(runTicTacToe());

function runTicTacToe (size) {
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push(new Array(size).fill("_"));
  }

  let boardStr;

  function randomInteger() {
    return Math.floor(Math.random() * size);
  }

  let sign = "x";
  let x;
  let y;

  for (let i = 0; i < size * size; i++) {
    x = randomInteger();
    y = randomInteger();

    if (board[x][y] === "_") {
      board[x][y] = sign;
    } else {
      i--;
      continue;
    }

    for (let i = 0; i < size; i++) {
      let c = 0;
      for (let j = 0; j < size; j++) {
        if (board[j][i] === sign) {
          c++;
        } else {
          break;
        }
      }
      if (c === size) {
        for (let i = 0; i < size; i++) {
          boardStr = board[i].join("  ") + "\n";
        }
        return boardStr + " " + sign + " win";
      }
    }

    for (let i = 0; i < size; i++) {
      let c = 0;
      for (let j = 0; j < size; j++) {
        if (board[i][j] === sign) {
          boardStr = board[j].join("  ") + "\n";
          c++;
        } else {
          break;
        }
      }
      if (c === size) {
        for (let i = 0; i < size; i++) {
          boardStr = board[i].join("  ") + "\n";
        }
        return boardStr + " " + sign + " win";
      }
    }

    for (let i = 0; i < size; i++) {
      let c = 0;
      if (board[i][i] === sign) {
        boardStr = board[i].join("  ") + "\n";
        c++;
      } else if (board[size - 1 - i][size - 1 - i] === sign) {
        boardStr = board[size - 1 - i].join("  ") + "\n";
        c++;
      } else {
        break;
      }
      if (c === size) {
        for (let i = 0; i < size; i++) {
          boardStr = board[i].join("  ") + "\n";
        }
        return boardStr + " " + sign + " win";
      }
    }

    if (sign === "x") {
      sign = "o";
    } else if (sign === "o") {
      sign = "x";
    }
  }
}

let num = 6;

console.log(runTicTacToe(num));
