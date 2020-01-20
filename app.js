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

    console.log(questions[1])
    console.log(answerChoices[2][1])
    console.log(answer[4])
    console.log(questions.length)

    $(document).ready(function () {
        for (i = 0; i < questions.length; i++) {
            createCard(i);
    
    
        }
    
    })

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
    }