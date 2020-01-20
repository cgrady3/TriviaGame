var numCorrect = 0;
var numWrong = 0;
var countdown = 20;

let questions = [
    'What two-word phrase occurs repeatedly throughout the episodes of Series 1 (2005) and is the title of the penultimate episode?',
    'What is the name of the dangerous species in the library?',
    'Which is the doctors home world?',
    'What pseudonym does the doctors best childhood friend go by?',
    'What does T.A.R.D.I.S. stand for?'
]

let answerChoices = [
    ['Doctor Who', 'Bad Wolf', 'Look Up', 'Dark World'],
    ['Abzorbalof', 'Krillitane', 'Vashta Narada', 'Racnoss'],
    ['Clom', 'Raxacoricofallapatorius', 'Mars', 'Gallifrey'],
    ['The Master', 'The Destroyer of Worlds', 'The Professor', 'John Smith'],
    ['Travel Around Reality Doing Interesting Stuff', 'Time And Relative Dimensions In Space', 'Travel Around Relative Dimensions In Space', 'Time And Reality, Driving In Style'],
]

let answer = [
    'Bad Wolf',
    'Vashta Narada',
    'Gallifrey',
    'The Master',
    'Time And Relative Dimensions In Space']

function createCard(i) {

    // create card elements
    var main = $('<div id="card">');
    var head = $('<div id="question">').text(questions[i]);
    var A = $('<button id="answer-choices" data-choice="A">').text(answerChoices[0]);
    var B = $('<button id="answer-choices" data-choice="B">').text(answerChoices[1]);
    var C = $('<button id="answer-choices" data-choice="C">').text(answerChoices[2]);
    var D = $('<button id="answer-choices" data-choice="D">').text(answerChoices[3]);

    // append card elements to create the question card
    let card = main.append(head).append(A).append(B).append(C).append(D);

    $('#question-card').append(card);
    
    startTimer();
}

function startTimer() {
    $('#timer').text(`${countdown}`)
    if (countdown >= 0) {
        setInterval(timer, 1000);
        $('#timer').text(`${countdown}`)
    }
}

function timer() {
    countdown--;
}

function resetTimer() {
    countdown = 20;
    $('#timer').text(`${countdown}`)
}

function wrong() {
    $('#question-card').hide();
    $('#wrong').show();
    // add disapoint gif
}

function correct() {
    $('#question-card').hide();
    $('#correct').show();
    // add happy gif
}

function displayResults() {
    $('#question-card').hide();
    $('#correct').hide();
    $('#wrong').hide();
    $('#timer').hide();
    $('#final-page').hide();
    $('#reset').show();

    let correct = $('<div id="correct">').text(`You answered ${numCorrect} questions right`);
    let wrong = $('<div id="wrong">').text(`You answered ${numWrong} questions wrong`);
    let grade = $('<div id="grade">')
    let percent = numCorrect / questions.length;
    if (percent >= .9) {
        $('<div id="grade">').text('Great job! Wait... Are you the Doctor?');
    }
    else if (percent >= .8) {
        $('<div id="grade">').text('Definetely companion material');
    }
    else if (percent >= .7) {
        $('<div id="grade">').text('You almost had it! Better luck next time');
    }
    else if (percent >= .6) {
        $('<div id="grade">').text('Not much of a Whovian I see');
    }
    else {
        $('<div id="grade">').text('...ouch');
    }

    $('#final-page').append(correct).append(wrong).append(grade);
}


$(document).ready(function () {

    $('#reset').hide();
    $('#final-page').hide();

    for (i = 0; i < questions.length; i++) {
        createCard(i);
        let guess = $(this).data('choice')
        
        if (countdown === 0 || guess !== answer[i]) {
            wrong();
            numWrong++;
        }
        else if (guess === answer[i]) {
            correct();
            numCorrect++;
        }
        resetTimer();
    }
    displayResults();
})



