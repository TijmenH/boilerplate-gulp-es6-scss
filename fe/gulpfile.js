/**
* @NOTE
* Almost all es6 syntax is by default supported, just not 'import'.
* to keep it clean and also in case it will soon be supported, just using require here.
*/
const gulp = require('gulp');
const print = require('gulp-print');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob'); // For using global import for sass files
const minifyCss = require('gulp-minify-css');

// Vars
const suffixMin = {suffix: '.min'};

// Functions
const destBuildCmd = () => gulp.dest('../html/assets'); // Target folder for script and style

// @TODO bundle, minify and convert .scss files
gulp.task('scss', () => {
	return gulp.src('src/scss/main.scss')
		.pipe(print())
		.pipe(sassGlob())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(destBuildCmd())
		.pipe(rename(suffixMin))
		.pipe(minifyCss())
		.pipe(destBuildCmd());
})

gulp.task('build', ['scss']);

// gulp.task('watch', () => gulp.watch('src/**/*.*', ['build']));
gulp.task('default', ['build']);
