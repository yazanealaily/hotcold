function newGame() {
	$("#feedback").html("What's Your Guess?");
}

function randNum() {
	magicNum = Math.floor(Math.random() * 100 + 1);
	}

function checkInput(number) {

	if(number < 1 || number > 100) {
		return false;
	}

	else if(isNaN(number)) {
		return false;
	}

	return true;
}

function success() {
	$("#feedback").html("Success!");
}

function playGame() {

	var userGuess;
	var counter = 0;

	$("#guessButton").on("click", function(event){

		event.stopPropagation();

		userGuess = parseInt($(":text").val());

		if(!checkInput(userGuess)) {return false;}

		else if(Math.abs(userGuess - magicNum) == 0) {
				alert("Congratulations! You Have A Correct Guess!");
				$("#guessList").append("<li>" + userGuess + "</li>");
				counter++;
				$("#count").html(counter.toString());	
				return true;
			}

		else {
				if(Math.abs(userGuess - magicNum) > 50) {
					$("#feedback").html("Ice Cold!");
					$("#guessList").append("<li>" + userGuess + "</li>");
					counter++;
					$("#count").html(counter.toString());					
					return false;
				}

				else if(Math.abs(userGuess - magicNum) > 30) {
					$("#feedback").html("Cold!");
					$("#guessList").append("<li>" + userGuess + "</li>");
					counter++;
					$("#count").html(counter.toString());					
					return false;
				}

				else if(Math.abs(userGuess - magicNum) > 10) {
					$("#feedback").html("Hot!");
					$("#guessList").append("<li>" + userGuess + "</li>");
					counter++;
					$("#count").html(counter.toString());					
					return false;
				}

				else if(Math.abs(userGuess - magicNum) < 10) {
					$("#feedback").html("Very Hot!");
					$("#guessList").append("<li>" + userGuess + "</li>");
					counter++;
					$("#count").html(counter.toString());						
					return false;
				}
			}
	});

}

$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").on("click", function(){
  		newGame();
  		randNum();

  		while(playGame()){
  		};

  	});

});



