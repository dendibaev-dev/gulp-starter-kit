const gulp = require("gulp");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

module.exports = function script(cb) {
  gulp
    .src("src/js/main.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("build/js"));

  return cb();
};
