let quizQuestions = [{

    question: "What is HTML?",
    A: "Huge Markup Language",
    B: "A Web site",
    C: "Hypertext Markup Language",
    D: "Hypertext Markdown Language", 
    answer: "Hypertext Markup Language"
  },
  {
    question: "What does CSS stand for?",
    A: "Cascading Style Sheets",
    B: "Creative Style Sheets",
    C: "Custom Style Sheets",
    D: "Crazy Style Sheets"
  },
  {
    question: "What is Bootstrap?",
    A: "An informational web page",
    B: "Text editor",
    C: "My favorite pirate",
    D: "Open source toolkit"
  }
];

// let correctRes = ["Hypertext Markup Language", "Hypertext Markup Language", "Open source toolkit"];
let arrResponse = [];

// global function for changing the question index
function questions(question, ans1, ans2, ans3, ans4) { //Display the first questions & 4 possible Answer
  $("#question").text(question);
  $("#aBtn").text(ans1);
  $("#bBtn").text(ans2);
  $("#cBtn").text(ans3);
  $("#dBtn").text(ans4);
}
var questionIndex = 0;

$(document).ready(function () {

  let time = 10;
  let timeleft = time;
  let correctRes = 0;

  $(".respBtn").hide(); //hide Answer butto at start
  // listen to click and send responce to new array

  $(".respBtn").on("click", function () {
    var btnClicked = $(this).text();
    arrResponse.push(btnClicked);
    console.log('arrResponse ' + arrResponse);
    questionIndex++;
    if (questionIndex == quizQuestions.length) {

      $(".respBtn").hide();
      $("#question").text('Done');
      return;
    }
    
    // console.log(questionIndex);

    questions( //send params to questions function
      quizQuestions[questionIndex].question, //qElemInd
      quizQuestions[questionIndex].A, //aElemInd
      quizQuestions[questionIndex].B, //bElemInd
      quizQuestions[questionIndex].C, //cElemInd
      quizQuestions[questionIndex].D //dElemInd
    );
  }); // End of event listener

  //Timmer
  $("#startBtn").click(function () {
    // WHEN I click the start button/ THEN a timer starts and I am presented with a question
    $(".respBtn").fadeIn();
    $("#startBtn").hide();
    let counDownTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(counDownTimer);
        $("#countdown").html();
      } else {
        $("#countdown").text(timeleft - 1 + " Sec");
      }
      timeleft -= 1;
    }, 1000); //end timmer ans loop func
  }); //End timer

  // Send Question and answer to HTML
  $("#startBtn").click(function () {
    console.log("index is", questionIndex)
    questions( //send params to questions function
      quizQuestions[questionIndex].question, //qElemInd
      quizQuestions[questionIndex].A, //aElemInd
      quizQuestions[questionIndex].B, //bElemInd
      quizQuestions[questionIndex].C, //cElemInd
      quizQuestions[questionIndex].D //dElemInd
    );
    // });//End send questions


    //hide button at end of test
    // $(".respBtn").click(function () { 
    //   console.log(questionIndex);
    //   questionIndex++;
    //   if (questionIndex == quizQuestions.length) {

    //     $(".respBtn").hide();
    //     $("#question").text('Done');
    //   }
    // });//hide button at end of test

  })// End of Send Question and answer to HTML


  $("#score").text('Your Score is: ' + correctRes + '  Out of ' + quizQuestions.length);

  // //Check for correct responce
  // function checkcorrect() {
  //   for (let i = 0; i < arrResponse.length; i++) {
  //     const elementi = arrResponse[i];
  //     console.log(elementi);
  //     for (let j = 0; j < correctRes.length; j++) {
  //       const elementj = correctRes[j];
  //       console.log(elementj);
  //     }
  //   }
  //   if (arrResponse === correctRes) {
  //     correctRes = correctRes + 1;
  //   } //End correct responce
  // }
  // checkcorrect();

}); // end ready func