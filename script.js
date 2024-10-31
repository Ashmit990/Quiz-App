const progFillInTheBlanks = [
    {
      question: "1. In JavaScript, a function defined inside an object is called a _______.",
      answer: "method"
    },
    {
      question: "2. In HTML, the _______ tag is used to create a hyperlink.",
      answer: "a"
    },
    {
      question: "3. In CSS, the _______ property is used to change the text color.",
      answer: "color"
    },
    {
      question: "4. In Python, lists are created using _______ brackets.",
      answer: "square"
    },
    {
      question: "5. In Java, every program starts with the _______ method.",
      answer: "main"
    },
    {
      question: "6. In SQL, the _______ statement is used to extract data from a database.",
      answer: "SELECT"
    },
    {
      question: "7. In C++, the _______ operator is used to access members of a class through a pointer.",
      answer: "->"
    },
    {
      question: "8. In JavaScript, _______ is used to declare variables that can be reassigned later.",
      answer: "let"
    },
    {
      question: "9. In Python, the _______ keyword is used to define a function.",
      answer: "def"
    },
    {
      question: "10. In CSS, the _______ property is used to change the background color of an element.",
      answer: "background-color"
    }
  ];

  const sportsFillInTheBlanks = [
    {
      question: "1. In basketball, the line that separates the two halves of the court is called the _______ line.",
      answer: "half-court"
    },
    {
      question: "2. In soccer, a _______ kick is awarded when the ball is kicked out of bounds over the goal line by a defending player.",
      answer: "corner"
    },
    {
      question: "3. In cricket, a player who delivers the ball to the batsman is called a _______.",
      answer: "bowler"
    },
    {
      question: "4. In tennis, a score of zero is referred to as _______.",
      answer: "love"
    },
    {
      question: "5. In baseball, a _______ is a defensive play where two offensive players are put out as a result of one continuous action.",
      answer: "double play"
    },
    {
      question: "6. In American football, the player who throws the ball to the receiver is known as the _______.",
      answer: "quarterback"
    },
    {
      question: "7. In swimming, the stroke where the swimmer's arms move in a windmill-like motion is called the _______ stroke.",
      answer: "freestyle"
    },
    {
      question: "8. In golf, the term used for completing a hole in one stroke under par is called a _______.",
      answer: "birdie"
    },
    {
      question: "9. In basketball, when a player grabs the ball after a missed shot, it’s called a _______.",
      answer: "rebound"
    },
    {
      question: "10. In hockey, the area in front of the goal where the goalie stands is known as the _______.",
      answer: "crease"
    }
  ];

  const generalKnowledgeFillInTheBlanks = [
    {
      question: "1. The capital city of France is _______.",
      answer: "Paris"
    },
    {
      question: "2. The process by which plants make their food using sunlight is called _______.",
      answer: "photosynthesis"
    },
    {
      question: "3. The Great Wall of China was primarily built to protect against invasions from _______.",
      answer: "Mongols"
    },
    {
      question: "4. The largest planet in our solar system is _______.",
      answer: "Jupiter"
    },
    {
      question: "5. The longest river in the world is the _______.",
      answer: "Nile"
    },
    {
      question: "6. The author of the book 'Harry Potter' is _______.",
      answer: "J.K. Rowling"
    },
    {
      question: "7. The largest mammal on Earth is the _______.",
      answer: "blue whale"
    },
    {
      question: "8. The chemical symbol for water is _______.",
      answer: "H2O"
    },
    {
      question: "9. The smallest country in the world by area is _______.",
      answer: "Vatican City"
    },
    {
      question: "10. The number of continents in the world is _______.",
      answer: "seven"
    }
  ];
  
  

  const progMcqQuestions = [
    {
      question: "1. What is the correct way to declare a JavaScript variable?",
      options: ["variable myVar", "var myVar", "v myVar", "myVar var"],
      answer: "var myVar"
    },
    {
      question: "2. Which built-in method can be used to convert a string to uppercase in JavaScript?",
      options: ["toUpper()", "upperCase()", "toUpperCase()", "makeUpperCase()"],
      answer: "toUpperCase()"
    },
    {
      question: "3. How do you write a comment in JavaScript?",
      options: ["// This is a comment", "<!-- This is a comment -->", "'This is a comment", "** This is a comment **"],
      answer: "// This is a comment"
    },
    {
      question: "4. Which event occurs when the user clicks on an HTML element?",
      options: ["onmouseover", "onchange", "onmouseclick", "onclick"],
      answer: "onclick"
    },
    {
      question: "5. What does 'NaN' stand for in JavaScript?",
      options: ["Not a Number", "Negative a Number", "No Available Number", "New Abstract Number"],
      answer: "Not a Number"
    },
    {
      question: "6. Which JavaScript keyword is used to declare a constant?",
      options: ["var", "let", "constant", "const"],
      answer: "const"
    },
    {
      question: "7. What does the 'this' keyword refer to in JavaScript?",
      options: ["The function in which it is used", "The global object", "The current object or context", "The variable called 'this'"],
      answer: "The current object or context"
    },
    {
      question: "8. How do you write a function in JavaScript?",
      options: ["function = myFunction()", "function myFunction()", "myFunction():function", "myFunction = function()"],
      answer: "function myFunction()"
    },
    {
      question: "9. Which operator is used to assign a value to a variable in JavaScript?",
      options: ["=", "==", "===", ":"],
      answer: "="
    },
    {
      question: "10. Which method can be used to find HTML elements by ID in JavaScript?",
      options: ["getElementByTag()", "getElementByClass()", "getElementById()", "findById()"],
      answer: "getElementById()"
    }
  ];

  const sportsMcqQuestions = [
    {
      question: "1. How many players are there in a soccer team on the field?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "2. Which sport is often referred to as 'The King of Sports'?",
      options: ["Basketball", "Tennis", "Football", "Cricket"],
      answer: "Football"
    },
    {
      question: "3. How many points is a touchdown worth in American football?",
      options: ["3", "5", "6", "7"],
      answer: "6"
    },
    {
      question: "4. In cricket, what is the term for dismissing a batsman without scoring any runs?",
      options: ["Golden Duck", "No Score", "Zero Run", "Bowled Out"],
      answer: "Golden Duck"
    },
    {
      question: "5. Which of the following sports uses a racket to hit a shuttlecock?",
      options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
      answer: "Badminton"
    },
    {
      question: "6. What is the duration of a standard professional basketball game in the NBA?",
      options: ["48 minutes", "60 minutes", "90 minutes", "45 minutes"],
      answer: "48 minutes"
    },
    {
      question: "7. How many Grand Slam tournaments are there in a calendar year for tennis?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "8. In which sport would you perform a 'slam dunk'?",
      options: ["Basketball", "Volleyball", "Handball", "Football"],
      answer: "Basketball"
    },
    {
      question: "9. What is the main objective in the game of golf?",
      options: ["To hit the ball as far as possible", "To get the ball into the hole in the fewest strokes", "To score goals", "To avoid water hazards"],
      answer: "To get the ball into the hole in the fewest strokes"
    },
    {
      question: "10. In which sport is the term 'hat-trick' commonly used?",
      options: ["Tennis", "Baseball", "Cricket", "Hockey"],
      answer: "Cricket"
    }
  ];

  const generalKnowledgeMcqQuestions = [
    {
      question: "1. What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "2. Who is known as the 'Father of Computers'?",
      options: ["Alan Turing", "Charles Babbage", "Thomas Edison", "Nikola Tesla"],
      answer: "Charles Babbage"
    },
    {
      question: "3. What is the capital of Japan?",
      options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
      answer: "Tokyo"
    },
    {
      question: "4. Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Mark Twain", "Leo Tolstoy", "Charles Dickens"],
      answer: "William Shakespeare"
    },
    {
      question: "5. What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond"
    },
    {
      question: "6. Which ocean is the largest in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "7. What is the smallest continent by land area?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia"
    },
    {
      question: "8. Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "James Watt", "Isaac Newton"],
      answer: "Alexander Graham Bell"
    },
    {
      question: "9. Which element has the chemical symbol 'O'?",
      options: ["Osmium", "Oxygen", "Oganesson", "Ozone"],
      answer: "Oxygen"
    },
    {
      question: "10. What is the largest desert in the world?",
      options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
      answer: "Antarctic Desert"
    }
  ];
  
  

  const progTrueFalseQuestions = [
    {
      question: "1. JavaScript is a case-sensitive language.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "2. The '==' operator checks for both value and type equality in JavaScript.",
      options: ["True", "False"],
      answer: "False"
    },
    {
      question: "3. JavaScript can be used to change the HTML content of a webpage.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "4. The 'parseInt()' function in JavaScript can convert a string to an integer.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "5. In JavaScript, arrays can hold different types of data like numbers, strings, and objects.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "6. The 'null' value in JavaScript is considered equal to 'undefined' using the '===' operator.",
      options: ["True", "False"],
      answer: "False"
    },
    {
      question: "7. JavaScript is a strongly typed language.",
      options: ["True", "False"],
      answer: "False"
    },
    {
      question: "8. The 'forEach()' method can be used to iterate over an array in JavaScript.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "9. JavaScript functions can accept an unlimited number of parameters.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "10. JavaScript does not support object-oriented programming concepts.",
      options: ["True", "False"],
      answer: "False"
    }
];

const sportsTrueFalseQuestions = [
  {
    question: "1. In soccer, a standard match consists of two halves of 45 minutes each.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "2. A cricket team consists of 12 players on the field at any given time.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "3. The Olympic Games are held every four years.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "4. In basketball, a free throw is worth 3 points.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "5. The Wimbledon Championship is a tennis tournament held in the United Kingdom.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "6. In American football, the quarterback is the player responsible for throwing the ball.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "7. In badminton, the shuttlecock is also called a 'birdie'.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "8. The FIFA World Cup is held every 6 years.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "9. In baseball, a home run occurs when the batter hits the ball out of the field and circles all bases to score a run.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "10. A marathon race is 21 kilometers long.",
    options: ["True", "False"],
    answer: "False"
  }
];

const generalKnowledgeTrueFalseQuestions = [
  {
    question: "1. The Great Wall of China is visible from space.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "2. The Earth revolves around the Sun in about 365 days.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "3. The capital city of Australia is Sydney.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "4. Humans have a total of 206 bones in their body.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "5. The chemical symbol for gold is Au.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "6. Mount Everest is the tallest mountain in the world.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "7. The Amazon River is the longest river in the world.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "8. Lightning never strikes the same place twice.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "9. Water boils at 100 degrees Celsius at sea level.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "10. The human heart has four chambers.",
    options: ["True", "False"],
    answer: "True"
  }
];



  
  
  const fillInTheBlanks=document.querySelector(".fillintheblanks-display");
  const multipleChoiceQue=document.querySelector(".mcq-display")
  const queDisplay=document.querySelector(".question-display");
  const resultDisplay=document.querySelector(".result-display");
  const topicDisplay=document.querySelector(".topic-display");
  const nextBtn=document.querySelector(".next");
  const startBtn=document.querySelector(".start");
  const popUp=document.querySelector(".popup");
  const display=document.querySelector(".gameDisplay")
  const otherType=document.querySelector(".playOther")
  const gameOverDisplay=document.querySelector(".gameOver-display")
  const score=document.querySelector(".score")
  const queType=document.querySelector(".q-type")
  const queTopic=document.querySelector(".q-topic")
  const mcqNext=document.querySelector(".mcqNext");
  const tfDisplay=document.querySelector(".tf-display")
  const tfNext=document.querySelector(".tfNext")
  const Title=document.querySelector(".title")
  const queMcq=document.querySelector("#queMcq")
  
  let gameSelected=false

  
  
  let currentQuestionIndex=0; 
  let correctCountFb=0;
  let incorrectCountFb=0;
  let correctMcq=0
  let incorrectMcq=0
  correctTf=0
  incorrectTf=0
  let currentQuestion=[];

  function loadQueType(){
    const topicSelection=document.querySelector(".topic-format")
  const selectedTopic=topicSelection.value
    
    var selection=document.querySelector(".type-format")
    var selectedType=selection.value;
    if(selectedType==="Fill in the blanks"&&selectedTopic==="Programming"){
        fillInTheBlanks.style.display="grid"//display the layout of fill in the blanks
        popUp.style.display="none"
        currentQuestion=progFillInTheBlanks
        loadFillInTheBlanks();//loads fill in the blank question
    }else if(selectedType==="Multiple Choice"&&selectedTopic==="Programming"){
      multipleChoiceQue.style.display="flex"//display the layout of MCQ
      currentQuestion=progMcqQuestions
      popUp.style.display="none"
        loadMcqQue();

    }
    else if(selectedType==="True or False"&&selectedTopic==="Programming") {
       tfDisplay.style.display="flex"
       currentQuestion=progTrueFalseQuestions
       popUp.style.display="none"
       loadTfQue()
    }else if(selectedType==="Fill in the blanks"&&selectedTopic==="Sports"){
      currentQuestion=sportsFillInTheBlanks
      fillInTheBlanks.style.display="grid"//display the layout of fill in the blanks
        popUp.style.display="none"
        loadFillInTheBlanks()
    }else if(selectedType==="Multiple Choice"&&selectedTopic==="Sports"){
      multipleChoiceQue.style.display="flex"//display the layout of MCQ
      currentQuestion=sportsMcqQuestions
      popUp.style.display="none"
        loadMcqQue();

    }else if(selectedType==="True or False"&&selectedTopic==="Sports") {
      tfDisplay.style.display="flex"
      currentQuestion=sportsTrueFalseQuestions
      popUp.style.display="none"
      loadTfQue()
   }else if(selectedType==="Fill in the blanks"&&selectedTopic==="General Knowledge"){
    currentQuestion=generalKnowledgeFillInTheBlanks
    fillInTheBlanks.style.display="grid"//display the layout of fill in the blanks
      popUp.style.display="none"
      loadFillInTheBlanks()
  }else if(selectedType==="Multiple Choice"&&selectedTopic==="General Knowledge"){
    multipleChoiceQue.style.display="flex"//display the layout of MCQ
    currentQuestion=generalKnowledgeMcqQuestions
    popUp.style.display="none"
      loadMcqQue();
  }
  else if(selectedType==="True or False"&&selectedTopic==="General Knowledge") {
    tfDisplay.style.display="flex"
    currentQuestion=generalKnowledgeTrueFalseQuestions
    popUp.style.display="none"
    loadTfQue()
 }
  }

function loadFillInTheBlanks(){
  const topicSelection=document.querySelector(".topic-format")
  const selectedTopic=topicSelection.value
  const fbDisplay=document.querySelector("#fbDisplay")
  if(selectedTopic==="Programming"){
    fbDisplay.innerHTML="Fill in the blanks - Programming"
  }else if(selectedTopic==="Sports"){
    fbDisplay.innerHTML="Fill in the blanks - Sports"
  }else{
    fbDisplay.innerHTML="Fill in the blanks - GK"
  }

  const fbQuestions=document.querySelector("#queFb")
  const fbResults=document.querySelector("#resultFb")

  loadFbQue=currentQuestion[currentQuestionIndex].question;//tis loads current question index's question
  const fbQueInput=loadFbQue.replace('_______','<input type="text" id="user-answer" autocomplete="off" class="answers" >')//this replace blank space with input field so that user can input their answers
  fbQuestions.innerHTML=fbQueInput
  fbResults.innerHTML=" "//make the result container empty intially
  
}
function loadMcqQue(){
  const topicSelection=document.querySelector(".topic-format")
  const selectedTopic=topicSelection.value
  const queTopic=document.querySelector("#queTopic")
  if(selectedTopic==="Programming"){
    queTopic.innerHTML="Multiple Choice Questions - Programming"
  }else if(selectedTopic==="Sports"){
    queTopic.innerHTML="Multiple Choice Questions - Sports"
  }else{
    queTopic.innerHTML="Multiple Choice Questions - GK"
  }
  
  const queIndex=currentQuestion[currentQuestionIndex]
  let queBox=document.querySelector("#queMcq")
  queBox.textContent=queIndex.question
  let options=document.querySelectorAll(".options")
  options.forEach((opt)=>{
    opt.style.backgroundColor=""
    opt.style.pointerEvents="auto"
  })
  gameSelected = false;

  queIndex.options.forEach((opt,index)=>{
    options[index].textContent=opt
  })

  options.forEach((opt)=>{
    opt.addEventListener("click",checkMcqQue)
  })
}

function loadTfQue(){
  const topicSelection=document.querySelector(".topic-format")
  const selectedTopic=topicSelection.value
  const tfTopic=document.querySelector("#tfTopic")
  if(selectedTopic==="Programming"){
    tfTopic.innerHTML="True or False - Programming"
  }else if(selectedTopic==="Sports"){
    tfTopic.innerHTML="True or False - Sports"
  }else{
    tfTopic.innerHTML="True or False - GK"
  }
  const tfIndex=currentQuestion[currentQuestionIndex]
  let tfBox=document.querySelector("#queTf")
  tfBox.textContent=tfIndex.question
  let options=document.querySelectorAll(".options-tf")
  options.forEach((opt)=>{
    opt.style.backgroundColor=""
    opt.style.pointerEvents="auto"
  })
  gameSelected = false;
  tfIndex.options.forEach((opTf,index)=>{
    options[index].textContent=opTf
  })
  options.forEach((opt)=>{
    opt.addEventListener("click",checkTfQue)
  })
}

function checkTfQue(e){
  const selectedDiv=e.target.textContent
  const tfIndex=currentQuestion[currentQuestionIndex]
  let options=document.querySelectorAll(".options-tf")
  const correctDiv=tfIndex.answer
  if(selectedDiv===correctDiv){
     correctTf++
     e.target.style.backgroundColor="#22782C"
     gameSelected=true;
  }else{
    incorrectTf++
    e.target.style.backgroundColor="red"
    gameSelected=true
  }
  options.forEach((opt)=>{
    opt.style.pointerEvents="none"
  })
}

function checkMcqQue(e){
  const selectedAns=e.target.textContent
  const queIndex=currentQuestion[currentQuestionIndex]
  let options=document.querySelectorAll(".options")
  const correctAns=queIndex.answer
  if(selectedAns===correctAns){
    correctMcq++
    e.target.style.backgroundColor="#22782C"
    gameSelected=true
    
  }else{
    incorrectMcq++
    e.target.style.backgroundColor="red"
    gameSelected=true
    
    options.forEach((opt)=>{
      if(opt.textContent===correctAns){
        opt.style.backgroundColor="#22782C"

      }
    })

  }
  options.forEach((opt)=>{
    opt.style.pointerEvents="none"
  })

}


function checkFbAns(){
  const ansInput=document.querySelector("#user-answer");
  const fbResults=document.querySelector("#resultFb")
  const fbAns=currentQuestion[currentQuestionIndex].answer.toLowerCase()
  const userAns=ansInput.value.trim().toLowerCase();
  
  if(fbAns===userAns){
    fbResults.innerHTML="Correct Ans !"
    fbResults.style.color="#02FF20"
    correctCountFb++
  }else{
    fbResults.innerHTML=`Incorrect Ans ! correct is "${fbAns}"`
    fbResults.style.color="red"
    incorrectCountFb++
  }

}



nextBtn.addEventListener("click",()=>{
    const ansInput=document.querySelector("#user-answer");
    const userAns=ansInput.value.trim().toLowerCase();
  if(userAns){
    checkFbAns()
    if(currentQuestionIndex<currentQuestion.length-1){
      currentQuestionIndex++
      
        setTimeout(loadFillInTheBlanks,1500) 
      
    }else{
      setTimeout(() => {
        const display=document.querySelector(".gameDisplay")
        display.style.display="none"
        gameOverDisplay.style.display="flex"
        gameOverDisplay.style.margin="10px auto"
        if (correctCountFb <= 4) {
          return score.innerHTML=`You scored ${correctCountFb}/${currentQuestion.length}. This quiz was quite challenging.`;
      } else if (correctCountFb <= 7) {
          return score.innerHTML=`You scored ${correctCountFb}/${currentQuestion.length}. Great job! You have a good understanding of the material.`;
      } else {
          return score.innerHTML=`Bravo! You scored ${correctCountFb}/${currentQuestion.length}. You have an excellent understanding of the material.`;
      }
        
    
      }, 2000);
      
    }
  }else{
    alert("plz fill in the blanks !")
    return 
}
})
mcqNext.addEventListener("click", () => {
  const options = document.querySelectorAll(".options");
  if(gameSelected){
    currentQuestionIndex++
    if(currentQuestionIndex<currentQuestion.length){
      loadMcqQue()
    }else{
      setTimeout(() => {
        multipleChoiceQue.style.display="none"
        gameOverDisplay.style.display="flex"
        gameOverDisplay.style.margin="10px auto"
        if (correctMcq <= 4) {
          return score.innerHTML=`You scored ${correctMcq}/${currentQuestion.length}. This quiz was quite challenging.`;
      } else if (correctMcq <= 7) {
          return score.innerHTML=`You scored ${correctMcq}/${currentQuestion.length}. Great job! You have a good understanding of the material.`;
      } else {
          return score.innerHTML=`Bravo! You scored ${correctMcq}/${currentQuestion.length}. You have an excellent understanding of the material.`;
      }
        
    
      }, 500);
    }
  }else{
    alert("please select your answer")
  }
 
});
tfNext.addEventListener("click",()=>{
  
  if(gameSelected){
    currentQuestionIndex++
    if(currentQuestionIndex<currentQuestion.length){
      loadTfQue()
    }else{
      setTimeout(() => {
        tfDisplay.style.display="none"
        gameOverDisplay.style.display="flex"
        gameOverDisplay.style.margin="10px auto"
        if (correctTf <= 4) {
          return score.innerHTML=`You scored ${correctTf}/${currentQuestion.length}. This quiz was quite challenging.`;
      } else if (correctTf <= 7) {
          return score.innerHTML=`You scored ${correctTf}/${currentQuestion.length}. Great job! You have a good understanding of the material.`;
      } else {
          return score.innerHTML=`Bravo! You scored ${correctTf}/${currentQuestion.length}. You have an excellent understanding of the material.`;
      }
        
        
    
      }, 500);
    }
  }else{
    alert("please select your answer")
  }
})


startBtn.addEventListener("click",()=>{
  const queType=document.querySelector(".q-type")
  const queTopic=document.querySelector(".q-topic")
  display.style.margin="5px auto"
  queType.style.display="none"
  queTopic.style.display="none"
  
  loadQueType()
})
otherType.addEventListener("click",()=>{
  queType.style.display="flex"
  queTopic.style.display="flex"
  popUp.style.display="flex"
  display.style.display="none"
  gameOverDisplay.style.display="none"
  currentQuestionIndex=0
})


const toggleBtn=document.querySelector("#toggle")
const circle=document.querySelector(".moon")
const icon=document.querySelector("#image")
const arrowIcon=document.querySelector(".arrow")
const arrow2=document.querySelector("#arrow2")
const questionType=document.querySelector(".type")
const questionTopic=document.querySelector(".topic-type")
const questionFormat=document.querySelector(".topic-format")
const questionTypeFormat=document.querySelector(".type-format")
const miniTitle=document.querySelector(".mini-title")
const popupBox=document.querySelector(".popup")
const strut=document.querySelector(".start")
const ansInput=document.querySelector(".answers");
const questionBox=document.querySelector(".questionBox")
const tfTopic=document.querySelector("#tfTopic")
const tfQueBox=document.querySelector(".tf-questionBox")
const queTopicc=document.querySelector("#queTopic")
const queFb=document.querySelector("#queFb")




toggleBtn.addEventListener("click",function(){
  toggleBtn.classList.toggle("white");
  circle.classList.toggle("move-right");
  Title.classList.toggle("whtTxt")
  

  if(toggleBtn.classList.contains("white")){
    circle.style.backgroundColor="#FFFFFF"
    icon.src="Frame 6.png"
    toggleBtn.style.border="2px solid black"
    document.body.style.backgroundColor="#CCCDD7"
    arrowIcon.src="Arrow Down 5.png"
    arrow2.src="Arrow Down 5.png"
    questionType.style.backgroundColor="#939FAB"
    questionType.style.color="#410809"
    questionTopic.style.backgroundColor="#939FAB"
    questionTopic.style.color="#410809" 
    questionFormat.style.backgroundColor="#939FAB"
    questionFormat.style.color="#410809"  
    questionTypeFormat.style.backgroundColor="#939FAB"
    questionTypeFormat.style.color="#410809"  
    miniTitle.style.color="#0E2A27"   
    popupBox.style.backgroundColor="#939FAB"  
    strut.style.backgroundColor="#CAC3C3" 
    strut.style.color="#4C0E4F"
    fillInTheBlanks.style.backgroundColor="#939FAB"
    queFb.style.color="black"
    topicDisplay.style.color="black"
    nextBtn.style.backgroundColor="#CAC3C3"
    nextBtn.style.color="#4C0E4F"
    resultDisplay.style.color="#257E0C"
    gameOverDisplay.style.backgroundColor="#939FAB"
    gameOverDisplay.style.color="black"
    otherType.style.backgroundColor="#CAC3C3"
    otherType.style.color="#4C0E4F"
    multipleChoiceQue.style.backgroundColor="#939FAB"
    queMcq.style.color="black"
    
    mcqNext.style.backgroundColor="#CAC3C3"
    mcqNext.style.color="black"
    tfDisplay.style.backgroundColor="#939FAB"
    tfTopic.style.color="black"
    
    tfQueBox.style.color="black"
    tfNext.style.backgroundColor="#CAC3C3"
    tfNext.style.color="black"
    topicDisplay.style.color="black"
    queTopicc.style.color="black"

    

    
    
    
    
  }
  else{
    circle.style.backgroundColor="#1A2C4E"
    icon.src="Vector.png"
    toggleBtn.style.border="2px solid white"
    document.body.style.backgroundColor="#010A1A"
    arrowIcon.src="Arrow Down 6.png"
    arrow2.src="Arrow Down 6.png"
    questionType.style.backgroundColor="#1D2E38"
    questionType.style.color="#FBFF00"
    questionTopic.style.backgroundColor="#1D2E38"
    questionTopic.style.color="#FBFF00"
    questionTypeFormat.style.backgroundColor="#1D2E38"
    questionTypeFormat.style.color="#FBFF00"
    questionFormat.style.backgroundColor="#1D2E38"
    questionFormat.style.color="#FBFF00"
    miniTitle.style.color="#00FFE1"
    popupBox.style.backgroundColor="#1D2E38"
    strut.style.backgroundColor="#444846" 
    strut.style.color="#FF910A"
    fillInTheBlanks.style.backgroundColor="#1D2E38"
    queDisplay.style.color="white"
    nextBtn.style.backgroundColor="#444846"
    nextBtn.style.color="#FF910A"
    gameOverDisplay.style.backgroundColor="#1D2E38"
    gameOverDisplay.style.color="white"
    otherType.style.backgroundColor="#444846"
    otherType.style.color="#FF910A"
    multipleChoiceQue.style.backgroundColor="#1D2E38"
    queMcq.style.color="white"
    
    mcqNext.style.backgroundColor="#444846"
    mcqNext.style.color="#FF910A"
    tfDisplay.style.backgroundColor="#1D2E38"
    tfTopic.style.color="white"
    
    tfQueBox.style.color="white"
    tfNext.style.backgroundColor="#444846"
    tfNext.style.color="#FF910A"
    topicDisplay.style.color="white"
    queTopicc.style.color="white"
    
  }
})

  
  