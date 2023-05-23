# 0.8.0
## Breaking Changes
- sketches now use deflate compression. Old sketches will break when shared.

# 0.7.2
## Code Changes
- using new cljs-compiler-compiler build, which returns any errors encountered
- if error is encountered, prevent sketch from starting and print error to console

# 0.7.1
## Code Changes
- move article related css to custom components
 
# 0.7.0
## New Features
- p5 structure and event functions like preload, mouseClicked, touchStarted are now available
## Code Changes
- functionality related to p5 and sketch is moved to /src/lib/p5
- lz-string is moved to /src/lib/LZString
## Bug Fixes
- fix repeated import of p5 which causes warning in console

# 0.6.0
## Breaking Changes
- sketches now use LZString compression for URL encoding. Old sketches will break when shared. 
