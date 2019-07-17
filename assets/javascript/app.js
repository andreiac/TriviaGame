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




setTimeout(function () {

    var questionsAndAnswers = 
    {
        questions:[
        {
            question: "On what show was zach morris a character?",
            answer1: "saved by the bell",
            answer2: "different world",
            answer3: "zach attack",
            answer4: "all that",
        },
        {
            question: "On what show was alannis morriset a character?",
            answer1: "saved by the bell",
            answer2: "different world",
            answer3: "zach attack",
            answer4: "all that",
        },
        {
            question: "On what show was snoop dog a character?",
            answer1: "saved by the bell",
            answer2: "different world",
            answer3: "zach attack",
            answer4: "all that",
        },
        {
            question: "On what show was barney a character?",
            answer1: "saved by the bell",
            answer2: "different world",
            answer3: "zach attack",
            answer4: "all that",
        },
    ]};


    var ques= questionsAndAnswers ['questions']
    for (var i=0; i <ques.length; i++){
        var questionDiv = $("<div id=populatedQuestion>");
        var answer1Div = $("<div id=populatedAnswer>");
        var answer2Div = $("<div id=populatedAnswer>");
        var answer3Div = $("<div id=populatedAnswer>");
        var answer4Div = $("<div id=populatedAnswer>");

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

}, 4000)
 
