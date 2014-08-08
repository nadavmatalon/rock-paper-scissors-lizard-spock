<h1>Rock • Paper • Scissors • Lizard • Spock</h1>

<h3>Description</h3><br/>

<p><strong>Bookmark Manager</strong> </p>

<p>This app was created as an exercise in buiding a complete JavaScript 
web application via TDD (testing done with Jasmine).</p> 

<p>It consists of a slightly more sophisticated version of the well-known childrens' game, rock-paper-scissors.</p>

<p>The game can be played either with two players or agaist the super computer 'Deep Though'.</p>

<p>(Source: http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock)</p>


<h3>How to Play</h3>

<p>First, select game mode: 'Player vs Deep Thought' or Player vs Player</p>

<p>Next, enter name/s of player/s</p>

<p>Here's a quick review of the rules:</p>

<ul>
	<li>Scissors cut Paper</li>
	<li>Paper covers Rock</li>
	<li>Rock crushes Lizard</li>
	<li>Lizard poisons Spock</li>
	<li>Spock smashes Scissors</li>
	<li>Scissors decapitate Lizard</li>
	<li>Lizard eats Paper</li>
	<li>Paper disproves Spock</li>
	<li>Spock vaporizes Rock</li>
	<li>Rock crushes Scissors</li>
</ul>

<p>And now it's game time:</p>

<p>If in single player mode: simply click on an image to make your choice 
(Deep Thought is very fast - it has alredy made its choice).</p>

<p>If in dual player mode: each player should click on an image in turn
and after the two choice are made, the result is shown on the screen.</p>


<h3>See it Live on Heroku</h3><br/>

<p>A live version of the game can be found (and played!) at:</p>

<p>http://makers-rock-paper-scissors.herokuapp.com</p>


<h3>Browser Caveate</h3><br/>

<p>Please note that this app has been optimized primarily for <strong>Google Chrome</strong>, 
and to a lesser extent <strong>Apple Safari</strong>. However. it should look decent on other
browsers as well.</p>


<h3>Testing</h3><br/>

<p>Tests were written with Rspec (for Ruby side) & Jasmine (for JavaScript side).</p>

<p>To run the tests for Ruby in terminal:</p>
<p>$ cd ruby</p>
<o>$ rspec</p>

<p>Rspec version: 3.0.3</p>

<p>To run the tests for Javascript in a browser:</p>

<p>In Finder, go to the /javascript directory, and double-click the 'SpecRunner.html' file.</p>

<p>Jasmine version: 2.0.0</p>

