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
- [Triangle abyss](https://p5cljs-editor.onrender.com/?sketch=dVPRTttAEHzPV4xaUdlAYmMUhEiFhChtkUBIJDwhHi7xJr7i%2BNy7c8Cf1N%2Fol3XvHCcO0JOi2N6d2dndudHfP0mcJBirJeEyU73RJJMGL0o%2Fg%2F9zOaPCUIqqSEnDZgRLemmg5v7l9nrS5gyA3ui70hCYqbI%2BhCHC18za0pxFkSo5R1V6RgOlF9EaYyImOB%2F0RhcPk59392ddGdeTm6szTLQUxSInXExrY9DHDyoqoWscHaIRXk2X0hipil4vSGmOycUDTgbJ6fHR6XAYNh8LlCqvF5wDfLonW%2BnCsM5cGus6Sb5hRdqyJt%2BYgKZFlQvdogafGPf4ihpapLIyKKpl38iU078wYG7I9l1EFOaJM4OcLB6NpRJB5PVs8kMON6eBIZhL7UV0SULHwjz983MEmvunjxgQLEWJz8E%2B9uCKhe9DBxxqqD8IepWrV1cGwa2wWTRTBnshmLHpkx8P8NqFds%2Bq7kCNLN5D63Ddyc5xNVf1U%2BhOu55Ui5f%2BetpwS6rYHJjSQhbjTJQUUZH6B1jlk737dtbjXvz0f5loC3Tag1QZ%2Bs11PWA9W1GWeQ3OdZsnVuTbdOBNKX6%2BvLkbX21l8iCrEo9tmZkmYelSFCthcBLH7teyFGpstXqm3R632KmYPS%2B04nuFBuPX4dZsNV%2B8YRxvJscu2Uc8iOM4GXrsUuZs3Xa4bXuy6xVHshl%2Bw22bVa%2FZhm%2FWaptt%2FifautXt2zcnDblM6XUlIZjc1n7%2F7Pc3YO0%2BB%2F2NLsgQR7spLG3fzftFpjbz9XfCrM2HM5KLzPr41lhO0Jwn4nKSIU8oYlmbGXS0ePWtyfxtxnF7PXbKBV07ep%2BG%2FwA%3D) by Somē 
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
