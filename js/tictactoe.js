//need a game object.  This is my global variable to understand player turns
//and square spaces taken
var game = {
	gamePlayer : 0,
	playerMove: [],
	resetGame: function(){
		this.gamePlayer = 0;
		this.playerMove = [];
	}
};

//Click functions to show an X or O image when a box is clicked.
//Determines whose turn it is after and image is shown and which image should be shown
//Prevents and player taking a space that has already been taken.  

$(document).ready( function() { 

	$('.cell').click ( function(){

		if (!$(this).hasClass('occupied')) {

			$(this).addClass('occupied');
			
			console.log(this)

			var idString = this.id;

 			var index = idString.split('_')[1] - 1;

			game.playerMove[index] = game.gamePlayer;

			console.log("is now " + game.gamePlayer + "'s turn");

			console.log(game.playerMove);			

			if(game.gamePlayer == 0){

					$(this).children('.xmark').show(300, function(){
						checkDraw();
						checkWinner();
					});

					game.gamePlayer = 1;

			}

			else{

					$(this).children('.omark').show(300, function(){
						checkDraw();
						checkWinner();
					});

					game.gamePlayer = 0;

			}

		}

		else {
				console.log('This space is occupied');
				alert("You can't take that space");
		}	
	

	});

	$('.reset').click ( function(){
			$('.cell').children('img:visible').hide();
			$('.cell.occupied').removeClass('occupied');
		
		game.resetGame();
	});	

});	


//function to check the winning combinations.  3 X's or O's vertical, 3 X's or O's horizontal, 3 X's or O's diagonal
function checkCombos1() {
		var checkCombos = [
				game.playerMove[0] + game.playerMove[1] + game.playerMove[2],
				game.playerMove[3] + game.playerMove[4] + game.playerMove[5],
				game.playerMove[6] + game.playerMove[7] + game.playerMove[8], 
				game.playerMove[0] + game.playerMove[3] + game.playerMove[6],
				game.playerMove[1] + game.playerMove[4] + game.playerMove[7],
				game.playerMove[2] + game.playerMove[5] + game.playerMove[8],
				game.playerMove[0] + game.playerMove[4] + game.playerMove[8],
				game.playerMove[2] + game.playerMove[4] + game.playerMove[6]
		];

		for(var i = 0; i < checkCombos.length; i++){
				if(checkCombos[i] === 0){
						return "X";
						console.log("X");
				}

				else if(checkCombos[i] === 3){
						return "O";
						console.log("O");
				}
				else{
						checkDraw;
				}
		
		};
	
};	


//function to check if it's a tie and no one has one
var checkDraw = function(){
		var draw = game.playerMove[0] + game.playerMove[1] + game.playerMove[2]+ game.playerMove[3] + game.playerMove[4] + game.playerMove[5]+ game.playerMove[6] + game.playerMove[7] + game.playerMove[8];
		if (draw === 4){
				console.log( "It's a tie");
				alert("It's a tie");
				resetting();
		}
		else{
				checkWinner;
		}	
};


//function to show if a player has one alert that player X or player O has one.
var checkWinner = function(){
		var won = checkCombos1();

		if (won == 'X'){
				alert('player X has one!');
				resetting();
		}
		else if(won == 'O'){
				alert('player O has one!');
				resetting();
		}

};

//function to show that the Game is Over and prevents any player from putting an X or O in another box. 
function resetting() {
		alert ('Game Over! Start New Game');
		console.log('The Game is over');
		$('.cell').addClass('occupied');
};
		

	
	
	



