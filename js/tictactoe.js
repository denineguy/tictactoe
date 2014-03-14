//need a game object.  This is my global variable to understand player turns
//and winning combinations
var game = {
	gamePlayer : 0,
	playerMove: [],
	resetGame: function(){
		this.gamePlayer = 0;
		this.playerMove = [];
	}
};

//thoughts if gameplayer 0 represents X then can I see if 0 is in the winning combinations to identify the winner. based on the console it looks like 0 and 1 for gamePlayer are being returned		
//or check if the winning combinations cells have the same image (.xmark or .omark)
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

				$(this).children('.xmark').show(300);

				game.gamePlayer = 1;

			}

			else{

				$(this).children('.omark').show(300);

				game.gamePlayer = 0;

			}

		}

		else {
			console.log('This space is occupied');
			alert("You can't take that space");
		}	
	
	});


	var checkWinner;	
	var won;
	var resetting;

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

		checkCombos1;	
	};	


	var checkDraw = function(){
		var draw = game.playerMove[0] + game.playerMove[1] + game.playerMove[2]+ game.playerMove[3] + game.playerMove[4] + game.playerMove[5]+ game.playerMove[6] + game.playerMove[7] + game.playerMove[8];
		if (draw === 4){
			console.log( "It's a tie");
			alert("It's a tie");
			return "tie"
		}
		else{
			checkCombos1;
		}
	};

	checkDraw();	


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

	checkWinner();


	function resetting() {
		alert ('Game Over! Start New Game');
		console.log('The Game is over');
		$('.cell').addClass('occupied');
		// $('.cell').children('img:visible').hide();  This will remove X and Os as soon as someone Wins
		// game.resetGame(); This will reset the game if I want to use that function.
	};
		

	$('.reset').click ( function(){
		//$( '.xmark' ).hide();
		//$( '.omark' ).hide();
		$('.cell').children('img:visible').hide();
		$('.cell.occupied').removeClass('occupied');
		
		game.resetGame();
	});	
	
});		


//after someone has moved check to see how many moves they've had.  
//If player move>= 3 then check to see if they have a winning combination	
//create a new var for just that players moves gives 
//the array should contain only the space numbers the player moved so it matches solution format
//go through players moves subset of three moves and map it against the winning solutions







//create method that will reset all of the functions.  You create a function in your properties 	
	
//check if playerMove equals the winning combinations. 
//

//use arguments instead of requiring instead of depending on scope.  optimize to find most optimal code for solution and try to abstract they functions from functions


