const playerFactory = (name) => {
    const getName = () => name;
    return { getName };
};



const gameBoard = (() => {
    let gameBoard;

    const createGameBoard = (() => {
        gameBoard = new Array(3);
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i] = new Array(3);
        }
    });

    createGameBoard();

    const clearGameBoard = (() => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j] = null;
            }
        }
    });

    const getGameBoard = () => gameBoard;

    const checkTie = (() => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameBoard[i][j] == null) {
                    return false;
                }

            }
        }
        return true;
    });

    return { getGameBoard, clearGameBoard, checkTie };
})();

const displayController = (() => {
    const boardSquares = document.querySelectorAll('.board-square');

    const getBoardSquares = () => boardSquares;
    let theGameBoard = gameBoard.getGameBoard();

    const displayBoard = () => {
        boardSquares[0].textContent = theGameBoard[0][0];
        boardSquares[1].textContent = theGameBoard[0][1];
        boardSquares[2].textContent = theGameBoard[0][2];

        boardSquares[3].textContent = theGameBoard[1][0];
        boardSquares[4].textContent = theGameBoard[1][1];
        boardSquares[5].textContent = theGameBoard[1][2];

        boardSquares[6].textContent = theGameBoard[2][0];
        boardSquares[7].textContent = theGameBoard[2][1];
        boardSquares[8].textContent = theGameBoard[2][2];
    }




    const updateArray = (square) => {
        switch (Number(square.id)) {
            case 0:

                if (theGameBoard[0][0] == null) {
                    theGameBoard[0][0] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;
            case 1:
                if (theGameBoard[0][1] == null) {
                    theGameBoard[0][1] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 2:
                if (theGameBoard[0][2] == null) {
                    theGameBoard[0][2] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 3:
                if (theGameBoard[1][0] == null) {
                    theGameBoard[1][0] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 4:
                if (theGameBoard[1][1] == null) {
                    theGameBoard[1][1] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 5:
                if (theGameBoard[1][2] == null) {
                    theGameBoard[1][2] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 6:
                if (theGameBoard[2][0] == null) {
                    theGameBoard[2][0] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 7:
                if (theGameBoard[2][1] == null) {
                    theGameBoard[2][1] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }
                        gameController.switchCurrentPlayer();
                    }
                }
                break;

            case 8:
                if (theGameBoard[2][2] == null) {
                    theGameBoard[2][2] = gameController.getCurrentPlayer();
                    displayBoard();
                    if (!gameController.win(Number(square.id))) {
                        if (gameBoard.checkTie()) {
                            alert("tie");
                            gameBoard.clearGameBoard();
                            displayController.displayBoard();
                            gameController.reset();
                            break;
                        }

                        gameController.switchCurrentPlayer();
                    }
                }
                break;


            default:
                break;
        }


    }


    for (let square of boardSquares) {
        square.addEventListener('click', () => {
            updateArray(square);

        });
    }

    return { getBoardSquares, displayBoard };
})();

const gameController = (() => {
    const x = playerFactory('X');
    const y = playerFactory('O');

    const theGameBoard = gameBoard.getGameBoard();


    let currentPlayer = x;

    const reset = () => currentPlayer = x;
    const getCurrentPlayer = () => currentPlayer.getName();

    const switchCurrentPlayer = () => {
        currentPlayer = currentPlayer === x ? y : x;
    }

    const win = (squareID) => {
        switch (squareID) {
            case 0:
                if ((theGameBoard[0][1] == getCurrentPlayer() && theGameBoard[0][2] == getCurrentPlayer()) ||
                    (theGameBoard[1][0] == getCurrentPlayer() && theGameBoard[2][0] == getCurrentPlayer()) ||
                    (theGameBoard[1][1] == getCurrentPlayer() && theGameBoard[2][2] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;
            case 1:
                if ((theGameBoard[0][0] == getCurrentPlayer() && theGameBoard[0][2] == getCurrentPlayer()) ||
                    (theGameBoard[1][1] == getCurrentPlayer() && theGameBoard[2][1] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 2:
                if ((theGameBoard[0][0] == getCurrentPlayer() && theGameBoard[0][1] == getCurrentPlayer()) ||
                    (theGameBoard[1][2] == getCurrentPlayer() && theGameBoard[2][2] == getCurrentPlayer()) ||
                    (theGameBoard[1][1] == getCurrentPlayer() && theGameBoard[2][0] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 3:
                if ((theGameBoard[0][0] == getCurrentPlayer() && theGameBoard[2][0] == getCurrentPlayer()) ||
                    (theGameBoard[1][1] == getCurrentPlayer() && theGameBoard[1][2] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 4:
                if ((theGameBoard[0][1] == getCurrentPlayer() && theGameBoard[2][1] == getCurrentPlayer()) ||
                    (theGameBoard[1][0] == getCurrentPlayer() && theGameBoard[1][2] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 5:
                if ((theGameBoard[0][2] == getCurrentPlayer() && theGameBoard[2][2] == getCurrentPlayer()) ||
                    (theGameBoard[1][0] == getCurrentPlayer() && theGameBoard[1][1] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 6:
                if ((theGameBoard[0][0] == getCurrentPlayer() && theGameBoard[1][0] == getCurrentPlayer()) ||
                    (theGameBoard[2][1] == getCurrentPlayer() && theGameBoard[2][2] == getCurrentPlayer()) ||
                    (theGameBoard[1][1] == getCurrentPlayer() && theGameBoard[0][2] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 7:
                if ((theGameBoard[0][1] == getCurrentPlayer() && theGameBoard[1][1] == getCurrentPlayer()) ||
                    (theGameBoard[2][0] == getCurrentPlayer() && theGameBoard[2][2] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;

            case 8:
                if ((theGameBoard[2][0] == getCurrentPlayer() && theGameBoard[2][1] == getCurrentPlayer()) ||
                    (theGameBoard[0][2] == getCurrentPlayer() && theGameBoard[1][2] == getCurrentPlayer()) ||
                    (theGameBoard[0][0] == getCurrentPlayer() && theGameBoard[1][1] == getCurrentPlayer())) {
                    alert(`The winner is ${getCurrentPlayer()}`);
                    gameBoard.clearGameBoard();
                    displayController.displayBoard();
                    reset();
                    return true;
                }
                break;


            default:
                break;
        }

    }


    return { getCurrentPlayer, switchCurrentPlayer, win, reset };

})();