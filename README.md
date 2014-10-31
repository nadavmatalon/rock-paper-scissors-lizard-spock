#Rock • Paper • Scissors • Lizard • Spock

[![Code Climate](https://codeclimate.com/github/nadavmatalon/rock-paper-scissors-lizard-spock/badges/gpa.svg)](https://codeclimate.com/github/nadavmatalon/rock-paper-scissors-lizard-spock)

##Table of Contents

* [App Screenshot](#app-screenshot)
* [General Description](#general-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Install](#how-to-install)
* [How to Play](#how-to-play)
* [Browsers](#browsers)
* [Testing](#testing)
* [License](#license)


##App Screenshot

![Rock • Paper • Scissors • Lizard • Spock](javascript/public/images/screenshot.png)


##General Description

This app was written during week 6 of the course at 
[Makers Academy](http://www.makersacademy.com/) 
as an exercise in buiding a  
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) web app, 
using [jQuery](http://jquery.com) functionality and 
[TDD](http://en.wikipedia.org/wiki/Test-driven_development) 
methodology (tests were written with 
[Jasmine](http://jasmine.github.io/2.0/introduction.html)). 

The starting point for this mini-project was provided by Alex Peattie (a coach at Makers) 
and consisted of the back-end logic for the game of 
[rock-paper-scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors) written 
in two versions: one in [Ruby](https://www.ruby-lang.org/en/), 
and the other in [JavaScript](http://en.wikipedia.org/wiki/JavaScript).

Alex's original code can be found [here](https://github.com/alexmakers/rockpaperscissors),
whereas a refactored version of that code and tests is inluded in this repo.

Building and expanding on the [JavaScript](http://en.wikipedia.org/wiki/JavaScript) version 
of this code, the present app actualizes a more 
sophisticated iteration of the game which includes two additional characters: 
__lizard__ and __Spock__ (for more info see: 
[Wikipedia on Rock • Paper • Scissors • Lizard • Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock))

The app also gives players the option of playing in dual-mode against each other or 
in single-mode against the supercomputer 
[Deep Thought](http://en.wikipedia.org/wiki/Deep_Thought_(The_Hitchhiker%27s_Guide_to_the_Galaxy)#Deep_Thought).

  
##See it Live on Github
            
A live version of the app can be found (and played!) at:

[Rock-Paper-Scissors-Lizard-Spock on Github.io](http://nadavmatalon.github.io/rock-paper-scissors-lizard-spock/)


##How to Install

Clone the repo to a local folder and run the following commands in terminal:

```bash
$ cd rock-paper-scissors-lizard-spock
$ bundle install
$ shotgun
```

Then open the browser of your choice and go to:
```
http://localhost:9393/
```


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

(Source: [Wikipedia on Rock • Paper • Scissors • Lizard • Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock))

And now it's game time:

* __Single player mode:__ simply click on an image to make your choice 
([Deep Thought](http://en.wikipedia.org/wiki/Deep_Thought_(The_Hitchhiker%27s_Guide_to_the_Galaxy)#Deep_Thought) 
is very fast - it has alredy made its choice).

* __Dual player mode:__ each player should click on an image in turn and after the 
two choice are made, the result is shown on the screen.


##Browsers

This app has been tested with and supports the following browsers (though
it should hopefully look decent in other browsers as well):

* __Google Chrome__ (36.0)
* __Apple Safari__ (7.0.5)
* __Mozilla Firefox__ (31.0)


##Testing

Tests were written with [Rspec (3.0.3)](http://rspec.info) for the Ruby-side & 
[Jasmine (2.0.0)](http://jasmine.github.io/2.0/introduction.html) for the 
JavaScript-side.

To run the Rspec tests in terminal for the Ruby-side of 
'Rock • Paper • Scissors' use these commands:

```bash
$ cd rock-paper-scissors-lizard-spock/ruby
$ rspec
```

To run the Jasmine tests for the JavaScript-side of 
'Rock • Paper • Scissors' use these commands:

```bash
$ cd rock-paper-scissors-lizard-spock
$ open ./javascript/SpecRunner.html
```

To run the Jasmine tests for the JavaScript-side of 
'Rock • Paper • Scissors • Lizard • Spock' use these commands:

```bash
$ cd rock-paper-scissors-lizard-spock
$ open ./javascript/SpecRunner2.html
```


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>

