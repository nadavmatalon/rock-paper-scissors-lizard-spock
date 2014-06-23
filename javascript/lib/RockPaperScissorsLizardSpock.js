
function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};


Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {

	if (this._isSamePick()) return null;
	
	if (this.player1.pick === "rock" && this.player2.pick === "paper") {
		return this.player2;
	} else if (this.player1.pick === "rock" && this.player2.pick === "scissors") {
		return this.player1;
	} else if (this.player1.pick === "rock" && this.player2.pick === "lizard") {
		return this.player1;
	} else if (this.player1.pick === "rock" && this.player2.pick === "spock") {
		return this.player2;
	} else if (this.player1.pick === "paper" && this.player2.pick === "rock") {
		return this.player1;
	} else if (this.player1.pick === "paper" && this.player2.pick === "scissors") {
		return this.player2;
	} else if (this.player1.pick === "paper" && this.player2.pick === "lizard") {
		return this.player2;
	} else if (this.player1.pick === "paper" && this.player2.pick === "spock") {
		return this.player1;
	} else if (this.player1.pick === "scissors" && this.player2.pick === "rock") {
		return this.player2;
	} else if (this.player1.pick === "scissors" && this.player2.pick === "paper") {
		return this.player1;
	} else if (this.player1.pick === "scissors" && this.player2.pick === "lizard") {
		return this.player1;
	} else if (this.player1.pick === "scissors" && this.player2.pick === "spock") {
		return this.player2;
	} else if (this.player1.pick === "lizard" && this.player2.pick === "rock") {
		return this.player2;
	} else if (this.player1.pick === "lizard" && this.player2.pick === "paper") {
		return this.player1;
	} else if (this.player1.pick === "lizard" && this.player2.pick === "scissors") {
		return this.player2;
	} else if (this.player1.pick === "lizard" && this.player2.pick === "spock") {
		return this.player2;
	} else if (this.player1.pick === "spock" && this.player2.pick === "rock") {
		return this.player1;
	} else if (this.player1.pick === "spock" && this.player2.pick === "paper") {
		return this.player2;
	} else if (this.player1.pick === "spock" && this.player2.pick === "scissors") {
		return this.player1;
	} else if (this.player1.pick === "spock" && this.player2.pick === "lizard") {
		return this.player2;
	} else {

	}

};

