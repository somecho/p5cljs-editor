<div align="center">
  <img src="./assets/banner.png/">
</div>           

---

Inspired by the wonderful [p5.js web editor](https://editor.p5js.org/). Now you write your p5 sketches using [ClojureScript](https://clojurescript.org/) in your browser! Try [the editor](https://p5cljs-editor.onrender.com/) out for yourself.

### Sharing your sketches
Every sketch is compiled right here in your browser and encoded in the URL. This makes your sketches instantly shareable. Simply copy the URL and share your sketches!

## Examples
- [Triangle Abyss](https://p5cljs-editor.onrender.com/?sketch=O6kyMDIyIFNvbWUgQ2hvCjtUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS4gIAo7Rm9yIGEgY29weSwgc2VlIDxodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVD4uCjtBVVRIT1I6IFNvbWUgQ2hvCjtUSVRMRTogVHJpYW5nbGUgQWJ5c3MgLSBHZW51YXJ5IDEsIDIwMjIgU3VibWlzc2lvbgoKKGRlZiBUQVUgNi4yODMxODU1KQoKKGRlZm4gcG9seWdvbgogICJSZXR1cm5zIGEgbGlzdCBvZiAyRCB2ZXJ0aWNlcyBvZiBhIHJlZ3VsYXIgcG9seWdvbi4iCiAgW3ggeSByYWRpdXMgbnVtLXNpZGVzICYgb2Zmc2V0LXJhZGlhbnNdCiAgKGxldCBbc3RlcCAoLyBUQVUgbnVtLXNpZGVzKQogICAgICAgIG9mZnNldCAoZmlyc3Qgb2Zmc2V0LXJhZGlhbnMpXQogICAgKC0%2BPiAocmFuZ2UgbnVtLXNpZGVzKQogICAgICAgICAobWFwICMoKiAlIHN0ZXApKQogICAgICAgICAobWFwICMoKyAlIG9mZnNldCkpCiAgICAgICAgIChtYXAgIyhsZXQgW3Z4ICgtPiAoTWF0aC9jb3MgJSkgKCogcmFkaXVzKSAoKyB4KSkKICAgICAgICAgICAgICAgICAgICAgdnkgKC0%2BIChNYXRoL3NpbiAlKSAoKiByYWRpdXMpICgrIHkpKV0KICAgICAgICAgICAgICAgICBbdnggdnldKSkpKSkKCihkZWZuIGRyYXctcG9seWdvbiAKICAidXNlcyBiZWdpblNoYXBlL2VuZFNoYXBlIHRvIGRyYXcgdGhlIHBvbHlnb24uIgogIFtwb2x5XQogIChqcy9iZWdpblNoYXBlKQogIChkb3NlcSBbdiBwb2x5XQogICAgKGFwcGx5IGpzL3ZlcnRleCB2KSkKICAoanMvZW5kU2hhcGUganMvQ0xPU0UpKQoKKGRlZm4gc2V0dXAgW10KICAoanMvY3JlYXRlQ2FudmFzIDYwMCA2MDApCiAgKGpzL25vU3Ryb2tlKSkKCihkZWZuIGRyYXcgW10KICAoanMvYmFja2dyb3VuZCAwKQogIChsZXQgW251bS10cmlzIDUwMAogICAgICAgIHQgKCogMC4wMDAyNSAoanMvbWlsbGlzKSldCiAgICAoZG9zZXEgW2kgKHJhbmdlIG51bS10cmlzKV0KICAgICAgKGxldCBbdHggKC0%2BIHQgKCogMC41KSkKICAgICAgICAgICAgdHkgKC0%2BIHQgKCogMC41KSkKICAgICAgICAgICAgb2Zmc2V0ICgtPiAoanMvbm9pc2UgKCogaSAwLjAwMikgdHggdHkpICgqIFRBVSkpCiAgICAgICAgICAgIHIgKCogKC0gbnVtLXRyaXMgaSkgMSkKICAgICAgICAgICAgeCAoKiBqcy93aWR0aCAwLjUpCiAgICAgICAgICAgIHkgKCoganMvaGVpZ2h0IDAuNSldCiAgICAgICAgKGpzL2ZpbGwgKCogMjU1ICgvIGkgbnVtLXRyaXMpKSkKICAgICAgICAoLT4gKHBvbHlnb24geCB5IHIgMyBvZmZzZXQpCiAgICAgICAgICAgIChkcmF3LXBvbHlnb24pKSkpKSk%3D) by Somē 
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
