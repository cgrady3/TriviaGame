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
        'B',
        'C',
        'D',
        'A',
        'B'
    ]

    function startGame(){
        cleanSlate();
        displayQuestion();
    }

    function cleanSlate(){
        console.log('cleanSlate')
        $('#question').empty()
        $('#answer-choices').empty()
        $('#grade').hide()
        $('#correct').hide()
        $('#wrong').hide()
        $('#final-page').hide()
        $('#reset').hide()
    }

    function displayQuestion(){
        console.log('displayQuestion')
        createCard();
        answerIntake();
    }

    function createCard() {
        console.log(index)
        console.log('createCard')
        // create card elements
        var question = $('<div id="question">').text(questions[index]);
        var A = $('<button class="answer-choices" data-choice="A">').text(answerChoices[index][0]);
        var B = $('<button class="answer-choices" data-choice="B">').text(answerChoices[index][1]);
        var C = $('<button class="answer-choices" data-choice="C">').text(answerChoices[index][2]);
        var D = $('<button class="answer-choices" data-choice="D">').text(answerChoices[index][3]);

        $('#question').append(question);
        $('.answer-choices').append(A).append(B).append(C).append(D);
    }

    function answerIntake(){
        console.log('answerIntake')
        
        $('.answer-choices').click(function () {
            let guess = $(this).data('choice')
            console.log(guess)
            console.log(answer[index])
        
            if (countdown === 0 || guess !== answer[index]) {
               // wrong();
                numWrong++;
                console.log(numWrong)
            }
            else if (guess === answer[index]) {
                //correct();
                numCorrect++;
                console.log(numCorrect)
            }

            //nextQuestion();
        })
    }

    startGame()
    })