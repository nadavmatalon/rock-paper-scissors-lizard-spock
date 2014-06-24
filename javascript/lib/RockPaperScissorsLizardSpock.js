
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
	rock: {beats: ['scissors', 'lizard']},
	paper: {beats: ['rock', 'spock']},
	scissors: {beats: ['paper', 'lizard']},
	lizard: {beats: ['paper', 'spock']},
	spock: {beats: ['scissors', 'rock']}
};


Game.prototype.winner = function() {
	if (this._isSamePick()) return null;
	return (this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1) ? this.player1 : this.player2;
};


