var version = '0.0.1'

var gulp = require('gulp')
var rename = require('gulp-rename')
var jsImport = require('gulp-js-import')
var babel = require('gulp-babel')
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify')
var pump = require('pump')
var through = require('through2')

function logFileHelpers() {
  return through.obj((file, enc, cb) => {
    console.log(file.babel.usedHelpers);
    cb(null, file);
  });
}

gulp.task('stylus', function (cb) {
  pump([
    gulp.src('./src/css/*.styl'),
    stylus(),
    rename('main.css'),
    gulp.dest('dist')
    ],
    cb
  )
});

gulp.task('watch', function () {
  gulp.watch('./src/css/*.styl', ['stylus']);
});

gulp.task('default', function (cb) {
  pump([
      gulp.src('src/js/index.js'),
      jsImport(),
      babel({
        presets: ['env', 'stage-3']
      }),
      uglify(),
      rename('main.js'),
      gulp.dest('dist'),
      logFileHelpers()
    ],
    cb
  )
})
