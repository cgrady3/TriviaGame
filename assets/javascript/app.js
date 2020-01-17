// show one trivia question at a time
// pull questions and their answers/answer choices from an array object
// all question options respond to 'click' or right array index
// start the timer when the question loads
// use setTimer method
// if correct answer is chosen, show congrats screen and ++ answers correct
// hide all other divs and show congrats screen after a set time
// use fadein and fadeout methods
// if wrong answer chosen or time runs out, show correct answer, and ++ answers wrong
// same div shown whether wrong answer or timer runs out
// click function for wrong answer array index's
// after answering phase, load next question after a few seconds
// after all questions are through, display # of correct and wrong answers
// hide all other divs and show screen after a set time
// restart the game with out reloading the page
// clear all divs and call for the an arrayed question
var questions = triviaArray();
var numQuestions = Object.keys(questions);

function triviaArray() {
    return {
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
}

function createCard(index, info){

    // create card elements
    var main = $('<div id="card" data-index="' + index + '">');
    var head = $('<div id="question">').text(info.question);
    var A = $('<div id="answer-choices">').text(info.A)
    var B = $('<div id="answer-choices">').text(info.B)
    var C = $('<div id="answer-choices">').text(info.C)
    var D = $('<div id="answer-choices">').text(info.D)




    // append card elements to create the question card
    let cardFormat = main.append(head).append(A).append(B).append(C).append(D);

    // return the card to the calling function
    return cardFormat;
}

function indexCards(){
    for (let i = 0; i < numQuestions.length; i++){
        
        // save card index and array info to variables
        var cardIndex = numQuestions[i];
        var cardInfo = questions[cardIndex];

        // pass in the above info to create the cards
        var card = createCard(cardIndex, cardInfo);

        $('#question-card').append(card);
    }
}

console.log('working')

indexCards()