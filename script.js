const questions = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Hypo Text Multi Language', 'Hello Text Many Logic', 'Hyper Text Multi Logistic'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: 'What language is recognized by browsers?',
    options: ['HTML', 'SQL', 'Java', 'Python'],
    correctAnswer: 'HTML'
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const scoreElement = document.getElementById('score');

function displayQuestion() {
  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';
    questions[currentQuestion].options.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.className = 'option';
      button.addEventListener('click', () => selectOption(button, option));
      optionsElement.appendChild(button);
    });
    submitButton.style.display = 'block'; // Show submit button for questions
  } else {
    questionElement.textContent = 'Quiz Completed';
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Your Score: ${score}/${questions.length}`;
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Go to Home';
    homeButton.className = 'home-button';
    homeButton.addEventListener('click', () => {
      window.location.href = 'home.html'; // Redirect to home.html
    });

    // Append the elements in the desired order
    optionsElement.appendChild(scoreElement); // Display score above the button
    optionsElement.appendChild(homeButton);

    submitButton.style.display = 'none'; // Hide submit button for score display
  }
}

function selectOption(button, option) {
  selectedOption = option;
  const optionButtons = optionsElement.querySelectorAll('.option');
  optionButtons.forEach((btn) => {
    btn.classList.remove('selected');
  });
  button.classList.add('selected');
}

submitButton.addEventListener('click', () => {
  if (selectedOption !== null) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      score++;
    }
    currentQuestion++;
    selectedOption = null;
    displayQuestion();
  }
});

displayQuestion();
