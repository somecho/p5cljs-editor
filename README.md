<div align="center">
  <img src="./assets/banner.png/">
</div>           

---
![GitHub package.json version](https://img.shields.io/github/package-json/v/p5cljs-editor/p5cljs-editor.github.io)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fp5cljs-editor%2Fp5cljs-editor.github.io%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/p5cljs-editor/p5cljs-editor.github.io/goto?ref=master)

Inspired by the wonderful [p5.js web editor](https://editor.p5js.org/). Now you write your p5 sketches using [ClojureScript](https://clojurescript.org/) in your browser! Try [the editor](https://p5cljs-editor.onrender.com/) out for yourself.

### Sharing your sketches
Every sketch is compiled right here in your browser and encoded in the URL. This makes your sketches instantly shareable. Simply copy the URL and share your sketches!

## Examples
See the [gallery](./gallery.md) of this repo. 

---

## Local development
To start developing locally, all you need is yarn. Clone the repo, install dependencies and start. This project is built with React + Vite. 
```
git clone https://github.com/somecho/p5-cljs-web-editor
cd p5-cljs-web-editor
yarn 
yarn dev
```

### Testing
Make sure the dev server is running at `http://localhost:5173` then `yarn test`.

### Compiling ClojureScript in the browser
The ClojureScript library for Clojure can, using `cljs.js/compile-str` compile itself (i.e. a string of valid ClojureScript). To leverage this _pretty cool_ fact, this editor uses the ClojureScript core library already compiled to JavaScript using [cljs-compiler-compiler](https://github.com/somecho/cljs-compiler-compiler). 

## Contributing 
Contributors are welcome. There are no concrete contributing guidelines right now. If you would like to contribute, you should 
1. Fork this repo
2. Create a branch from the **dev** branch
3. Make a pull request to the **dev** branch
4. Make sure your changes do not break anything. See [testing](#Testing)

## Disclaimer
This project is not affiliated with [p5.js](https://p5js.org/) or the [Processing Foundation](https://processing.org/).
