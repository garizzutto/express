
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// Utility to ignore unnecessary files
// when generating the glob patterns array for gulp.src()
function addDefSrcIgnore (srcArr) {
  return srcArr.concat([
    '!**/REMOVE{,/**}',
    '!node_modules{,/**}',
    '!private{,/**}',
    '!dist{,/**}',
    '!.git{,/**}',
    '!**/.DS_Store'
  ]);
}

// JavaScript and JSON linter
function lintJs () {
  return gulp.src(addDefSrcIgnore(['**/*.js', '**/*.json']), {dot: true})
    .pipe($.eslint({config: '.eslintrc.json', failOnError: true, dotfiles: true}))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

// HTML linter
function lintHtml () {
  return gulp.src(addDefSrcIgnore(['**/*.html']))
    .pipe($.htmllint({config: '.htmllintrc.json', failOnError: true}));
}

// function lintCss () {
//   return gulp.src(addDefSrcIgnore(['**/*.css']))
//     .pipe($.csslint({config: '.stylelintrc.json', failOnError: true}))
//     .pipe($.csslint.formatter());
// }

// Lint all files
exports.lint = gulp.parallel(
  lintJs,
  lintHtml,
  // lintCss
);