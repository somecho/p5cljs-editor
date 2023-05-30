<div align="center">
  <img src="./assets/banner.png/">
</div>           

---
![GitHub package.json version](https://img.shields.io/github/package-json/v/p5cljs-editor/p5cljs-editor.github.io)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fp5cljs-editor%2Fp5cljs-editor.github.io%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/p5cljs-editor/p5cljs-editor.github.io/goto?ref=master)

Inspired by the wonderful [p5.js web editor](https://editor.p5js.org/). Now you can write p5 sketches using [ClojureScript](https://clojurescript.org/) in your browser! The p5.cljs editor features:
- 100% client side compiling (no server needed)
- third-party extensibility via adding CDN's
- anonymously shareable sketches

Get started writing p5 sketches in the [p5.cljs editor](https://p5cljs-editor.github.io/).


## Examples
There is a growing collection of tutorials and sketches. Have a look at them at [the gallery](./gallery.md). Tutorials and sketches are open for community contributions. To contribute, simply modify `gallery.md` by adding a title with a link and your name. Please keep in mind that list is sorted alphabetically by title.

## How your sketches are made shareable
By opting out of the use of a database, the p5.cljs editor takes a different approach. It uses the URL as persistent data structure. All assets are encoded with the deflate algorithm and appended to the URL as a parameter. This means, after running your sketch, all you need to do is copy the link and share it.

This approach does impose limitations, such as the fact that sketches have limited lengths based on the length of the resulting encoded URL. It also means that data such as image, audio and font files cannot be used shareably. To use these features, it is recommended to try p5.cljs locally on your system. 

## Local development
The entire editor is made using React. All you need is yarn. Clone the repo, install dependencies and start.
```
git clone https://github.com/somecho/p5-cljs-web-editor
cd p5-cljs-web-editor
yarn 
yarn dev
```
### Testing
Jest is the test runner used for this project and Puppeteer the main framework. To test, make sure the dev server is running at `http://localhost:5173` then `yarn test`. Alternatively, if you are on a Linux environment, you can run the tasks in parallel like so `yarn dev & yarn test`. The Github Action that tests the project uses the latter.

## Compiling ClojureScript in the browser
The ClojureScript library for Clojure can, using `cljs.js/compile-str` compile itself (i.e. a string of valid ClojureScript). To leverage this _pretty cool_ fact, this editor uses the ClojureScript core library already compiled to JavaScript using [cljs-compiler-compiler](https://github.com/somecho/cljs-compiler-compiler). 

## Contributing 
Contributors are welcome. There are no concrete contributing guidelines right now. If you would like to contribute, you should 
1. Fork this repo
2. Create a branch from the **dev** branch
3. Make a pull request to the **dev** branch
4. Make sure your changes do not break anything. See [testing](#Testing)

## Disclaimer
This project is not affiliated with [p5.js](https://p5js.org/) or the [Processing Foundation](https://processing.org/).
