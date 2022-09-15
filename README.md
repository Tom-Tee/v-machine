# README
# Vending Machine Challenge


![UI - Home](docs/home.png)

This application was built with
```
Raw HTML, Bootstrap & JavaScript
```

## Live site:

[Github Pages](https://tom-tee.github.io/vending-machine/)

## Setup

Please see the attached files.


##  Thoughts and takeaways

My initial feeling on receving the challenge was that I needed to create a front-end that would work with basic programming to model a Vending Machine. As the data did not need to be persisted I decided to use raw JavaScript and HTML as I felt that I'd be able to create something fairly quickly (as I did not have a lot of time to build the program).

The app runs through a main function (vendingMachine) that then tails off down two paths, one for money input and the other for purchasing.

I decided to store data in an object (JSON style) and pull the information out. This means that I could update the quanities and prices very easily coupled more implementations to the front end if the application were to be expanded on or improved.

I am also aware that I am not displaying the amount given from the card payment on the front. Yet again, this would be an easy fix given more time and some extra engineering.

## Tests

Unfortunately I did not write any tests for this as the majority of my approach was to do with DOM Manipulation. Given more time I would have written some DOM tests in the Jest testing framework. I am aware however of TDD and am an advocate of this approach normally.

## Final Thoughts

Ultimately it would be good to refactor some of the naming conventions to be clearer on certain variables and to follow more of a pattern or structure (e.g. MVC for example). Given more time/another attempt I would have approached it this way more closely.
