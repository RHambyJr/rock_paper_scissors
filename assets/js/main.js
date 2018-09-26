/*
 * Rock, Paper, Scissors!
 *
 * Created by Robert Hamby
 * September 26, 2018
 *
 * Part of TheOdinProject.com's Web Development 101 course
 *
 */

// Chooses a random number between 0 and 2
// Selects the string in that index of the CHOICES array
// and returns it
 function getComputerChoice() 
 {
 	const CHOICES = ["rock", "paper", "scissors"];

 	const choice = Math.floor(Math.random() * CHOICES.length);

 	return CHOICES[choice];
 }

// Calls prompt() to get a player's choice
// Compares the player's response to the CHOICES array to 
// determine if the choice is valid. Repeats the question
// until the player chooses a valid response
// Returns player's choice
 function getPlayerChoice() 
 {
 	const CHOICES = ["rock", "paper", "scissors"];
 	let choice;
 	var isValid = false;

 	// Asks player to type a choice, and converts to lowercase for comparison
 	do {
 		choice = prompt("Rock, paper, or scissors?").toLowerCase();

 		// Cycles through CHOICES array to check for valid player response
 		for (var i = 0; i < CHOICES.length; i++)
 		{
 			if (choice === CHOICES[i])
 			{
 				isValid = true;
 			}
 		}
 	}
 	while(!isValid);

 	return choice;
 }

// Self contained round of RPS
// Compares a player's choice to the computer's choice
// and returns an outcome
 function playRound()
 {
 	let outcome;
 	let computersChoice = getComputerChoice();
 	console.log(computersChoice);
 	let playersChoice = getPlayerChoice();

 	// Player Rock comparison
 	if(playersChoice === "rock")
 	{
 		if(computersChoice === "rock")
 		{
 			outcome = "tie";
 		}
 		else if(computersChoice === "paper")
 		{
 			outcome = "lose";
 		}
 		else //scissors
 		{
 			outcome = "win";
 		}
 	}

 	// Player Paper comparison
 	if(playersChoice === "paper")
 	{
 		if(computersChoice === "rock")
 		{
 			outcome = "win";
 		}
 		else if(computersChoice === "paper")
 		{
 			outcome = "tie";
 		}
 		else //scissors
 		{
 			outcome = "lose";
 		}
 	}

 	// Player Scissors comparison
 	if(playersChoice === "scissors")
 	{
 		if(computersChoice === "rock")
 		{
 			outcome = "lose";
 		}
 		else if(computersChoice === "paper")
 		{
 			outcome = "win";
 		}
 		else //scissors
 		{
 			outcome = "tie";
 		}
 	}

 	displayOutcome(playersChoice, computersChoice, outcome);

 	return outcome;
 }

// Calls alert function based on the round's outcome
 function displayOutcome(player, cpu, outcome)
 {
 	// Player wins
 	if(outcome === "win")
 	{
 		alert("You win, " + player + " beats " + cpu + "!");
 	}
 	// Player loses
 	if(outcome === "lose")
 	{
 		alert("You lose, " + cpu + " beats " + player + "!");
 	}
 	// Player ties
 	if(outcome === "tie")
 	{
 		alert("You tie, " + player + " and " + cpu + " are the same!");
 	}
 }

// The main game loop. Calls playRound() up to five times, keeping
// track of the player and cpu's score as well as ties. Stops early
// if the player or the computer get to 3 (since it's best of 3)
// Calls getCurrentScore between rounds to show the player the score
// calls getOutcome at the end of the (up to) 5 rounds
 function game()
 {
 	let playerScore = 0;
 	let computerScore = 0;
 	let ties = 0;
 	const MAX_ROUNDS = 5;

 	for(let i = 0; i < MAX_ROUNDS; i++)
 	{
 		if(!(playerScore === 3 || computerScore === 3))
 		{
 			let outcome = playRound();

	 		if(outcome === "win")
	 		{
	 			playerScore++;
	 		}
	 		else if(outcome === "lose")
	 		{
	 			computerScore++;
	 		}
	 		else
	 		{
	 			ties++;
	 		}

	 		getCurrentScore(playerScore, computerScore, ties);
	 	}
 	}

 	getOutcome(playerScore, computerScore, ties);
 }

// Calls an alert for the current score
 function getCurrentScore(player, cpu, ties)
 {
 	alert("You: " + player + 
 		  "\nComputer: " + cpu +
 		  "\nTies: " + ties);
 }

// The else statement seems pointless in a 5 point game, but I added
// it incase MAX_ROUNDS was changed to an even number for some reason.
 function getOutcome(player, cpu, ties)
 {
 	let outcome;

 	// Player wins
 	if (player > cpu)
 	{
 		outcome = "CONGRATULATIONS! You win!";
 	}
 	// Player loses
 	else if (player < cpu)
 	{
 		outcome = "Sorry! You lose!";
 	}
 	// Player ties
 	else
 	{
 		outcome = "It was a tie!";
 	}

 	let score = "\n\n -Final Score-" + 
 	            "\nYou: " + player + 
 	            "\nComputer: " + cpu +
 	            "\nTies: " + ties;

 	alert(outcome + score);
 }


// Starts game loop
game();