var gulp = require('gulp'), 
	uglify = require('gulp-uglifyjs'),
	minifyCSS = require('gulp-minify-css'),
	browserSync = require('browser-sync').create();




gulp.task('saludar',function(){
	console.log("dfdslfk");
});

gulp.task('min', function() {
	
	//var source = [ 'src/uno.js', 'src/dos.js' ];

	return gulp.src('js/*.js') 
		.pipe(uglify('javascript.min.js')) 
		.pipe(gulp.dest('./dist/js')); 
});

gulp.task('watch', function(){ 
    gulp.watch('js/*.js', ['min']); 
    gulp.watch('css/*.css', ['mincss']); 
});

gulp.task('mincss', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
});



//gulp.task('server', ['sass'], function() {

gulp.task('server', ['mincss','min'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("js/*.js", ['min']).on('change', browserSync.reload);
    gulp.watch("css/*.css", ['mincss']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});