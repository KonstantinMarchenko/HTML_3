import '../styles/styles.css';

let c = 0;
let counter = 0;
let finalTurnCheck = false;
let mainArray = [];
let secondaryArray = [];
let n = 3;
let currentIndex = 0;
let chooseTurn = true;
let turnCount = 0;

for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++){
        let a = i * n + k;
        let button = $('<button class="buttons__button-main" id="btn' + a + '">' + "." + '</button>');
        button.appendTo("#buttons");
    }

    let enter = $('<div></div>')
    enter.appendTo("#buttons");
}

$(".buttons__button-main").click(function () {
    if (chooseTurn){
        $(this).text('X');
        currentIndex = parseInt(this.id.substr(3, 3));
        mainArray[currentIndex] = 1;
        makeArray();
        chooseTurn = false;
    } else {
        $(this).text('O');
        currentIndex = parseInt(this.id.substr(3, 3));
        mainArray[currentIndex] = 0;
        makeArray();
        chooseTurn = true;
    }

    $(this).prop('disabled', true);
    checkArray();
});

$("#reset").click(function () {
    turnCount = 0;
    chooseTurn = true;
    finalTurnCheck = false;
    for (let i = 0; i < n * n; i++) {
        mainArray[i] = 2;
    }
    makeArray();
    $(".buttons__button-main").prop('disabled', false).css('color', 'black').text('.');
})

for (let i = 0; i < 2 * n + n; i++){
    if (!secondaryArray[i]) secondaryArray[i] = [];
}

for (let i = 0; i < n * n; i++){
    mainArray[i] = 2;
}

function makeArray() {
    c = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            secondaryArray[i][j] = mainArray[i * n + j];
            secondaryArray[i + n][j] = mainArray[j * n + c];
        }
        c++;
    }

    for (let i = 0; i < n; i++ ){
        secondaryArray[2 * n][i] = mainArray[i * (n + 1)];
        secondaryArray[2 * n + 1][i] = mainArray[(i + 1) * (n - 1)];
    }
}

function checkArray() {
    for (let i = 0; i < 2 * n + 2; i++){
        counter = 0;
        for (let j = 1; j < n; j++){
            if (secondaryArray[i][0] === secondaryArray[i][j] && secondaryArray[i][0] !== 2){
                counter += 1;
            }
        }

        if (counter === n - 1){
            if (secondaryArray[i][0] === 1) {
                console.log('Player with X won!');
            } else if (secondaryArray[i][0] === 0){
                console.log('Player with O won!');
            }

            finalTurnCheck = true;
            $(".buttons__button-main").prop('disabled', true).css('color', 'grey');
        }
    }

    turnCount += 1;

    if (turnCount  === n * n && !finalTurnCheck){
        $(".buttons__button-main").prop('disabled', true).css('color', 'grey');
        console.log('Its a draw!');
    }
}

makeArray();
