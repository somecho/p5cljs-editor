/** @module cljs 
 * This module depends on the cljs compiler to be made available
 * via a global script. Due to the way the cljs runtime works, this
 * is the only way to make it available to the application.
 *
 * For more info: https://github.com/thheller/shadow-cljs/issues/1118
 */

/** @type {{compile: (source:string)=>(string|{name: string, cause: { message:string, name: string, stack: string}, stack: string, message: string }), user: {}}
 */
export const cljs = window.cljs
export const defaultSketch = `(defn setup []
  (js/createCanvas 400 400))
(defn draw []
  (js/background 220))`
