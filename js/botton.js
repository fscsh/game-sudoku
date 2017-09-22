var Difficultylevel, board, answerBoardStr, displayval, chooseIdx, chooseAns, endtime = 0;
$(document).ready(function() {
    // $(".level-container").hide();
    $("#gameboard").hide();
    document.getElementById("easy").innerHTML = "EASY";
    document.getElementById("midium").innerHTML = "MIDIUM";
    document.getElementById("hard").innerHTML = "HARD";
})
$("#easy").click(function() {
    Difficultylevel = 10;
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
$('#answerchoice').hide();
$('#gameboard').click(function(e) {
    if (e.target.innerHTML === '.') {
        // debugger
        let idName = e.target.id;
        $('#' + idName).css('background', 'green');
        chooseIdx = idName.substring(idName.lastIndexOf('c') + 1);
        chooseAns = answerBoardStr[chooseIdx];
        // debugger
        endtime++;
        winCheck();
        $('#answerchoice').show();
    } else {
        $('#answerchoice').hide();

    }
})
$('#answerchoice').click(function(e) {
    let idChoose = e.target.id;
    answerIdx = idChoose.substring(idChoose.lastIndexOf('a') + 1);
    if (answerIdx === chooseAns) {
        console.log('correct!');
        document.getElementById('c' + chooseIdx).innerHTML = chooseAns;
        let optionCorrect = '#c' + chooseIdx;
        $(optionCorrect).css('background', 'white');
    } else {
        // document.getElementById('c'+chooseIdx).innerHTML = chooseAns;
        let optionName = '#c' + chooseIdx;
        $(optionName).css('background', 'red');
    }
})

$('.gameover').hide();

function winCheck() {
    if (endtime === 1) {
        $('.gameover').show();
        $('#gameboard').hide();
    }
}
