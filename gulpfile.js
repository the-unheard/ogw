const gulp = require('gulp');
const replace = require('gulp-replace');
const version = Math.floor(Date.now() / 1000);

gulp.task('update-css-version', () => {
    return gulp.src(['*.html', 'clothings/*.html' ])
        .pipe(replace(/(\.(css|js)\?v=)\d+\b/g, `$1${Date.now()}`))
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
});

gulp.task('default', gulp.series('update-css-version'));