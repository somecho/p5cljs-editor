## 0.11.0
- restyled the UI with Chakra UI
### New Features
- added a 'sketch' dropdown menu to navbar where start and stop is also available

## 0.10.0
### New Features
- Start and Stop keymaps added! Alt+Enter to start a sketch and Alt+Shift+Enter to stop
 
## 0.9.0
- added changelog to the web editor for users to track changes

## 0.8.6
- added `.node-version` for compatibility with Render
 
## 0.8.5
### Code Changes
- write integration test for the app components with Puppeteer
### Bug Fixes
- [c74a398](https://github.com/somecho/p5-cljs-web-editor/commit/c74a398be5adf0994de169dc98f74d73c66af173) running a valid sketch after running an invalid sketch ([#35](https://github.com/somecho/p5-cljs-web-editor/issues/35)) now produces a valid canvas
- [06cf328](https://github.com/somecho/p5-cljs-web-editor/commit/06cf328bc38b49669e166b2cccc9e70b69dce5d9#diff-9b236b1937ff5f05a6b5fc3f2e8617684bf19d961b50c44529684d70651dc592R43) a sketch will not be created when the user's code does not compile

## 0.8.4
### Code Changes
- refactor code for testability and less mutability

## 0.8.3
### Code Changes
- setup Jest for testing

## 0.8.0
### Breaking Changes
- sketches now use deflate compression. Old sketches will break when shared.

## 0.7.2
### Code Changes
- using new cljs-compiler-compiler build, which returns any errors encountered
- if error is encountered, prevent sketch from starting and print error to console

## 0.7.1
### Code Changes
- move article related css to custom components
 
## 0.7.0
### New Features
- p5 structure and event functions like preload, mouseClicked, touchStarted are now available
### Code Changes
- functionality related to p5 and sketch is moved to /src/lib/p5
- lz-string is moved to /src/lib/LZString
### Bug Fixes
- fix repeated import of p5 which causes warning in console

## 0.6.0
### Breaking Changes
- sketches now use LZString compression for URL encoding. Old sketches will break when shared. 
