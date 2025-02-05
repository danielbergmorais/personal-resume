const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function compilaMainSass() {
    return gulp
    .src('assets/scss/main/*.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(
        postcss([
        autoprefixer({
        cascade: false
    })]))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

function compilaPluginSass() {
    return gulp
    .src([
        'assets/scss/plugins/ihover.min.scss',
        'node_modules/featherlight/release/featherlight.min.css',
        'node_modules/featherlight/release/featherlight.gallery.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(
        postcss([
        autoprefixer({
        cascade: false
    })]))
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

function gulpJS() {
    return gulp
            .src('assets/js/main/*.js')
            .pipe(concat('main.js'))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'))
            .pipe(browserSync.stream())
}

function pluginJS() { 
    return gulp
    .src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/featherlight/release/featherlight.min.js',
        'node_modules/featherlight/release/featherlight.gallery.min.js',
        'node_modules/vanilla-lazyload/dist/lazyload.min.js',
        './assets/js/plugins/cmdtype.js',
        './assets/js/plugins/code.js'
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('dist/js/'))
}

function browser() {
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
}

function icons() {
    return gulp
        .src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))

}

function watch () {
    gulp.watch('assets/scss/main/*.scss', compilaMainSass)
    gulp.watch('assets/scss/plugins/*.scss', compilaPluginSass)
    gulp.watch('assets/js/main/*.js', gulpJS)
    gulp.watch('assets/js/plugins/*.js', pluginJS)
    gulp.watch('*.html').on('change', browserSync.reload)
}

exports.sass = compilaMainSass
exports.sassPlugins = compilaPluginSass
exports.browser = browser
exports.gulpJS = gulpJS
exports.pluginJS = pluginJS
exports.icons = icons
exports.watch = watch

exports.default =  gulp.parallel(watch, pluginJS, gulpJS, compilaMainSass, compilaPluginSass, browser, icons)