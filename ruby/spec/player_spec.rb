require './lib/player.rb'

describe Player do

	let(:player) { Player.new 'John' }

	it 'is initialized with a name' do
		expect(player.name).to eq 'John'
	end

	it 'can pick one of the three options (rock, paper, scissors)' do
		player.picks :rock
		expect(player.pick).to eq :rock
	end

end

