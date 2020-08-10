
var Correct = document.getElementById("correct")
var getCorrect = sessionStorage.getItem("Correct")

Correct.innerHTML = getCorrect


var pt = document.getElementById("Pt")
let getPoints = sessionStorage.getItem("score") 

pt.innerHTML = getPoints

var remark = document.getElementById("remarks")
if(getPoints >= 20){
    remarks.innerHTML = "Congratulation"
}else{
    remarks.innerHTML = "Need More Practice"
}

var percentage = document.getElementById("per")
var per = (getPoints/40) * 100;

percentage.innerHTML = per + "%"