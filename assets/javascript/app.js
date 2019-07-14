//question and answer bank

var questionsAndAnswers = {
    Q1: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q2: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q3: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q4: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q5: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q6: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q7: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q8: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q9: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },
    Q10: {
        question: "21 2nd Street",
        answer1: "New York",
        answer2: "NY",
        answer3: "10021",
        answer4: "kjalkjlfk",
    },

};




function displayQuestionsAndAnswers() {

    $("#buttons-view").empty();
    // Loops through the array of questions

    for (var i = 0; i < questionsAndAnswers.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("movie");
      // Added a data-attribute
      a.attr("data-name", movies[i]);
      // Provided the initial button text
      a.text(movies[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

