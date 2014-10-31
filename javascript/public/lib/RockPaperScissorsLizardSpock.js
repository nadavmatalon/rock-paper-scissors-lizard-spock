
function Player(name) {
    this.name = name;
}

Player.prototype.picks = function(pick) {
    this.pick = pick;
};

function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
}

Player.prototype.pick = function() {
    this.pick;
};

Game.prototype.PAIRS = {
    rock:     { 'beats': ['scissors', 'lizard'] },
    paper:    { 'beats': ['rock', 'spock']      },
    scissors: { 'beats': ['paper', 'lizard']    },
    lizard:   { 'beats': ['paper', 'spock']     },
    spock:    { 'beats': ['scissors', 'rock']   }
};

Game.prototype._isSamePick = function() {
    return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {
    if (this._isSamePick()) { return null; }
    return (this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1) ? this.player1 : this.player2;
};

Game.prototype.loser = function() {
    return (this.winner() === this.player1) ? this.player2 : this.player1;
};

Game.prototype.winnerName = function() {
    if (this.winner() === this.player1) {
        return this.player1.name;
    } else {
        return this.player2.name;
    }
};

Game.prototype.loserName = function() {
    return (this.winnerName() === this.player1.name) ? this.player2.name : this.player1.name;
};

Game.prototype.isDraw = function() {
    if(this.winner() === null) {
        return 'draw';
    }
};

Game.prototype.messageVerb = function() {
    if (this.winnerPick('rock') && this.loserPick('scissors')) {
        return 'crushes';
    } else if (this.winnerPick('rock') && this.loserPick('lizard')) {
        return 'crushes';
    } else if (this.winnerPick('scissors') && this.loserPick('paper')) {
        return 'cuts';
    } else if (this.winnerPick('scissors') && this.loserPick('lizard')) {
        return 'decapitates';
    } else if (this.winnerPick('spock') && this.loserPick('scissors')) {
        return 'smashes';
    } else if (this.winnerPick('spock') && this.loserPick('rock')) {
        return 'vapourises';
    } else if (this.winnerPick('lizard') && this.loserPick('paper')) {
        return 'eats';
    } else if (this.winnerPick('lizard') && this.loserPick('spock')) {
        return 'poisons';
    } else if (this.winnerPick('paper') && this.loserPick('rock')) {
        return 'covers';
    } else if (this.winnerPick('paper') && this.loserPick('spock')) {
        return 'disproves';
    }
};

Game.prototype.winnerPick = function(selection) {
    return this.winner().pick === selection;
};

Game.prototype.loserPick = function(selection) {
    return this.loser().pick === selection;
};

Game.prototype.winningMessage = function() {
    if (this.isDraw()) { return "Draw"; }
    var message = [this.winnerName(), this.messageVerb(), this.loserName()];
    return message.join(" ");
};

Game.prototype.message = function(content) {
    return content.val;
};


