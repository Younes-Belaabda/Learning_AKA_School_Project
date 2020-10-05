const {src,dest} = require('gulp');
const sass = require('gulp-sass');
// const jade = require('gulp-jade');
const pug = require('gulp-pug');

/* Moving Main Sass File From Staging Folder To Distribution Folder */
const fn_sass = function() {
    return src('./stage/sass/main.scss')
           .pipe(sass({outputStyle: 'compressed'}))
           .pipe(dest('./dist/css'));
}

/* Moving Pug Files From Staging Folder To Distribution Folder */
const fn_pug = function() {
    return src('./stage/pug/Pages/*.pug')
           .pipe(pug({pretty : true}))
           .pipe(dest('./dist/html'));
}

/* Moving Pug & Sass Files Twice */
const fn_ps = async function() {
    await fn_pug();
    fn_sass();
}


/* Exporting Tasks */
exports.fn_sass = fn_sass;
// exports.fn_jade = fn_jade;
exports.fn_pug = fn_pug;
exports.fn_ps = fn_ps;
