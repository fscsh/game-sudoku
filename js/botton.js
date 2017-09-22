var Difficultylevel, board, answerBoardStr, displayval, chooseIdx, chooseAns, idName,level,endtime = 0;
$(document).ready(function() {
    $(".level-container").hide();
    $("#gameboard").hide();
    document.getElementById("easy").innerHTML = "EASY";
    document.getElementById("midium").innerHTML = "MIDIUM";
    document.getElementById("hard").innerHTML = "HARD";
})
$('#start').click(function(){
    $('#start').hide();
    $(".level-container").show();
    $('.gameover').hide();
})
$("#easy").click(function() {
    Difficultylevel = 10;
    level = 1;
    board = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    ];
    solveBoardStr = isValidSudoku(board);
    for (let i = 0; i < solveBoardStr.length; i++) {
        solveBoardStr[i] = solveBoardStr[i].join('');
    }
    answerBoardStr = origintoStr(solveBoardStr);
    let useBoard = [];
    for (let i = 0; i < solveBoardStr.length; i++) {
        let arr = [];
        for (let j = 0; j < solveBoardStr[i].length; j++) {
            arr.push(solveBoardStr[i][j])
        }
        useBoard.push(arr);
    }
    displayval = playboardStr(useBoard, Difficultylevel);

    for (var i = 0; i < 81; i++) {
        document.getElementById('c' + i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})

$("#midium").click(function() {
    Difficultylevel = 20;
    level = 20;
    board = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    ];
    solveBoardStr = isValidSudoku(board);
    for (let i = 0; i < solveBoardStr.length; i++) {
        solveBoardStr[i] = solveBoardStr[i].join('');
    }
    answerBoardStr = origintoStr(solveBoardStr);
    let useBoard = [];
    for (let i = 0; i < solveBoardStr.length; i++) {
        let arr = [];
        for (let j = 0; j < solveBoardStr[i].length; j++) {
            arr.push(solveBoardStr[i][j])
        }
        useBoard.push(arr);
    }
    displayval = playboardStr(useBoard, Difficultylevel);

    for (var i = 0; i < 81; i++) {
        document.getElementById('c' + i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})

$("#hard").click(function() {
    Difficultylevel = 50;
    level = 50;
    board = [
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    ];
    solveBoardStr = isValidSudoku(board);
    for (let i = 0; i < solveBoardStr.length; i++) {
        solveBoardStr[i] = solveBoardStr[i].join('');
    }
    answerBoardStr = origintoStr(solveBoardStr);
    let useBoard = [];
    for (let i = 0; i < solveBoardStr.length; i++) {
        let arr = [];
        for (let j = 0; j < solveBoardStr[i].length; j++) {
            arr.push(solveBoardStr[i][j])
        }
        useBoard.push(arr);
    }
    displayval = playboardStr(useBoard, Difficultylevel);

    for (var i = 0; i < 81; i++) {
        document.getElementById('c' + i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})

$('.answerchoice').hide();
$('#gameboard').click(function(e) {
    if (e.target.innerHTML === '.') {
        // debugger

        idName = e.target.id;
        $('#' + idName).css('background', '#eee');
        chooseIdx = idName.substring(idName.lastIndexOf('c') + 1);
        chooseAns = answerBoardStr[chooseIdx];
        // debugger

        $('.answerchoice').show();
    } else {
        $('.answerchoice').hide();
        $('#gameboard td').css('background', '#A1755C');
    }
})

$('.answerchoice').click(function(e) {

    let idChoose = e.target.id;
    answerIdx = idChoose.substring(idChoose.lastIndexOf('a') + 1);
    if (answerIdx === chooseAns) {
        // console.log('correct!');
        document.getElementById('c' + chooseIdx).innerHTML = chooseAns;
        endtime++;
        winCheck();
        let optionCorrect = '#c' + chooseIdx;
        $(optionCorrect).css('background', '#A1755C');
    } else {
        // document.getElementById('c'+chooseIdx).innerHTML = chooseAns;
        let optionName = '#c' + chooseIdx;
        $(optionName).css('background', 'red');
        document.getElementById('c' + chooseIdx).innerHTML = answerIdx;
    }
})

$('.gameover').hide();

function winCheck() {
    if (endtime === level) {
        $('#start').show();
        $('.gameover').show();
        $('#gameboard').hide();
        $('.answerchoice').hide();
        $('.level-container').hide();
    }else {
        $('.gameover').hide();

    }
}
