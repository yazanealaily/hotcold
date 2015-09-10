(function ($) {
    'use strict'

    var randomNumber,
        userGuess,
        guessCounter = 0

    $(document).ready( function() {
        setupModal()

        $('#guessButton').click( function(event) {
            event.preventDefault()

            userGuess = $('#userGuess').val()
            if (isNaN(userGuess || userGuess >= 100)) {
                alert('please enter valid number!')
                $('#userGuess').val('')
            } else { // number is valid
                $('#count').html(++guessCounter)
                letsPlay()
            }
        })

        $('.new').click(newGame)

        newGame()
    })

    function letsPlay() {
        $('#guessList').append('<li>'+userGuess+'</li>')

        if (userGuess == randomNumber) {
            feedback("You've got it!")
        } else if (Math.abs(randomNumber - userGuess) <= 10) {
            feedback("You're hot")
        } else if (Math.abs(randomNumber - userGuess) <= 20) {
            feedback("You're warm")
        } else if (Math.abs(randomNumber - userGuess) <= 30) {
            feedback("You're cold")
        } else {
            feedback("You're freezing")
        }

        $('#userGuess').val('')
    }

    function setupModal() {
        /*--- Display information modal box ---*/
        $(".what").click(function(){
            $(".overlay").fadeIn(1000);
        });

        /*--- Hide information modal box ---*/
        $("a.close").click(function(){
            $(".overlay").fadeOut(1000);
        });
    }

    function newGame() {
        feedback("What's Your Guess?");
        randomNumber = Math.floor(Math.random() * 100 + 1);
        console.log(randomNumber)
    }

    function feedback(msg) {
        $('#feedback').html(msg)
    }

}(jQuery))
