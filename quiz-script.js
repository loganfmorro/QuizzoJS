var currentQuestion = 0;
var wrongPenalty = -10;

//timer variables and function
var startCount = 100
const stopCount = 0, 
    duration = 100000, //milliseconds
    countdownElement = document.getElementById('quizTimer'), 
    intervalTime = duration/Math.abs(startCount - stopCount);
let countdown = setInterval(
    function timer(){
        if(startCount === stopCount)clearInterval(countdown)
        countdownElement.innerHTML = startCount;
        if(startCount>stopCount){
            startCount --
        }
        else{
            startCount ++
        }
    },
        intervalTime
);

//Variables for our questions
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var totalQuestions = questions.length;
var answerBtn = document.getElementById('answerButton');
var resultContainer = document.getElementById('result');

//Code to load the questions into the container
function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}


//Subtmitting/ Loading the next question functions
function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption){
        alert ('Please select your answer!');
        return;
    }

    var chkAnswerEl = document.getElementById('chkAns')
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer != answer){
        chkAnswerEl.textContent = "Sorry, Incorrect!";
        startCount = startCount - 10;
    }
    if(questions[currentQuestion].answer == answer){
        chkAnswerEl.textContent = "That's Correct!";
    }

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions - 1){
        answerButton.textContent= "Finish";
    }

    if((currentQuestion == totalQuestions) || 'quizTimer' === 0){
        container.style.display = 'none';
        resultContainer.style.display = '';
        resultContainer.textContent='Your Score: ' + quizTimer.textContent;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);