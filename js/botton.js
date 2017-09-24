var Difficultylevel, board, answerBoardStr, displayval, chooseIdx, chooseAns, idName, level, point = 0,
    endtime = 0 ,boxwidth = 0 ,processlevel;
$(document).ready(function() {
    $(".level-container").hide();
    $("#gameboard").hide();
    document.getElementById("easy").innerHTML = "EASY";
    document.getElementById("midium").innerHTML = "MIDIUM";
    document.getElementById("hard").innerHTML = "HARD";
})
$('#start').click(function() {
    $('#start').hide();
    $(".level-container").show();
    $('.gameover').hide();
    $('.progress').hide();
    $("#box").animate({width: 0}, 1000);
})
$("#easy").click(function() {
    $('#gameboard td').css('background', '#A1755C');
    Difficultylevel = 10;
    processlevel = 60;
    level = 10;
    endtime = 0;
    $("#box").animate({width: 0}, 1000);
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
    $("#box").animate({width: 0}, 1000);
    $('#gameboard td').css('background', '#A1755C');
    Difficultylevel = 20;
    processlevel = 30;
    level = 20;
    endtime = 0;
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
    $("#box").animate({width: 0}, 1000);
    $('#gameboard td').css('background', '#A1755C');
    Difficultylevel = 50;
    level = 50;
    processlevel = 12;
    endtime = 0;
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
$("#test").click(function() {
    $("#box").animate({width: 0}, 1000);
    $('#gameboard td').css('background', '#A1755C');
    Difficultylevel = 2;
    processlevel = 300;
    level = 2;
    endtime = 0;
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
        $('#gameboard td').css('background', '#A1755C');
        $('#' + idName).css('background', '#eee');
        chooseIdx = idName.substring(idName.lastIndexOf('c') + 1);
        chooseAns = answerBoardStr[chooseIdx];

        $('.answerchoice').show();
    } else {
        $('.answerchoice').hide();
        $('#gameboard td').css('background', '#A1755C');
    }
})

$('.answerchoice').click(function(e) {

    let idChoose = e.target.id;
    $('.progress').show();
    answerIdx = idChoose.substring(idChoose.lastIndexOf('a') + 1);
    if (answerIdx === chooseAns) {
        // console.log('correct!');
        document.getElementById('c' + chooseIdx).innerHTML = chooseAns;
        endtime++;
        boxwidth += processlevel;
        let tmpPoint = parseInt(answerIdx);
        point += tmpPoint;
        // showpoint();
        winCheck();
        processbar();
        let optionCorrect = '#c' + chooseIdx;
        $(optionCorrect).css('background', '#A1755C');
    } else {
        // document.getElementById('c'+chooseIdx).innerHTML = chooseAns;
        let optionName = '#c' + chooseIdx;
        $(optionName).css('background', 'red');
        document.getElementById('c' + chooseIdx).innerHTML = answerIdx;
    }
})

// var boxwidth = 0;
// boxwidth = endtime * 50;

function processbar() {
    $("#box").animate({width: boxwidth}, 1000);
    // debugger
}
$('.progress').hide();
$('.gameover').hide();

function winCheck() {
    if (endtime === level) {
        $('#start').show();
        $('.gameover').show();
        $('#gameboard').hide();
        $('.answerchoice').hide();
        $('.level-container').hide();
    } else {
        $('.gameover').hide();

    }
}

// function showpoint() {
//     document.getElementById("mypoint").innerHTML = point;
// }
