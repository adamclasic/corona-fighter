<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/adamclasic/corona-fighter">
    <img src="./images/logo.png" alt="Logo" width="200" height="100">
  </a>

  <h3 align="center">JavaScript / Phaser 3 [Corona Fighter]</h3>

  <p align="center">
    This project is built with Phaser 3, a very complex framework to build HTML5 and desktop games using JavaScript!
    <br />
    <a href="https://github.com/adamclasic/corona-fighter"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/adamclasic/corona-fighter/issues">Report Bug</a>
    ·
    <a href="https://github.com/adamclasic/corona-fighter/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Walkthrough Video and Deployment (GitHub-Pages)](#walkthrough-video-and-deployment-(gitHub-pages))
* [Usage](#usage)
* [Contributors](#contributors)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

An RPG video game runs on HTML5 canvas built using Javascript and the game engine Phaser 3.
In this particular game the action is mainly focused on collecting as many stars as possible while having to combat against viruses.

### How to Play

![screenshot](./images//commands.png)

The game can be played using the arrow keys for moving the player and  for attacking the viruses.
By moving the player you will be able to collect chests that contain stars. Each star will update the score with 1 units.
As a bonus though, for each virus killed the player will recieve 10 units.

### Design Process

Fatal Warrior was designed on an initial, quite complex, webpack configuration specific for Phaser3. This allowed me to investigate Phaser and its tools from a specific perspective. The entire map was built with Tiled on a 32 x 32 collection of squares. The map then has been exported as a json file and used for placing chests, and monsters at random positions.

The player has a set velocity and can move across the map by using the arrow keys. Each time the player dies it will be spawned at a different random position to make the game more interesting. The monsters and the chests will be as well randomly generated and spawned on the map. Each spawned element has a random unique id used to interact with the user. The unique id is generated with the help of uuid npm package.

### Built With
This project was built using these technologies.
* JavaScript
* Phaser3
* Webpack
* Jest Tests
* Tiled Map
* GithubActions :muscle:
* Atom :atom:

<!-- Live Demo -->
##
* Live Demo Link --> App Deployed with GitHub-Pages: [Corona Fighter](https://rawcdn.githack.com/adamclasic/corona-fighter/79d428e1a6c6f38fb50465a9fbb7d237d4fbb86a/dist/index.html/) :point_left:

## Screenshots
![screenshot-2](./images/feature.png)
![screenshot-1](./images/gameplay.gif)

### Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

 * [Node.js](https://nodejs.org/) is required to install dependencies and run scripts via npm.
 * A modern browser

### Clone
* [download](https://github.com/adamclasic/corona-fighter/archive/development.zip) or clone this repo:
  - Clone with SSH:
  ```
    git@github.com:adamclasic/corona-fighter.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/adamclasic/corona-fighter.git

### Setup

Install dependencies:

```
$ npm install
```

Start the local webserver:

```$ npm start``` > will open a local webserver at http://localhost:8080/ directly in your default browser with the game ready to be played

  ## Automated Test

* Run the command and see the output:
```$ npm run test```


 ## Potential future features
- Extend the game to a multiplayer online game
- Add authentication process

<!-- CONTACT -->
## Contributors

👤 **Adam Abderrahmane Allalou**

- Github: [@adamclasic](https://github.com/adamclasic)
- Twitter: [@adamallalou](https://twitter.com/adamallalou)
- Linkedin: [Adam Abderrahmane Allalou](https://linkedin.com/adam-allalou)
- Project [Link](https://github.com/adamclasic/corona-fighter/)

## :handshake: Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/adamclasic/corona-fighter/issues).

## Show your support

Give a :star: if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [SFX effects](https://opengameart.org/) - OpenGameArt website
* [Phaser3](https://phaser.io/phaser3) & [Phaser Template](https://github.com/rammazzoti2000/phaser_toolbox)
* [Sprites and Tiles](https://github.com/adamclasic/) - adamclasic


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/adamclasic/corona-fighter.svg?style=flat-square
[contributors-url]: https://github.com/adamclasic/corona-fighter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adamclasic/corona-fighter.svg?style=flat-square
[forks-url]: https://github.com/adamclasic/corona-fighter/network/members
[stars-shield]: https://img.shields.io/github/stars/adamclasic/corona-fighter.svg?style=flat-square
[stars-url]: https://github.com/adamclasic/corona-fighter/stargazers
[issues-shield]: https://img.shields.io/github/issues/adamclasic/corona-fighter.svg?style=flat-square
[issues-url]: https://github.com/adamclasic/corona-fighter/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
