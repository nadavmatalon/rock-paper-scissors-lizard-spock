require_relative './lib/rock_paper_scissors'

AVAILABLE_PICKS = [:rock, :paper, :scissors]

player1 = Player.new 'John'
player2 = Player.new 'Jane'

game = Game.new player1, player2

player1.picks AVAILABLE_PICKS.sample and player2.picks AVAILABLE_PICKS.sample

puts "#{player1.name} picked: #{player1.pick}"
puts "#{player2.name} picked: #{player2.pick}"
puts "The winner is #{game.winner}"

