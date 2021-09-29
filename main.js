const questions = [
  {
    question: "Informatika atamasi qanday ma'noni bildiradi?",
    optionA: "Axborotlarni avtomatik qayta ishlash",
    optionB: "Printerlar uchun dastur tuzish",
    optionC: "Fermerlar uchun traktorlar ishlab chiqarish",
    optionD: "Hammasi to'g'ri",
    correctOption: "optionA",
  },

  {
    question: "Kompyuter nima ?",
    optionA:
      "Ma'lumotlar ni qayta ishlovchi universal raqamli hisoblash mashinasi",
    optionB: "Biror bir ishni bajarishga yordam beruvchi moslama",
    optionC: "Kalkulyator vazifasini bajaruvchi moslama",
    optionD: "Qog'oz chiqaruvchi qurilma",
    correctOption: "optionA",
  },

  {
    question: "Modem nima?",
    optionA: "ma’lumotlarni kompyuterga kiritishni yengillashtiradigan qurilma",
    optionB:
      " telefon tarmog’i orqali boshqa kompyuterlar bilan ma’lumotlar almashishni ta’minlaydigan qurilma",
    optionC: "ma’lumotlarni qog’ozga chiqarishni ta’minlaydigan qurilma",
    optionD: "xotiradagi ma’lumotlar almashuvini ta’minlaydigan qurilma",
    correctOption: "optionB",
  },
  {
    question: "Quyidagi qurilmalardan qaysi biri xotiralarga tegishli? ",
    optionA: "Printer",
    optionB: "Monitor",
    optionC: "Drayver",
    optionD: "Qattik disk",
    correctOption: "optionD",
  },
  {
    question: "Displey nima?",
    optionA: "ma’lumotlarni saqlovchi qurilma",
    optionB: "ma’lumotlarni qog’ozga bosib chiqaruvchi qurilma",
    optionC:
      "*kompyuter ning ish jarayonida vujudga keladigan axborotlarni ekranda yoritib berishni ta’minlaydigan qurilma",
    optionD: "fotoaparat",
    correctOption: "optionC",
  },
  {
    question: "Printer nima?",
    optionA:
      "Kompyuter dagi ma'lumotlarni qog'ozga chop etish uchun xizmat qiladigan qurilma",
    optionB: "Ma'lumotlarni diskdan kompyuterga kiritish qurilmasi",
    optionC: "Matnli va grafikli ma'lumot larni tasvirlovchi qurilma",
    optionD: "Selfi olish qurilmasi",
    correctOption: "optionA",
  },
  {
    question: "Kompyuter virusi nima?",
    optionA: "Selfi olish qurilmasi",
    optionB: "Matnli fayl",
    optionC: "Elektor toki orqali yuqadigan mikrob",
    optionD: "Kompyuter resurslariga zarar yetkazadigan maxsus yozilgan dastur",
    correctOption: "optionD",
  },
  {
    question: "Qaysi qatorda MS Office dasturlari ro’yxati berilgan?",
    optionA: "Opera, Google Chrome, Internet Exploler",
    optionB: "WordPad, Paint, DrWeb",
    optionC: "Kasperskiy, Avast, NOD32",
    optionD: "Word, Excel, Power Point",
    correctOption: "optionD",
  },
  {
    question:
      "Word dasturida faylni printerda chop qilish uchun qaysi  tugmachalar kombinatsiyasini ishlatish mumkin?",
    optionA: "Ctrl+A",
    optionB: "Ctrl+Shift",
    optionC: "Ctrl+P",
    optionD: "Ctrl+R",
    correctOption: "optionC",
  },
  {
    question: "Word dasturi nima uchun mo’ljallangan?",
    optionA: "matnli ma’lumotlarni qayta ishlaydigan dastur",
    optionB: "foto tasvirlarni qayta ishlaydigan dastur",
    optionC: "jadvalli ma’lumotlarni qayta ishlaydigan dastur",
    optionD: "ma’lumotlar omborini qayta ishlaydigan dastur",
    correctOption: "optionA",
  },
  {
    question:
      "Microsoft Wordda kiritilgan ma’lumotni diskka saqlab qo’yish tartibi to’g’ri keltirilgan qatorni tanlang.",
    optionA: "[Ctrl]+[F1] tugmachalar kombinat siyasi yordamida",
    optionB: " Fayl-Soxranit kak-Fayl nomi-Soxranit",
    optionC: "Tablitsa-Fayl nomi-Soxranit",
    optionD: "Pravka-Soxranit kak-Fayl nomi-Udalit",
    correctOption: "optionB",
  },
  {
    question:
      "Word yordamida yaratilgan hujjatlar odatda qanday kengaytma bilan saqlanadi?",
    optionA: ".doc",
    optionB: ".exe",
    optionC: ".jpg",
    optionD: ".png",
    correctOption: "optionA",
  },
  {
    question: "Microsoft Excel – bu:",
    optionA: "elektron pochta",
    optionB: "ma’lumotlar bazasi",
    optionC: "elektron jadval",
    optionD: "matn muxarriri",
    correctOption: "optionC",
  },
  {
    question: "EXCEL dasturi fayllarining kengaytmasi?",
    optionA: " .xls",
    optionB: ".jpg",
    optionC: ".png",
    optionD: ".bmp",
    correctOption: "optionA",
  },
  {
    question: "Excelda CРЗНАЧ(A5:A50) funksiyasi nimani hisoblaydi?",
    optionA:
      "A5 dan A50 gacha bo’lgan yacheykalardagi sonli qiymatlar ning  yig’indisini hisoblaydi",
    optionB:
      "A5 dan A50 gacha bo’lgan yacheykalardagi sonli qiymatlardan eng kattasini tanlaydi.",
    optionC:
      "A5 dan A50 gacha bo’lgan yacheykalardagi sonli qiymatlarning  ko’paytmasini hisoblaydi.",
    optionD:
      "A5 dan A50 gacha bo’lgan yacheykalardagi sonli qiymatlarning o’rtacha  qiymatini hisoblaydi",
    correctOption: "optionD",
  },
  {
    question: "Excelda СУММ(G1: G100) funksiyasi nimani hisoblaydi?",
    optionA:
      "G1 dan G100 gacha bo’lgan yacheykalardagi sonli qiymatlardan eng  kattasini tanlaydi",
    optionB:
      "G1 dan G100 gacha bo’lgan yacheykalardagi sonli qiymatlarning  ko’paytmasini hisoblaydi.",
    optionC:
      "G1 dan G100 gacha bo’lgan yacheykalardagi sonli qiymatlarning yig’indisini hisoblaydi.",
    optionD:
      "G1 dan G100 gacha bo’lgan yacheykalardagi sonli qiymatlar dan eng  kichigini tanlaydi.",
    correctOption: "optionC",
  },
  {
    question:
      "Kompyuterni telefon tarmog’i orqali Internetga bog’lash uchun qanday qurilma zarur?",
    optionA: "Modem",
    optionB: "Printer",
    optionC: "Skaner",
    optionD: "Diskovod",
    correctOption: "optionA",
  },
  {
    question: "Internet tarmog'i nima?",
    optionA:
      "Butun dunyo bo'ylab kompyuterlarni o'zaro axborot almashinuvini ta'minlovchi qurilmalar va dasturlar majmui",
    optionB:
      "Bir korxona yoki tashkilot ning bir nechta alohida tarmoqlarini birlashtiruv chi qurilmalar va dasturlar majmui",
    optionC:
      "Bir binoda yoki bir-biriga yaqin binolarda joylashgan kompyuter larni o'zaro axborot almashinuvini ta'minlovchi qurilmalar va dasturlar majmui",
    optionD:
      "Bir shahar yoki viloyatdagi kompyuterlar ni o'zaro axborot almashinuvini ta'minlovchi qurilmalar va dasturlar majmui",
    correctOption: "optionA",
  },
  {
    question: "Elektron pochta (e-mail)  ...   jo'natish imkonini beradi.",
    optionA: "Posilkalarni",
    optionB: "Xabarlar va unga ilova qilinadigan fayllarni",
    optionC: "Faqat xabarlarni",
    optionD: "Faqat qog'ozlarni",
    correctOption: "optionB",
  },
  {
    question: "Printer nima?",
    optionA: "Ma'lumotlarni qog'ozga chiqarish qurilmasi",
    optionB: "Ma'lumotlarni telefon orqali jo'natish",
    optionC: "Selfi tushish qurilmasi",
    optionD: "Xaroratni o'lchaydigan qurilma",
    correctOption: "optionA",
  },
];

let shuffledQuestions = []; //empty array to hold shuffled selected questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = questionNumber;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  //delays next question displaying for a second
  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= 3) {
    remark = "Qoniqarsiz, Ko'proq bilim olishga harakat qiling.";
    remarkColor = "red";
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = "Yaxshi, lekin Siz yanada ko'prog'iga loyiqsiz.";
    remarkColor = "orange";
  } else if (playerScore >= 7) {
    remark = "Ajoyib, izlanishdan to'xtamang.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / 10) * 100;

  //data to display to score board
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
