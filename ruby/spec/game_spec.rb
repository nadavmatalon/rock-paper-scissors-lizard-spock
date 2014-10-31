require './lib/player.rb'
require './lib/game.rb'

describe Game do

    let(:player1) { Player.new 'A' }
    let(:player2) { Player.new 'B' }
    let(:game) { Game.new player1, player2 }

    context 'Winning and losing' do

        describe 'Rock' do

            it 'should beat scissors' do
                player1.picks :rock and player2.picks :scissors
                expect(game.winner).to be(player1.name)
            end

            it 'should lose to paper' do
                player1.picks :rock and player2.picks :paper
                expect(game.winner).to be(player2.name)
            end

        end

        describe 'Paper' do

            it 'should beat rock' do
                player1.picks :paper and player2.picks :rock
                expect(game.winner).to be(player1.name)
            end

            it 'should lose to scissors' do
                player1.picks :paper and player2.picks :scissors
                expect(game.winner).to be(player2.name)
            end
        end

        describe 'Scissors' do
            it 'should beat paper' do
                player1.picks :scissors and player2.picks :paper
                expect(game.winner).to be(player1.name)
            end

            it 'should lose to rock' do
                player1.picks :scissors and player2.picks :rock
                expect(game.winner).to be(player2.name)
            end
        end
    end

    context 'Draws' do

        describe 'Identical picks' do

            it 'should result in no winner' do
                draw_game_results = [:rock, :paper, :scissors].map do |pick|
                    player1.picks pick and player2.picks pick
                    game.winner
                end
                expect(draw_game_results.uniq.join).to eq 'Draw'
            end
        end
    end
end

