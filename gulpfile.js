'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
var rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('build-sass', () => {
    return gulp.src(['./styles/sass/main.scss', './styles/sass/newmedia320.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./styles/dist'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./styles/sass/*.scss', ['build-sass']);
});

gulp.task('gulp-uglify', () => {
    return gulp.src('./js/src/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./js/dist'))
});
gulp.task('js:watch', () => {
    gulp.watch('./js/src/*.js', ['gulp-uglify']);
});
gulp.task('default', ['build-sass', 'sass:watch', 'gulp-uglify', 'js:watch']);