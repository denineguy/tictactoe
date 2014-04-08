//This is TicTacToe built with Javascript

//This is my object for the player which will begin with "X", the container for the Tic Tac Toe board, 
//resetGame function will set it back to an empty array for the board and first player is "X".
//This also holds the winning combinations.
var game = {
	gamePlayer : "X",  //0
	playerMove: [],
	resetGame: function(){
		this.gamePlayer = "X";
		this.playerMove = [];

	},
	winningCombos: [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
};


var moves = 0;		//This global variable with help keep track of the number of moves on board.


 
//  The below is my event handler which determines what happens when a square (cell) is clicked.  
//  When a cell is clicked it will show an "X" or and "O" based on whose turn it is. 

//  If the space is already occupied by "X" or "O" then a message will display showing the space is occupied and 
//  prevent anyone else from taking that space.  

//  There is also the reset function that is used when someone clicks the New Game button.

$(document).ready( function() { 


	$('.cell').click ( function(){

		if (!$(this).hasClass('occupied')) {  //  As long as a space is not occupied the below function will run

			$(this).addClass('occupied');  	  //  When a square(cell) is clicked this will add the class occupied to the cell 
			
			console.log(this)

			var idString = this.id;			  //  This stores the id of the cell that was clicked into a variable idString 

 			var index = idString.split('_')[1] - 1;    //  This splits the id (C_1) stores the number into an array and subtracts 1 from it to represent the correct space in array store into index

			game.playerMove[index] = game.gamePlayer;  //  This space in the board will hold what player clicked the button

			console.log("is now " + game.gamePlayer + "'s turn");	

			if(game.gamePlayer == "X")    	  //  if gamePlayer starts with "X" 
				{

					$(this).children('.xmark').show(300, function(){  	 // This display the xmark image
						checkWinner();		  //  Run function to see if there is a winner
										
					});
	
					game.gamePlayer = "O";    //  switches gamePlayer to "O"
					moves +=1;				  //  This adds 1 to keep track of player moves	
				
			 }

			else{

					$(this).children('.omark').show(300, function(){    //  This displays omark image
						checkWinner();		   //  Run function to see if there is a winner.

					});

					game.gamePlayer = "X"; 	   //	If gamePlayer "O" swithback to "X"
					moves +=1;
				
			}

		}

		else {
				alert("You can't take that space");    //	If the space is occupied then just alert player is satisfied
		}	
	

	});

	//   This function occurs when the New Game button is clicked it takes all images off board and removes the occupied class
	//	 so when the next game starts it is a clean slate and no spaces are "occupied" . 
	$('.reset').click ( function(){						
			$('.cell').children('img:visible').hide();
			$('.cell.occupied').removeClass('occupied');
		
		game.resetGame();
	});	

});	


// Function to check the winning combinations.  Iterating of array to see if 0,1,2 index has either 3 X's or O's vertical, 3 X's or O's horizontal, 3 X's or O's diagonal
// winner variable stores the player "X" or "O" based on the gamePlayer turn.  It starts with X.
// If there are no winning combinations and 9 moves have been made (board is full) then it will checkDraw function
function checkCombos() {
		winner = game.gamePlayer ;
		if (game.gamePlayer == "X") 
		{
			winner = "O" 
		}
		else {
			winner = "X" 
		}

		for(var i = 0; i < game.winningCombos.length; i++){
				if(game.playerMove[game.winningCombos[i][0]] == winner	&& game.playerMove[game.winningCombos[i][1]] == winner && game.playerMove[game.winningCombos[i][2]]== winner){
						
						alert("player " + winner + " won!");
						return true;

				}

				else if (moves == 9 ) {

						checkDraw();
						
				}
				
		};
	
};	


//  Function to check for a tie.  
//  If ther were 9 moves (board is full) and now winning combos (CheckCombos = false) then check for tie.
var checkDraw = function(){

	if (moves == 9 ){

		return true;

	}

 };	


//function to check winner and check Draw function to see if Game is Over call resetting function.
var checkWinner = function(){

		if (checkCombos() == true){

				resetting();

		}

		else if (checkDraw() == true ){

				alert ("It's a tie");
				resetting();

		}
		
};

// Function to show that the Game is Over and resets moves variable back to 0, so can always start counting from 0.
// Function adds class "occupied" to all cells to prevents any player from putting an X or O in another box. 
function resetting() {

		alert ('Game Over! Start New Game');
		$('.cell').addClass('occupied');
		moves = 0;

};
		



