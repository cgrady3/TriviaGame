let triviaArray = {
    question1: {
        question: 'What two-word phrase occurs repeatedly throughout the episodes of Series 1 (2005) and is the title of the penultimate episode?',
        A: 'Doctor Who',
        B: 'Bad Wolf',
        C: 'Look Up',
        D: 'Dark World',
    },
    question2: {
        question: 'What is the name of the dangerous species in the library?',
        A: 'Abzorbalof',
        B: 'Krillitane',
        C: 'Vashta Narada',
        D: 'Racnoss',
    },
    question3: {
        question: 'Which is the doctors home world?',
        A: 'Clom',
        B: 'Raxacoricofallapatorius',
        C: 'Mars',
        D: 'Gallifrey',
    },
    question4: {
        question: 'What pseudonym does the doctors best childhood friend go by?',
        A: 'The Master',
        B: 'The Destroyer of Worlds',
        C: 'The Professor',
        D: 'John Smith',
    },
    question5: {
        question: 'What does T.A.R.D.I.S. stand for?',
        A: 'Travel Around Reality Doing Interesting Stuff',
        B: 'Time And Relative Dimensions In Space',
        C: 'Travel Around Relative Dimensions In Space',
        D: 'Time And Reality, Driving In Style',
    }
}

var numQuestions = Object.keys(triviaArray);

var Answers = ['B','C','D','A','B']

console.log(Answers[0])

function indexCards(i) {

    // save card index and array info to variables
    var cardIndex = numQuestions[i];
    var cardInfo = triviaArray[cardIndex];

    // pass in the above info to create the cards
    var card = createCard(cardIndex, cardInfo);

   
}

function createCard(info) {

    // create card elements
    var main = $('<div id="card">');
    var head = $('<div id="question">').text(info.question);
    var A = $('<button id="answer-choices" data-choice="A">').text(info.A);
    var B = $('<button id="answer-choices" data-choice="B">').text(info.B);
    var C = $('<button id="answer-choices" data-choice="C">').text(info.C);
    var D = $('<button id="answer-choices" data-choice="D">').text(info.D);

    // append card elements to create the question card
    let cardFormat = main.append(head).append(A).append(B).append(C).append(D);

    $('#question-card').append(card);
}

console.log(numQuestions.length)

$(document).ready(function () {
    for (i = 0; i < numQuestions.length; i++) {
        var cardInfo = triviaArray[numQuestions[i]];
        createCard(cardInfo)
        //displayTimer();
        $('#answer-choices').click(function(){
            let guess = $(this).attr('data-choice')
            console.log(guess)
        })


    }

})

