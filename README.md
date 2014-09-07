#Rock • Paper • Scissors • Lizard • Spock

##Table of Contents

* [App Screenshot](#app-screenshot)
* [General Description](#general-description)
* [How to Play](#how-to-play)
* [See it Live on Heroku](#see-it-live-on-heroku)
* [Browsers](#browsers)
* [Testing](#testing)
* [License](#license)


##App Screenshot

![Rock • Paper • Scissors • Lizard • Spock](javascript/public/images/screenshot.png)


##General Description

This app was created as an exercise in buiding a complete 
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) web application, 
using [jQuery](http://jquery.com) functionality and 
[TDD](http://en.wikipedia.org/wiki/Test-driven_development) 
methodology (tests were written with 
[Jasmine](http://jasmine.github.io/2.0/introduction.html)). 

The starting point for this project was provided by Alex Peattie (a coach at Makers) and 
consisted of a sample code both in [Ruby](https://www.ruby-lang.org/en/) 
and [JavaScript](http://en.wikipedia.org/wiki/JavaScript) 
for the original game, [rock-paper-scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock) 
(Alex's code can be found [here](https://github.com/alexmakers/rockpaperscissors)).

The present app actualizes a slightly more sophisticated version of the game which includes 
two additional characters: __the lizard__ and __Spock__.

The app also gives the option of playing the game either with two players or against the 
supercomputer [Deep Thought](http://en.wikipedia.org/wiki/Deep_Thought_(The_Hitchhiker%27s_Guide_to_the_Galaxy)#Deep_Thought).


##How to Play

* First, select game mode: __Player vs Deep Thought__ or __Player vs Player__

* Next, enter name/s of player/s

* For those who haven't played the game before, here's a quick overview of the rules:
    *  Scissors __cut__ Paper
    *  Paper __covers__ Rock
    *  Rock __crushes__ Lizard
    *  Lizard __poisons__ Spock
    *  Spock __smashes__ Scissors
    *  Scissors __decapitate__ Lizard
    *  Lizard __eats__ Paper
    *  Paper __disproves__ Spock
    *  Spock __vaporizes__ Rock
    *  Rock __crushes__ Scissors

(Source: [Wikipedia on Rock Paper Scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock))

And now it's game time:

* If in single player mode: simply click on an image to make your choice 
([Deep Thought](http://en.wikipedia.org/wiki/Deep_Thought_(The_Hitchhiker%27s_Guide_to_the_Galaxy)#Deep_Thought) 
is very fast - it has alredy made its choice).

* If in dual player mode: each player should click on an image in turn and after the 
two choice are made, the result is shown on the screen.


##See it Live on Heroku
			
A live version of the game can be found (and played!) at:

http://makers-rock-paper-scissors.herokuapp.com

As I'm using Heroku's free hosting service, the app may take a bit of time to upload<br/>
(Heroku's giros take time to wake up...), so please be patient.


##Browsers

This app has been tested with and supports the following browsers (though
it should hopefully look decent in other browsers as well):

* __Google Chrome__ (36.0)
* __Apple Safari__ (7.0.5)
* __Mozilla Firefox__ (31.0)


##Testing

Tests were written with [Rspec (3.0.3)](http://rspec.info) for the Ruby-side & 
[Jasmine (2.0.0)](http://jasmine.github.io/2.0/introduction.html)for the 
JavaScript-side.

To run the Rspec tests in terminal for the Ruby-side:

```bash
$ cd ruby
$ rspec
```

To run the Jasmine tests in a browser for the Javascript-side:

* In 'Finder', go to the `/javascript` directory, and double-click the `SpecRunner.html` file.


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>
