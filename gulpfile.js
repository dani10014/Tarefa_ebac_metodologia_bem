const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}
function watchFiles() {
    gulp.watch('src/css/**/*.scss', compilaSass)
}

exports.default = gulp.series(compilaSass,watchFiles);
