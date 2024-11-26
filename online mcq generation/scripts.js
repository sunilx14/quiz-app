const quizData = [
  // ... your quiz questions here ...
  {
    question:
      "A man walking at the rate of 5km/h. Crosses a bridge in 15 minutes. The length of bridge in meter is ?",
    a: "600",
    b: "750",
    c: "100",
    d: "1250",
    correct: "d",
  },
  {
    question:
      "A man riding his bicycle covers 150 meters in 25 seconds. what is his speed in km/h ?",
    a: "25",
    b: "21.6",
    c: "23",
    d: "20",
    correct: "b",
  },
  {
    question:
      "The speed of two trains are in the ratio 6 : 7. If the second train run 364 km in 4 hours, then the speed of first train is ?",
    a: "60 km/h",
    b: "72km/h",
    c: "78 km/h",
    d: "84 km/h",
    correct: "c",
  },
  {
    question: "What is the port number of PoP ?",
    a: "35",
    b: "43",
    c: "110",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the number of layer in the OSI model ?",
    a: "2",
    b: "4",
    c: "7",
    d: "9",
    correct: "c",
  },
  {
    question: "The full form of OSI model is ?",
    a: "Operating System Interface",
    b: "Optical System Interconnection",
    c: "Operating System Internet",
    d: "Open System Interconnection",
    correct: "d",
  },
  {
    question: "What is HUB ?",
    a: "Software",
    b: "Computer Device",
    c: "Network Device",
    d: "Calculating Device",
    correct: "c",
  },
  {
    question: "What does a set of rules define ?",
    a: "SMPT",
    b: "FTP",
    c: "IMAP",
    d: "Protocol",
    correct: "d",
  },
  {
    question: "Which of the of following is not a type of Database ?",
    a: "Hierarchical",
    b: "Network",
    c: "Distributed",
    d: "Decentralized",
    correct: "d",
  },
  {
    question: "Which of the following is not exmaple of DBMS ?",
    a: "MySQL",
    b: "IBM",
    c: "DB2",
    d: "Google",
    correct: "4",
  },
  {
    question: "Which of the following is a component of DBMS?",
    a: "Data",
    b: "Data language",
    c: "Data Manager",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which of the following is an example of digital electronics?",
    a: "Computer",
    b: "Information Appliances",
    c: "Digital Cameras",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question:
      "What will be the output from a D flip-flop if the clock is low and D = 0 ?",
    a: "0",
    b: "1",
    c: "No change",
    d: "Toggle Mode",
    correct: "c",
  },
  {
    question: "What is the group of 1s in 4 cells of a k-maps called ?",
    a: "Pair",
    b: "Quad",
    c: "Octate",
    d: "Non",
    correct: "b",
  },
  {
    question: "Which of the architecture is power efficient?",
    a: "RISC",
    b: "ISA",
    c: "IANA",
    d: "CISC",
    correct: "a",
  },
  {
    question: "To reduce the memory acces time we generally make use of___",
    a: "SDRAM",
    b: "heaps",
    c: "cache",
    d: "higher capacity RAM's",
    correct: "c",
  },
  {
    question: " The IA-32 system follows which of the following design? ",
    a: "SISC",
    b: "SIMD",
    c: "RISC",
    d: "none of these",
    correct: "a",
  },
  {
    question:
      "Which of the following architecture is suitable for a wide range of data types? ",
    a: "IA-32",
    b: "ARM",
    c: "ASUS firebird",
    d: "68000",
    correct: "a",
  },
  {
    question: "The small extremely fast ,RAM's all called as____",
    a: "heaps",
    b: "accumulators",
    c: "stack",
    d: "cache",
    correct: "d",
  },
  {
    question: "Which number should come next in the series 1,2,3,10__",
    a: "79",
    b: "89",
    c: "99",
    d: "98",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
//   const submitBtn = document.getElementById('submit');

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
let selectedQuestions = []; // Array to store randomly chosen questions
let currentQuiz = 0;
let score = 0;

function shuffle(array) {
  // Function to shuffle the quizData array randomly
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function selectRandomQuestions() {
  // Function to choose 2 random questions without duplicates
  selectedQuestions = shuffle(quizData.slice(0)); // Shuffle a copy of quizData
  selectedQuestions = selectedQuestions.slice(0, 5); // Choose the first 2 elements
}



function loadQuiz() {
  deselectAnswers();
  document.getElementById("question-number").textContent = `Question ${
    currentQuiz + 1
  }:`;
  const currentQuizData = selectedQuestions[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

  
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === selectedQuestions[currentQuiz].correct) {
      score++;
   false }
    currentQuiz++;
    if (currentQuiz < selectedQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered ${score}/${selectedQuestions.length} Questions Correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});






let timeLeft = 300; // 60 seconds

function startTimer() {
  const timerElement = document.getElementById('timer');
  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent   = `Time Left: ${formattedTime}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      alert('Time\'s up! You cannot submit the quiz now.');
      submitBtn.disabled = true;
    }
    timeLeft--;
  }, 1000);
}


// Start the timer when the quiz starts
startTimer();


// Call the functions to initialize the quiz
selectRandomQuestions();
loadQuiz();
