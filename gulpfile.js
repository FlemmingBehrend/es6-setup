const gulp = require('gulp');
const del = require('del');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('default', ['build']);

gulp.task('build', ['clean'], () => {
    return gulp.src(['src/**/*.js', '!src/**/*.spec.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        // .pipe(uglify({mangle: false, compress: {drop_console: true}}))
        // .pipe(sourcemaps.write())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return del(['dist']);
});