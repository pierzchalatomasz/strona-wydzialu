var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

var paths = {
    css: 'src/assets/css/*.css',
    html: 'src/*.html'
};

gulp.task('minify-css', function () {
    return gulp.src('src/assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('assets/css'))
});


gulp.task('minify-html', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch(paths.css, ['minify-css']);
    gulp.watch(paths.html, ['minify-html']);
});

gulp.task('default', ['watch', 'minify-css', 'minify-html']);