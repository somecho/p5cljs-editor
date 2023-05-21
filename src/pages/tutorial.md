# Tutorial

Hi! Nice to see that you want to learn more about ClojureScript. Firstly, you
should know how to write p5 sketches before doing this quick tutorial.
Otherwise, you should checkout p5's own [getting started
tutorial](https://p5js.org/get-started/).

This is a super quick tutorial to get you started writing p5 sketches in
ClojureScript and learn more about the Clojure/ClojureScript language.

## Basics

ClojureScript is a Clojure library that compiles ClojureScript into JavaScript.
And Clojure is a dialect of Lisp, a family of languages characterized by the use
of _S-expressions_ (lots of parentheses). Let's take a look at what this looks like.

#### Some arithmetic operations in Clojure
```clj
(+ 1 1)
(+ 2 4 6 8 10)
(/ (* 100 0.5) 100)
```

#### Its equivalent in js
```js
1 + 1
2 + 4 + 6 + 8 + 10
100 * 0.5 / 100
```

### Defining functions

The next thing you might want to do is define your own functions to do some
work. You would use the `defn` macro for this.

#### Defining a function in clojure
```clj
(defn add [a b]
  (+ a b))

(add 100 10) ;returns 110
```
It's important to note that the last expression that gets evaluated in the
function, is the value that gets returned from the function.

### Defining variables

In JavaScript, it's common to define a bunch of global variables at the
beginning of the sketch for use later.

```js
const PI = 3.1415
const TAU = PI * 2.0
const NUM_ROWS = 999999
const NUM_COLS = 999999
```

To do this in Clojure, you would use `def`.

```clj
(def PI 3.1415)
(def TAU (* PI 2.0))
(def NUM_ROWS 999999)
(def NUM_COLS 999999)
```
Like the JavaScript equivalent, these are constants and are immutable! You
cannot change the values of these constants.

### Defining atoms

Sometimes you need a variable that gets mutated for keeping track of some kind
of value.

```js
let count = 0
lotsOfItems.forEach(item=>{
        doSomething(item)
        count++
})
```
This is where atoms come in. They are a special kind of variable that is
mutable. Take a look at this example, which also uses a `for` and `let`.

```clj
(let [count (atom 0)]
  (for [item lotsOfItems]
    (doSomething item)
    (swap! count inc)))
```
The `let` block makes the variable `count`, which is an atom with a value of 0,
available for the rest of the expression. Within this block, the `for` expression
iterates over `lotsOfItems`. We're using it like a for-loop in thise case. Finally,
at the end, we `inc` (increment) the value of count using `swap!`. `swap!`
takes as its arguments an atom and a function. It applies the function to the
value of the atom and replaces it with the result.

I know this sounds a bit strange. Why are we making a mutable variable so hard
to mutate? It's to ensure that _when_ you are actually mutating something, you
do it deliberately and not by accident.

#### Some articles on these topics:
- [Explain Clojure's for line by line](https://medium.com/swlh/explain-clojures-for-line-by-line-422f18b253d7)
- [Clojure Let](https://clojuredocs.org/clojure.core/let)
- [Clojure Atoms](https://clojuredocs.org/clojure.core/atom)

### Using JS functions

Now we come to the fun part! How do we call JavaScript functions from
ClojureScript? If you've seen the default sketch here, then you'll notice that
every p5 function call is prefixed with `js/`.

```clj
(defn draw []
  (js/background 0)
  (js/fill 255 0 0)
  (js/noStroke)
  (js/circle 200 200 200))
```
Everything you would normally call as a function from p5 will work like this.
Of course, there are more ways to work with JavaScript, including objects and
classes.

#### Instantiating a class in js
```js
console.log(new Date())
```
#### Instantiating a js class in cljs
```clj
(js/console.log (js/Date.)) ; class is postfixed with a period
```

For more information about interoperability with JavaScript, I recommend
reading [this
article](https://lwhorton.github.io/2018/10/20/clojurescript-interop-with-javascript.html).

### Conclusion

That's it for this quick primer on ClojureScript! You should now know _just_
enough to begin creating some sketches in ClojureScript. Obviously, you won't
be creating the next [Tyler Hobbs
masterpiece](https://tylerxhobbs.com/essays/2015/using-quil-for-artwork). But
hopefully, this little bit of information will get you going and you'll find
out more about Clojure as you create.

#### If you'd like to deepen your understanding of Clojure, I recommend looking into the following topics:
- control flow
- map & apply
- hashmaps
- higher order functions
- `->` (thread) macro
