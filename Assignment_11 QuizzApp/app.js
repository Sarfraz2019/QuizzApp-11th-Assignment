// question here
var questionsArray = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
         "James Gosling",
        "Steve Jobs",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

}

];


function showQuestion(e){
    //show question
    var questionElement = document.getElementById("qustionElement")
    questionElement.innerHTML = questionsArray[e].question;

    //show option
    var optionElement = document.getElementsByClassName("optionElement")
    for(var i=0; i < optionElement.length ; i++){
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
   
}

var questionCount = 0;
var score = 0
var c=0;

function nextQuestion(){
    
  
        var nextBtn = document.getElementById("nextBtn")
     validate(questionCount)
    questionCount++;

    if (questionCount == 4 ) {
        // stop()
        location.href = "end.html"
        return;
    }
       showQuestion(questionCount)
    removeActiveClass()
}

function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active")
    // validate(questionCount)

}

function removeActiveClass(){
    var active = document.getElementsByClassName("active")
    for(var i=0; i<active.length ; i++){
        active[i].classList.remove("active")
    }

}

function validate(e){
    // var active = document.getElementsByClassName("active")[0]
    if(document.getElementsByClassName("active")[0].innerHTML == questionsArray[e].answer){
        score += 10
        c++;
        sessionStorage.setItem("Correct", c)
        sessionStorage.setItem("score", score)
        var point = document.getElementById("score")
         point.innerHTML = score
    }
}