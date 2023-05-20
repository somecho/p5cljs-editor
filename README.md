<div align="center">
  <img src="./assets/banner.png/">
</div>           

---

Inspired by the wonderful [p5.js web editor](https://editor.p5js.org/). Now you write your p5 sketches using [ClojureScript](https://clojurescript.org/) in your browser! Try [the editor](https://p5cljs-editor.onrender.com/) out for yourself.

### Sharing your sketches
Every sketch is compiled right here in your browser and encoded in the URL. This makes your sketches instantly shareable. Simply copy the URL and share your sketches!

---

## Local development
To start developing locally, all you need is yarn. Clone the repo, install dependencies and start. This project is built with React + Vite. 
```
git clone https://github.com/somecho/p5-cljs-web-editor
cd p5-cljs-web-editor
yarn 
yarn dev
```

### Compiling ClojureScript in the browser
The ClojureScript library for Clojure can, using `cljs.js/compile-str` compile itself (i.e. a string of valid ClojureScript). To leverage this _pretty cool_ fact, this editor uses the ClojureScript core library already compiled to JavaScript using [cljs-compiler-compiler](https://github.com/somecho/cljs-compiler-compiler). 

## Contributing 
Contributors are welcome. There are no concrete contributing guidelines right now. If you would like to contribute, you should 
1. Fork this repo
2. Create a branch from the **dev** branch
3. Make a pull request to the **dev** branch

## Disclaimer
This project is not affiliated with [p5.js](https://p5js.org/) or the [Processing Foundation](https://processing.org/).
