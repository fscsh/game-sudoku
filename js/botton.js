var Difficultylevel, board;
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
    let solveBoardStr = isValidSudoku(board).slice();
    // let nextBoardStr = isValidSudoku(board).slice();
    let displayval = playboardStr(solveBoardStr, Difficultylevel);
    // debugger
    // let correctboard = origintoStr(solveBoardStr);

    for (var i = 0; i < 81; i++) {
        document.getElementById('c' + i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})
$("#midium").click(function() {
    Difficultylevel = 20;
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
    let solveBoardStr = isValidSudoku(board);
    let correctboard = origintoStr(solveBoardStr);
    // debugger
    let displayval = playboardStr(solveBoardStr, Difficultylevel);



    for (var i = 0; i < 81; i++) {
        document.getElementById(i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})
$("#hard").click(function() {

    Difficultylevel = 30;
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
    let solveBoardStr = isValidSudoku(board);
    let correctboard = origintoStr(solveBoardStr);
    // debugger
    let displayval = playboardStr(solveBoardStr, Difficultylevel);
    for (var i = 0; i < 81; i++) {
        document.getElementById(i).innerHTML = displayval[i];
    }
    $("#gameboard").show();
})
// var correctanswer = 0;
// $("#0").click(function(){
//     correctanswer = correctboard[0];
//     // for (var i = 1; i <= 9; i++) {
//         if ($("#a1").click) {
//             alert("Clicked");
//         }else {
//             alert("wrong!");
//         }
//
//     // }
// })
