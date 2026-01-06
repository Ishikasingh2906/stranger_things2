let questions = [
  {
    question: "Which vacation place would you prefer?",
    
    options: [
      { text: "Mountain", points: 0 },
      { text: "Beach", points: 4 },
      { text: "Amusement ride", points: 2 }
    ]
  },
  {
    question: "What kind of movies do you like?",
    
    options: [
      { text: "Mystery solving", points: 0 },
      { text: "Adventure with fun", points: 2 },
      { text: "Rom-com", points: 4 }
    ]
  },
  {
    question: "Which personality suits you the most?",
    options: [
      { text: "Brave", points: 0 },
      { text: "Slay / Savage", points: 2 },
      { text: "Cutie pie", points: 5 },
      { text: "Funny", points: 3 }
    ]
  },
  {
    question: "Would you go on the villain's side sometimes?",
    options: [
      { text: "Yes", points: 0 },
      { text: "No", points: 1 }
    ]
  },
  {
    question: "If monsters appear in real life, what would you do?",
    options: [
      { text: "Fight or protect friends", points: 0 },
      { text: "Make jokes & calm others", points: 2 },
      { text: "Run for help", points: 4 }
    ]
  },
  {
    question: "What is your role in your group?",
    options: [
      { text: "Leader", points: 0 },
      { text: "Comedian", points: 3 },
      { text: "Quiet observer", points: 5 }
    ]
  },
  {
    question: "What scares you the most?",
    options: [
      { text: "losing control", points: 0 },
      { text: "losing people u love", points: 5 },
      { text: "being misunderstood", points: 1 },
      { text: "failing when it matters", points: 2 }
    ]
  },
  {
    question: "What is your intelligence?",
    options: [
      { text: "Nerdy", points: 50 },
      { text: "Practical", points: 0 },
      { text: "Medium", points: 3 }
    ]
  }
];
function showQuestion() {
  // Add the same background to the whole page
  document.body.classList.add("question-bg");

  // show question text
  document.getElementById("question").innerText =
    questions[currentQuestionIndex].question;
}

let currentQuestion = 0;
let totalScore = 0;
function startQuiz() {
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}
function loadQuestion() {
  document.body.classList.add("question-bg");
  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = function () {
      totalScore += option.points;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    };
    optionsDiv.appendChild(btn);
  });
}
function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let character = "";
  let bgImage = "default.jpg"; // fallback

  if (totalScore === 0) {
    character = "Henry";
    bgImage = "henry.png";
  }
  else if (totalScore <= 2) {
    character = "Hopper";
    bgImage = "hopper.png";
  }
  else if (totalScore <= 4) {
    character = "Eleven";
    bgImage = "eleven.png";
  }
  else if (totalScore <= 6) {
    character = "Nancy";
    bgImage = "nancy.png";
  }
  else if (totalScore <= 8) {
    character = "holly";
    bgImage = "holly.png";
  }
  else if (totalScore === 9) {
    character = "karen";
    bgImage = "karen.png";
  }
  
  else if (totalScore <= 13) {
    character = "Steve";
    bgImage = "steve.png";
  }
  else if (totalScore === 14) {
    character = "erica`";
    bgImage = "erica.png";
  }
  else if (totalScore === 15) {
    character = "robin";
    bgImage = "robin.png";
  }
  else if (totalScore <= 17) {
    character = "joyce";
    bgImage = "joyce.png";
  }
  else if (totalScore <= 19) {
    character = "mike";
    bgImage = "mike.png";
  }
  else if (totalScore ===20) {
    character = "lucas";
    bgImage = "lucas.png";
  }
  else if (totalScore ===21) {
    character = "max";
    bgImage = "max.png";
  }

  else if (totalScore <= 27) {
    character = "will";
    bgImage = "will.png";
  }
  else if (totalScore <= 49) {
    character = "alexie";
    bgImage = "alexie.png";
  }
  else {
    character = "Dustin";
    bgImage = "dustin.png";
  }

  //  CHANGE BACKGROUND
  document.body.style.backgroundImage = `url('${bgImage}')`;

  document.getElementById("character").innerText =
    "You are most like " + character;

  
}
