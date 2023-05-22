<div align="center">
  <img src="./assets/banner.png/">
</div>           

---

Inspired by the wonderful [p5.js web editor](https://editor.p5js.org/). Now you write your p5 sketches using [ClojureScript](https://clojurescript.org/) in your browser! Try [the editor](https://p5cljs-editor.onrender.com/) out for yourself.

### Sharing your sketches
Every sketch is compiled right here in your browser and encoded in the URL. This makes your sketches instantly shareable. Simply copy the URL and share your sketches!

## Examples
- [Triangle Abyss](https://p5cljs-editor.onrender.com/?sketch=NwSoTADGYAQMoHsC2BTGBhAFggUMAKpgJYDOMA7ggE4DWMpMANkQMYoB2JKAJjAK7tuKKjAAumNKOFIyCAGZiJMALIBJfE1YcuAOhgw8AMWowAhjBYIADgE8ANDC5oAPJlGirJAFwB6H9e0EPio2HWoAcx9mNk4UEh81fAA%2BHTwAQQBVfAAJAHkAJS94ZDQsXAJ1ABkAUSL8KiJTdnDGNDSAIxsSMgBaGABxDj5TKhsYAEYHSGh4PnakUhIiBHYcHAAKIQV8TJgANh0wAA4AZnGjgFYLgEo1zZQ5dhgrBEYbcJWcfQAifJRRYKcMyaEiiGDyGBgAAiMAAbsJRFpZApzFQUOE%2BIwRs9Xu8Vjpvl8YABtAAeMDGVFM3CIfDI7D4SB6SyEZAAZOC5HIuKIelSaU0SABdInrVpg4mglBWGDrHwwHYZGAMpksuK3fSazXybn%2FWVyIhUUGc3W8%2FmNTjXEVa9Y9JJJWVU5poFXMoisjVam1IUwygDE6wAVDAAKSOKRWa6er36dY%2B%2F3rADUoZNPKjRJjsvjMAD4pJsPJtod62UpnEPksZBD11lwfNdJrSZgpPTmbbMdhYyLstL5aWT2rtZg9ZIjeTNij1vbmeJBbhNiFUaXdy2T24VPIPRebw%2BTyJ3zpcRg7XRRHYcEwvpQPg43AvV7ECBg69M5EUaG3ePYBKJxM%2FU%2FWAAreIT3CM97ysFBPU2BAuAAR3zHE3inWNfSsN4YGAnx4SoKRyVhVtZSw28ILQLD0EqXI4GqdMNlXRx%2Fj4GViQArCWDRMsUHQJpYVMMg9ggCB9kE6CsPYBA4FEKgEBoKDbjoh41w3ElWJA0wWBocJpIEXgIGgvNiVdKSGAuQSMy9MEgxgCAdEEqALiI%2BIFkYZhRytcyYPgkkiEdJpwhdRkemM0cUM1MU9WJURCztMQhxsm5o3bUQuxiyzg3iwjpx1HlZRioD4nE0g0CsnybMEsAayisQJyHRVMvbEQrNtZVAuC%2Bga3GRK20LYMsPId1xGsnQbnMtsu16%2BIJCIcI3CGm5QptLCDRcocwCuWV5R8oyGjcrqwryz9d2bClhxgE5U3%2BPaY02Dct1xXclyXIA%3D) by Somē 
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
