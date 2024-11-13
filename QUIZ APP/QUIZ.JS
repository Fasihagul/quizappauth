



var questions = [
    {
      question: "Q1: HTML Stands for?",
      options: ["Hyper Text Markup Language",
       "Hyper Tech Markup Language",
      "Hyper Touch Markup Language",],
      corrAnswer: "Hyper Text Markup Language",
    },
    
    {
      question: "Which tag is used for most large heading",
      options: ["h6",
      "h2",
       "h1"],
      corrAnswer: "h1",
    },
    {
      question: "Which tag is used to make element unique ",
      options:["id",
     "class  ",
      "label"],
      corrAnswer: "id",
    },
    
    
    {
      question: "toFixed() is used to define length of decimal ",
      options:["True",
     "False",
       "None of above"],
      corrAnswer: "True",
    },
    {
      question: "push() method is used to add element in the start of array ",
      options: ["True",
    "False",
      "None of above"],
      corrAnswer: "False",
    },
   ];

   var currentquestion =document.getElementById("currentquestion")
   var  totalquestion =document.getElementById("totalquestion")
   var  question =document.getElementById("question")
   var answerparent =document.getElementById("answerparent")


   var indexnum= 0
var score = 0

function renderquestion (){
currentquestion.innerHTML=indexnum + 1
totalquestion.innerHTML=questions.length


var obj=questions[indexnum]
question.innerHTML=obj.question

answerparent.innerHTML=''

for(var i=0;i<obj.options.length;i++){
answerparent.innerHTML += `   <div class="col-md-4" >
<div  class="py-2">

<button  onclick="cheakquestion('${obj.options[i]}','${obj.corrAnswer}')"  class="btn btn-danger fs-4 rounded-pill w-100">
${obj.options[i]}
</button>
</div>
    </div>`

}


}
renderquestion()

function   nextquestion ()
{
  indexnum++
  renderquestion()
}



   function cheakquestion(a,b)
   {
    if(a == b){
      score++
      console.log(score)
    }
    nextquestion ()
   }
























































  // var button = document.getElementById("btn");
  // var question = document.getElementById("ques");
  // var option1 = document.getElementById("opt1");
  // var option2 = document.getElementById("opt2");
  // var option3 = document.getElementById("opt3");
  // var index = 0;
  // var score = 0;
  // var sec = 59;
  // var min = 1;
  
  // var timerElement = document.getElementById("timer");
  
  // function timer() {
  //   timerElement.innerText = `${min}:${sec}`;
  //   sec--;
  //   if (sec < 0) {
  //     min--;
  //     sec = 59;
  
  //     if (min < 0) {
  //       min = 1;
  //       sec = 59;
  //       nextQuestion();
  //     }
  //   }
  // }
  
  // setInterval(timer, 100);
  
  // function nextQuestion() {
  //   var options = document.getElementsByClassName("options");
  
  //   for (var i = 0; i < options.length; i++) {
  //     if (options[i].checked) {
  //       var selectedOption = options[i].value;
  //       var getOption = questions[index - 1][`option${selectedOption}`];
  //       var corrAnswer = questions[index - 1]["corrAnswer"];
  
  //       if (getOption === corrAnswer) {
  //         score++;
  //       }
  
  //       console.log(getOption);
  //     }
  
  //     options[i].checked = false;
  //   }
  //   button.disabled = true;
  
  //   if (index > questions.length - 1) {
  //     Swal.fire({
  //       title: "Good job!",
  //       text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
  //       icon: "success",
  //     });
  //   } else {
  //     question.innerText = questions[index].question;
  //     option1.innerText = questions[index].option1;
  //     option2.innerText = questions[index].option2;
  //     option3.innerText = questions[index].option3;
  //     index++;
  //   }
  // }
  
  // function clicked() {
  //   button.disabled = false;
  // }
