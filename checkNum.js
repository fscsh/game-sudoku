function origintoStr(board){
    // let board = [];
    for (let i = 0; i < board.length; i++) {
        board[i] = board[i].join('');
    }

        board = board.join('');


    return board;
}
function exampletoStr(example){
    for (let i = 0; i < example.length; i++) {
        example[i] = example[i].join('');
    }

        example = example.join('');


    return example;
}
function checkboard(s,i,board,example){
    let origin = origintoStr(board) ;
    let answer = exampletoStr(example);
    answer[i] = s;
    if (answer[i] === origin[i]) {
        return true;
    }else {
        return false;
    }
    }
    return 0;
}



let board = [
    ['6', '2', '5', '3', '4', '9', '7', '8', '1'],
    ['9', '7', '4', '5', '1', '8', '6', '3', '2'],
    ['3', '8', '1', '2', '7', '6', '9', '4', '5'],
    ['2', '6', '7', '4', '9', '3', '1', '5', '8'],
    ['1', '5', '3', '8', '2', '7', '4', '6', '9'],
    ['4', '9', '8', '6', '5', '1', '2', '7', '3'],
    ['5', '4', '9', '7', '3', '2', '8', '1', '6'],
    ['7', '1', '6', '9', '8', '5', '3', '2', '4'],
    ['8', '3', '2', '1', '6', '4', '5', '9', '7']
];

let example = [
    ['6', '2', '.', '3', '4', '9', '7', '8', '1'],
    ['9', '.', '4', '5', '1', '8', '6', '3', '2'],
    ['3', '8', '1', '2', '7', '6', '9', '4', '5'],
    ['2', '6', '7', '4', '9', '3', '1', '5', '8'],
    ['1', '5', '3', '8', '2', '7', '4', '6', '9'],
    ['4', '9', '8', '6', '5', '1', '2', '7', '3'],
    ['5', '4', '9', '7', '3', '2', '8', '1', '6'],
    ['7', '1', '6', '9', '8', '5', '3', '2', '4'],
    ['8', '3', '2', '1', '6', '4', '5', '9', '7']
];
// console.log(origintoStr(board));
console.log(exampletoStr(example));
// console.log(checkboard(5,2,board,example));
