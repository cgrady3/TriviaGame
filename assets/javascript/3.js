$(document).ready(function () {

    var numCorrect = 0;
    var numWrong = 0;
    var countdown = 20;
    var index = 0;
    var questionCard = $('#question')

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

    function createCard() {
        console.log(index)
        // create card elements
        var question = $('<div id="question">').text(questions[index]);
        var A = $('<button id="answer-choices" data-choice="A">').text(answerChoices[index][0]);
        var B = $('<button id="answer-choices" data-choice="B">').text(answerChoices[index][1]);
        var C = $('<button id="answer-choices" data-choice="C">').text(answerChoices[index][2]);
        var D = $('<button id="answer-choices" data-choice="D">').text(answerChoices[index][3]);

        $('#question').append(question);
        $('#answer-choices').append(A).append(B).append(C).append(D);
    }

    function startGame() {
        $('#question').empty();
        $('#answer-choices').empty();

        displayQuestion();
    }

    function displayQuestion() {
        createCard();
        startTimer();
        questionTime();
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

    function questionTime() {
        $('#answer-choices').click(function () {
            let guess = $(this).data('choice')
            console.log(guess)
            if (countdown === 0 || guess !== answer[index]) {
                wrong();
                numWrong++;
            }
            else if (guess === answer[index]) {
                correct();
                numCorrect++;
            }

            nextQuestion();
        })
    }

    function wrong() {
        $('#question').hide();
        $('#answer-choices').empty();
        $('#wrong').show();
        // add disapoint gif
    }

    function correct() {
        $('#question').hide();
        $('#answer-choices').empty();
        $('#correct').show();
        // add happy gif
    }

    function nextQuestion() {
        index++;
        if (index === questions.length) {
            displayResults();
        }
        else {
            displayQuestion();
        }
    }


    function displayResults() {
        /*$('#question').hide();
        $('#answer-choices').empty();
        $('#correct').hide();
        $('#wrong').hide();
        $('#timer').hide();
        $('#final-page').hide();
        $('#reset').show();*/

        let correct = $('<div id="correct">').text(`You answered ${numCorrect} questions right`);
        let wrong = $('<div id="wrong">').text(`You answered ${numWrong} questions wrong`);
        let grade = $('<div id="grade">')
        let percent = numCorrect / questions.length;
        if (percent >= .9) {
            grade.text('Great job! Wait... Are you the Doctor?');
        }
        else if (percent >= .8) {
            grade.text('Definetely companion material');
        }
        else if (percent >= .7) {
            grade.text('You almost had it! Better luck next time');
        }
        else if (percent >= .6) {
            grade.text('Not much of a Whovian I see');
        }
        else {
            grade.text('...ouch');
        }

        $('#final-page').append(correct).append(wrong).append(grade);
    }

    startGame();
})




