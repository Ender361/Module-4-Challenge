// Defining variables
// Variables at top of screen
var highScores = document.getElementById('high-scores');
var timeRemaining = document.getElementById('time-remaining');
// Variables in quiz
var quizMain = document.getElementById('quiz-main');
var quizIntro = document.getElementById('quiz-intro');
var quizAnswers = document.getElementById('quiz-answers');
var rightWrong = document.getElementById('right-wrong');
// Start button variable
var startBtn = document.getElementById('start-btn');
// Defining variable for set of answers and each quiz answer
var quizA1 = document.getElementById('quizBtn1');
var quizA2 = document.getElementById('quizBtn2');
var quizA3 = document.getElementById('quizBtn3');
var quizA4 = document.getElementById('quizBtn4');

// Modifying Variables

// Add event listener and anonymous function to start button
// To Do: hide the 4 answer buttons on launch
var timeLeft = 75;
startBtn.addEventListener('click', function(){   
    setInterval(function () {
        if (timeLeft > 0) {
        timeRemaining.textContent = "Time: " + timeLeft;
        timeLeft--;
        } else {console.log("out of time!")};
    }, 1000)


    quizMain.textContent = "Commonly used data types DO Not Include:";
    quizIntro.textContent = "";
    quizA1.textContent = "strings";
    quizA2.textContent = "booleans";
    quizA3.textContent = "alerts";
    quizA4.textContent = "numbers";
    // TO DO: Hide the start button
    
})

// Define variables for responses
// Event listeners to different answers
var userChoice1;

quizA1.addEventListener('click', function(){
    userChoice1 = 1;
    console.log(userChoice1);
    rightWrong.textContent = "Wrong!";
    timeLeft = timeLeft - 10;
    nextQuestion1()
});
quizA2.addEventListener('click', function(){
    userChoice1 = 2;
    console.log(userChoice1);
    rightWrong.textContent = "Wrong!";
    timeLeft = timeLeft - 10;
    nextQuestion1()
});
quizA3.addEventListener('click', function(){
    userChoice1 = 3;
    rightWrong.textContent = "Correct!";
    console.log(userChoice1);
    nextQuestion1()
});
quizA4.addEventListener('click', function(){
    userChoice1 = 4;
    console.log(userChoice1);
    rightWrong.textContent = "Wrong!";
    timeLeft = timeLeft - 10;
    nextQuestion1()
});

// function to go to next question
function nextQuestion1() {
    quizMain.textContent = "The condition in an if / else statement is enclose with __________.";
    quizA1.textContent = "quotes";
    quizA2.textContent = "curly brackets";
    quizA3.textContent = "parenthesis";
    quizA4.textContent = "square brackets";

    // new answers
    quizA1.addEventListener('click', function(){
        userChoice1 = 1;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion2()
    });
    quizA2.addEventListener('click', function(){
        userChoice1 = 2;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion2()
    });
    quizA3.addEventListener('click', function(){
        userChoice1 = 3;
        rightWrong.textContent = "Correct!";
        console.log(userChoice1);
        nextQuestion2()
    });
    quizA4.addEventListener('click', function(){
        userChoice1 = 4;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion2()
    });
}

function nextQuestion2() {
    quizMain.textContent = "Arrays in JavaScript can be used to store ________.";
    quizA1.textContent = "numbers and strings";
    quizA2.textContent = "other arrays";
    quizA3.textContent = "booleans";
    quizA4.textContent = "all of the above";

    // new answers
    quizA1.addEventListener('click', function(){
        userChoice1 = 1;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion3()
    });
    quizA2.addEventListener('click', function(){
        userChoice1 = 2;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion3()
    });
    quizA3.addEventListener('click', function(){
        userChoice1 = 3;
        rightWrong.textContent = "Wrong!";
        console.log(userChoice1);
        timeLeft = timeLeft - 10;
        nextQuestion3()
    });
    quizA4.addEventListener('click', function(){
        userChoice1 = 4;
        console.log(userChoice1);
        rightWrong.textContent = "Correct!";
        nextQuestion3()
    });
}

function nextQuestion3() {
    quizMain.textContent = "String values must be enclosed within _______ when being assigned to variables.";
    quizA1.textContent = "commas";
    quizA2.textContent = "curly brackets";
    quizA3.textContent = "quotes";
    quizA4.textContent = "parenthesis";

    // new answers
    quizA1.addEventListener('click', function(){
        userChoice1 = 1;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion4()
    });
    quizA2.addEventListener('click', function(){
        userChoice1 = 2;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion4()
    });
    quizA3.addEventListener('click', function(){
        userChoice1 = 3;
        rightWrong.textContent = "Correct!";
        console.log(userChoice1);
        nextQuestion4()
    });
    quizA4.addEventListener('click', function(){
        userChoice1 = 4;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion4()
    });
}

function nextQuestion4() {
    quizMain.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    quizA1.textContent = "JavaScript";
    quizA2.textContent = "terminal/bash";
    quizA3.textContent = "for loops";
    quizA4.textContent = "console log";

    // new answers
    quizA1.addEventListener('click', function(){
        userChoice1 = 1;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion5()
    });
    quizA2.addEventListener('click', function(){
        userChoice1 = 2;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        nextQuestion5()
    });
    quizA3.addEventListener('click', function(){
        userChoice1 = 3;
        rightWrong.textContent = "Wrong!";
        console.log(userChoice1);
        timeLeft = timeLeft - 10;
        nextQuestion5()
    });
    quizA4.addEventListener('click', function(){
        userChoice1 = 4;
        console.log(userChoice1);
        rightWrong.textContent = "Correct!";
        nextQuestion5()
    });
}

function nextQuestion4() {
    quizMain.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    quizA1.textContent = "JavaScript";
    quizA2.textContent = "terminal/bash";
    quizA3.textContent = "for loops";
    quizA4.textContent = "console log";

    // new answers
    quizA1.addEventListener('click', function(){
        userChoice1 = 1;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        finishQuiz()
    });
    quizA2.addEventListener('click', function(){
        userChoice1 = 2;
        console.log(userChoice1);
        rightWrong.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        finishQuiz()
    });
    quizA3.addEventListener('click', function(){
        userChoice1 = 3;
        rightWrong.textContent = "Wrong!";
        console.log(userChoice1);
        timeLeft = timeLeft - 10;
        finishQuiz()
    });
    quizA4.addEventListener('click', function(){
        userChoice1 = 4;
        console.log(userChoice1);
        rightWrong.textContent = "Correct!";
        finishQuiz()
    });
}   

function finishQuiz () {
    quizMain.textContent = "All done!";
    quizIntro.textContent = "Your final score is " + timeRemaining;
    console.log(timeRemaining);
    quizA1.textContent = "";
    quizA2.textContent = "";
    quizA3.textContent = "";
    quizA4.textContent = "";
}
