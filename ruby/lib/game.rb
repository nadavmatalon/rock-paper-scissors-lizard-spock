class Game

	PAIRS = {
		rock:     { beats: :scissors },
		paper:    { beats: :rock },
		scissors: { beats: :paper }
	}.freeze

	def initialize(player1, player2)
		@player1, @player2 = player1, player2
	end

	def winner
		return 'Draw' if same_pick?
		(PAIRS[@player1.pick][:beats] == @player2.pick) ? @player1.name : @player2.name
	end

	private

	def same_pick?
		@player1.pick == @player2.pick
	end

end

