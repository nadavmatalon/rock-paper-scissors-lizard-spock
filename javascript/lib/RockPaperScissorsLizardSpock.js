
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

Game.prototype.PAIRS = {
	rock: {beats: 'scissors, lizard'},
	paper: {beats: 'rock, spock'},
	scissors: {beats: 'paper, lizard'},
	lizard: {beats: 'paper, spock'},
	spock: {beats: 'scissors, rock'}
};


Game.prototype.winner = function() {
	if (this._isSamePick()) return null;
	return (this.PAIRS[this.player1.pick]['beats'].search(this.player2.pick) == -1) ? this.player2 : this.player1;
};

// Game.prototype.winner = function() {

// 	if (this._isSamePick()) return null;
// 	switch(this.player1.pick) {
//     	case ("rock"): return ((this.player2.pick === "scissors") || (this.player2.pick === "lizard")) ? (this.player1) : (this.player2); break;
//     	case ("paper"): return ((this.player2.pick === "rock") || (this.player2.pick === "spock")) ? (this.player1) : (this.player2); break;
//     	case ("scissors"): return ((this.player2.pick === "paper") || (this.player2.pick === "lizard")) ? (this.player1) : (this.player2); break;    
//     	case ("lizard"): return ((this.player2.pick === "paper") || (this.player2.pick === "spock")) ? (this.player1) : (this.player2); break;
//     	case ("spock"): return ((this.player2.pick === "rock") || (this.player2.pick === "scissors")) ? (this.player1) : (this.player2); break;}
// };

