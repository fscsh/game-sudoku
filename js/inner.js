function isValidSudoku(board) {
    let res = splitboard(board);
    return res;
}

function splitboard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let s of shuffleArray()) {
                    if (helper(s, i, j, board)) {
                        board[i][j] = s;
                        if (splitboard(board)) {
                            return board;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return board;
}

function helper(s, i, j, board) {
    let a = Math.floor(i / 3) * 3;
    let b = Math.floor(j / 3) * 3;
    let arr = [];

    for (let q = a; q <= a + 2; q++) {
        for (let w = b; w <= b + 2; w++) {
            arr.push(board[q][w]);
            if (board[q][w] === s) return false;
        }
    }
    for (let t = 0; t < 9; t++) {
        if (board[i][t] === s || board[t][j] === s || arr.includes(s)) {
            return false;
        }
    }
    return true;
}



function shuffleArray(newboard) {
    let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * 9);
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}


// buildPlayBoard*****
function buildPlayBoard(board, Difficultylevel) {
    //创造挖空的2D
    while (Difficultylevel > 0) {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        if (board[x][y] !== '.') {
            board[x][y] = '.';
            Difficultylevel--;
        }
    }
    return board;
}

// checkboard:
function origintoStr(board) {
    // let originalboardStr = board;
    // for (let i = 0; i < originalboardStr.length; i++) {
    //     originalboardStr[i] = originalboardStr[i].join('');
    // }
    board = board.join('');
    return board;
}

function playboardStr(useBoard, Difficultylevel) {
    // var buildboardStr = buildPlayBoard(board, Difficultylevel);
    while (Difficultylevel > 0) {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        if (useBoard[x][y] !== '.') {
            useBoard[x][y] = '.';
            Difficultylevel--;
        }
    }

    for (let i = 0; i < useBoard.length; i++) {
        useBoard[i] = useBoard[i].join('');
    }

    let displayval = useBoard.join('');
    return displayval;
}



// for (var i = 0; i < 81; i++) {
//     if (document.getElementById('c'+i).innerHTML = displayval[i];) {
//
//     }
//
//
// }






// console.log(displayval);
// console.log(displayval.split('').filter(x => x === '.').length);
