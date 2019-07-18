$('#buttonSubmit').hide();

//question and answer bank

setTimeout(function () {
    $("#start").text("Ready!");
}, 1000);
setTimeout(function () {
    $("#start").text("Set!");
}, 2000);
setTimeout(function () {
    $("#start").text("Start!");
}, 3000);
setTimeout(function () {
    $("#start").remove();
}, 4000);

var rightAnswer = "you got that right!";
var wrongAnswer = "nope";

var correctAnswersBank = 0;
var wrongAnswersBank = 0;
var unAnsweredBank = 0;

function endGame(){
    clearInterval(interval);
    $("#timer").text("Times Up!");
$('#correctTimesUp').append(correctAnswersBank);
$('#wrongTimesUp').append(wrongAnswersBank);
$('#timesUp').fadeIn(1000).show();
$("#buttonSubmit").remove();
$("#divsAppearHere").remove();
$("#timer").remove();
$("#timeRemaining").remove();

}


$('#buttonSubmit').on("click", endGame)
    

//timer code
function startTimer (duration, display){
    

    var timer=duration, minutes, seconds;
      interval=setInterval(function(){
        minutes=parseInt(timer/60,10);
        seconds=parseInt(timer % 60, 10);
        minutes=minutes<10  ? minutes :minutes;
        seconds=seconds<10 ? "0" + seconds:seconds;
        display.text(minutes + ":" + seconds + " remaining!");
        $('#buttonSubmit').fadeIn(1000).show();
        
        
        if (timer > 0){
            
            timer = timer -1;
        }

        if (timer <= 0){
            endGame();
    
        }
        
        // alert("Times Up!");
        
    }, 1000);
    
}
//start timer
setTimeout(function () {
    jQuery(function ($){
        var oneMinute=60*1,
        display=$("#timer");
        startTimer(oneMinute, display);
        
    });
    
}, 3000);
//populate questions
function nextQuestion() {
    
    var questionsAndAnswers =
    {
        questions: [
            {
                question: "On what show was Zach Morris a character?",
                answer1: "Saved by the Bell",
                answer2: "A Different World",
                answer3: "Zach Attack",
                answer4: "All That",
            },
            {
                question: "Who played God in Dogma?",
                answer1: "Reese Witherspoon" ,
                answer2: "Matt Damon",
                answer3: "Alannis Morrisette",
                answer4: "Taylor Swift",
            },
            {
                question: "What color hair did Chucky have in the Rugrats?",
                answer1: "He was bald!",
                answer2: "Brown",
                answer3: "Blonde",
                answer4: "Red",
            },
            {
                question: "Jesse was so excited, she just couldn't ... ?",
                answer1: "Contain herself",
                answer2: "Hide it", 
                answer3: "Sleep",
                answer4: "Concentrate",
            },
        ]
    };
    var ques = questionsAndAnswers['questions']
    for (var i = 0; i < ques.length; i++) {
        var questionDiv = $("<div id=populatedQuestion" + i + "question class=question>");
        var answer1Div = $("<div id=populatedAnswer" + i + "answer1 class=answer>");
        var answer2Div = $("<div id=populatedAnswer" + i + "answer2 class=answer>");
        var answer3Div = $("<div id=populatedAnswer" + i + "answer3 class = answer>");
        var answer4Div = $("<div id=populatedAnswer" + i + "answer4 class=answer>");

        var question = ques[i].question;
        var answer1 = ques[i].answer1;
        var answer2 = ques[i].answer2;
        var answer3 = ques[i].answer3;
        var answer4 = ques[i].answer4;

        var pQuestion = $("<p>").text(question);
        var pAnswer1 = $("<p>").text(answer1);
        var pAnswer2 = $("<p>").text(answer2);
        var pAnswer3 = $("<p>").text(answer3);
        var pAnswer4 = $("<p>").text(answer4);

        questionDiv.append(pQuestion);
        answer1Div.append(pAnswer1);
        answer2Div.append(pAnswer2);
        answer3Div.append(pAnswer3);
        answer4Div.append(pAnswer4);

        $("#divsAppearHere").append(questionDiv);
        $("#divsAppearHere").append(answer1Div);
        $("#divsAppearHere").append(answer2Div);
        $("#divsAppearHere").append(answer3Div);
        $("#divsAppearHere").append(answer4Div);
    }
    

    console.log(questionsAndAnswers.questions[0].answer1) //testing to see if location works


    // right and wrong answers for question1
    $("#populatedAnswer0answer1").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)
                correctAnswersBank++;
    });
    $("#populatedAnswer0answer2").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
              wrongAnswersBank++;
    });
    $("#populatedAnswer0answer3").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
               wrongAnswersBank++;

    });
    $("#populatedAnswer0answer4").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
              wrongAnswersBank++;

    });



    // right and wrong answers for question2
    $("#populatedAnswer1answer1").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
        wrongAnswersBank++;
        });
    $("#populatedAnswer1answer2").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
               wrongAnswersBank++;

    });
    $("#populatedAnswer1answer3").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
        correctAnswersBank++;

    });
    $("#populatedAnswer1answer4").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
              wrongAnswersBank++;

    });



    // right and wrong answers for question3
    $("#populatedAnswer2answer1").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
        wrongAnswersBank++;
    });
    $("#populatedAnswer2answer2").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
              wrongAnswersBank++;

    });
    $("#populatedAnswer2answer3").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
               wrongAnswersBank++;

    });
    $("#populatedAnswer2answer4").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
        correctAnswersBank++;

    });

    // right and wrong answers for question4
    $("#populatedAnswer3answer1").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500) ;
        wrongAnswersBank++;
    });
    $("#populatedAnswer3answer2").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
        correctAnswersBank++;

    });
    $("#populatedAnswer3answer3").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500)  ;
              wrongAnswersBank++;

    });
    $("#populatedAnswer3answer4").on("click", function () {
        $(this).animate({fontSize: "3em"}, 500);
                wrongAnswersBank++;

    });
    
}

setTimeout(nextQuestion, 4000);

