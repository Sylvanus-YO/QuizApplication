let question = document.getElementById("question");
let feedback = document.getElementById("feedback");
let nextButton = document.getElementById("nextButton");
let answerButtons = document.querySelectorAll(".answer-btn");
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Main Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: 2
    },
    {
        question: "Which language makes a webpage interactive?",
        answers: [
            "CSS",
            "JavaScript",
            "HTML",
            "SQL"
        ],
        correct: 1
    }
];
let currentQuestionIndex = 0;
let score = 0;
function showQuestion() {
let currentQuestion = questions[currentQuestionIndex];
question.textContent = currentQuestion.question;

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
    answerButtons[i].disabled = false;
}

feedback.textContent = "";
nextButton.disabled = true;
}
function checkAnswer(selectedIndex) {
let currentQuestion = questions[currentQuestionIndex];
if (selectedIndex === currentQuestion.correct) {
    feedback.textContent = "Correct! 🎉";
    score++;
} else {
    feedback.textContent = "Wrong answer! ❌";
}

document.getElementById("score").textContent = "Score: " + score;

answerButtons.forEach(function(button) {
    button.disabled = true;
});

nextButton.disabled = false;
}
// Make answer buttons clickable
answerButtons.forEach(function(button, index) {
button.addEventListener("click", function() {
checkAnswer(index);
});
});
// Make the Next Question button work
nextButton.addEventListener("click", function() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    question.textContent = "Quiz completed! 🎉";

    document.getElementById("answer-buttons").style.display = "none";

    feedback.textContent = "Final score: " + score + " / " + questions.length;

    nextButton.textContent = "Quiz Finished";
    nextButton.disabled = true;
}
});
// Start the quiz
showQuestion();