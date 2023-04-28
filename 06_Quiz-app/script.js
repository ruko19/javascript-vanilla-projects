

const quizAPI = "https://opentdb.com/api.php?amount=10";


const questionTittle = document.getElementById('question');
const options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result')

let correctAnswer = "", correctScore = 0, askedCount = 0, totalQuestion = 10;


const eventListeners = () => {
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);

}

window.addEventListener("DOMContentLoaded", (e) => {
    fetchData(quizAPI);
    eventListeners()
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

const fetchData = async (url) => {
    try {
        const res = await axios.get(url)
        const data = await res.data.results;
        _result.innerHTML = "";
        showQuestion(data[0])
    } catch (error) {
        console.log(error);
    }
};

const showQuestion = ({ question, category, difficulty, correct_answer, incorrect_answers }) => {
    _checkBtn.disable = false;

    correctAnswer = correct_answer;
    let incorrectAnswer = incorrect_answers;
    let optionsList = incorrectAnswer;

    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length +
        1)), 0, correctAnswer);

    questionTittle.innerHTML = `${question} <br> <span class="category">${category}</span>`

    options.innerHTML = `
    ${optionsList.map((option, index) => `
    <li>${index + 1}. <span>${option}</span></li>
    `).join('')}
    `
    selectOption()

}


const selectOption = () => {
    options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if (options.querySelector('.selected')) {
                const activeOption = options.querySelector('.selected');
                activeOption.classList.remove('selected');
            } else {

                option.classList.add('selected')
            }
        });
    });
}


const checkAnswer = () => {
    _checkBtn.disable = true;
    if (options.querySelector('.selected')) {
        let selectedAnswer = options.querySelector('.selected span').textContent;
        if (selectedAnswer == HTMLDecode(correctAnswer)) {
            correctScore++;
            _result.innerHTML = `<p>Correct Answer</p>`;
        } else {
            _result.innerHTML = `<p>inconrrect Answer! <small><b> correct Answer: </b> ${correctAnswer}</small></p>`
        }
        checkCount();
    } else {

        _result.innerHTML = `<p>Please select an option</p>`;
        _checkBtn.disable = false

    }

}

function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

function checkCount() {
    askedCount++;
    setCount();
    if (askedCount == totalQuestion) {
        setTimeout(function () {
            console.log("");
        }, 5000);


        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function () {
            fetchData(quizAPI);
        }, 300);
    }
}

function setCount() {
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

function restartQuiz() {
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    fetchData(quizAPI);
}