"use strict";


var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require("gulp-postcss");
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();


gulp.task('style', function() {
    return gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("serve",gulp.series('style', function() {
     server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", gulp.series("style"));
    gulp.watch("*.html").on("change", server.reload);
}));