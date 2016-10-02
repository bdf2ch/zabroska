"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
//var minify = require("gulp-minify");

gulp.task("js", function () {
    return gulp.src(["modules/*/*.js", "modules/*/*/*.js"])
        .pipe(concat("source.min.js"))
        .pipe(uglify())
        //.pipe(minify())
        .pipe(gulp.dest("dist/js/"));
});

var watcher = gulp.watch(["modules/*/*.js", "modules/*/*/*.js"], ["js"]);
watcher.on("change", function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});