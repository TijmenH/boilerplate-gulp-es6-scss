# Boilerplate
Boilerplate for new project set-up with gulp, webpack and more.
Tried keeping it minimal as possible, but still comfortable enough in order to not do a lot yourself.

Boilerplate for building webapps, using;
* Gulp to convert scss to css, combine and minify.
* Webpack to convert ES6 to ES5 and combines, future: minify.
* In the future: Watching for file changes.
* Probably more

## How to use
1. Install all packages by running 'npm i'
2. Run 'npm run build' to build everything
3. Run 'npm dev-server' to locally run a php server (mac)
4. Visit localhost to see everything working

## Notes
- 'gulp-sass-glob' makes it possible all scss files in the components folder are imported automatically. Because the file order is important in css (and therefore some people choose to import everything manually, for me automatically works), you might want to remove this.
