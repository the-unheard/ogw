const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('update-css-version', () => {
    return gulp.src(['*.html', 'clothings/*.html' ])
        .pipe(replace(/(\.(css|js)\?v=)\d+\b/g, `$1${Date.now()}`))
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
});

gulp.task('apply-meta', () => {
   const metaContent = require('fs').readFileSync('includes/meta.html', 'utf8');

   return gulp.src(['*.html'])
       .pipe(replace(/<!-- region META -->([\s\S]*?)<!-- endregion END META -->/, metaContent))
       .pipe(gulp.dest((file) => {
           return file.base;
       }));
});

gulp.task('apply-meta-inner', () => {
    const metaContent = require('fs').readFileSync('includes/meta_inner.html', 'utf8');

    return gulp.src(['clothings/*.html'])
        .pipe(replace(/<!-- region META -->([\s\S]*?)<!-- endregion END META -->/, metaContent))
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
});

gulp.task('default', gulp.series('update-css-version', 'apply-meta', 'apply-meta-inner'));