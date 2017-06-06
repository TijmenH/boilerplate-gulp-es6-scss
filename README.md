# Boilerplate
Boilerplate for new project set-up with gulp, webpack and more.
Tried keeping it minimal as possible, but still comfortable enough in order to not do a lot yourself.

Boilerplate for building webapps, using;
* Gulp to convert scss to css, combine and minify.
* Webpack to convert ES6 to ES5 and combines, future: minify.
* Npm-watch for watching for file changes and running npm script.
* In the future: Scss & es6 linters
* Probably more (in the future)...

## How to use
1. Install all packages by running 'npm i'
2. Run 'npm run build' from terminal to build everything or 'npm run watch' to watch for changes (and build, initially).
3. Run 'npm run dev-server' to locally run a php server (mac)
4. Visit localhost, if notice text appears green; all is probably ok!
5. For a clean project, remove: 'fe/src/js/components' (but NOT app.js!), 'fe/src/scss/components', 'fe/src/scss/config' (but NOT main.scss!) and 'html/assets'.

## Notes
- 'gulp-sass-glob' makes it possible all scss files in the components folder are imported automatically. Because the file order is important in css (and therefore some people choose to import everything manually, for me automatically works), you might want to remove this.
