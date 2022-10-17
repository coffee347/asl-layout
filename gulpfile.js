'use strict';

let gulp = require('gulp');
let pug = require('gulp-pug');
let sass = require('gulp-sass')(require('sass'));


gulp.task( 'sass', function() {
    return gulp.src('stylesheet.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest('.'));
});

gulp.task('pug', function() {
    return gulp.src('index.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('.'))
})