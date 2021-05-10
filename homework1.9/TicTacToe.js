function runTicTacToe() {
  let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  let boardSize = 3;
  let boardStr;

  function randomInteger() {
    return Math.floor(Math.random() * boardSize);
  }

  let sign = "x";
  let x;
  let y;

  for (let i = 0; true; i++) {
    x = randomInteger();
    y = randomInteger();

    if (board[x][y] === "_") {
      board[x][y] = sign;
    } else {
      continue;
    }

    if (board[0][0] === sign && board[1][0] === sign && board[2][0] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[0][1] === sign && board[1][1] === sign && board[2][1] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[0][2] === sign && board[1][2] === sign && board[2][2] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[0][0] === sign && board[0][1] === sign && board[0][2] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[1][0] === sign && board[1][1] === sign && board[1][2] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[2][0] === sign && board[2][1] === sign && board[2][2] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    } else if (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign) {
      return (boardStr =
        board[0].join("  ") +
        "\n" +
        board[1].join("  ") +
        "\n" +
        board[2].join("  ") +
        " " +
        sign +
        " win!");
    }
    if (sign === "x") {
      sign = "o";
    } else if (sign === "o") {
      sign = "x";
    }
  }
  
}

console.log(runTicTacToe());