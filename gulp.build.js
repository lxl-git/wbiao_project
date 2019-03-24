const gulp = require('gulp'),
htmlMin = require('gulp-htmlmin'), // 压缩html
cleanCss = require('gulp-clean-css'), // 压缩css
babel = require('gulp-babel'), // 把es6转换为es5
uglify = require('gulp-uglify'), // 压缩js
gulpSequence = require('gulp-sequence'), // 处理异步任务
rev = require('gulp-rev'), // 生成hash值
revCollector = require('gulp-rev-collector'); // 
del = require('del'),

gulp.task('default', function (cb) {
  gulpSequence(['miniJs', 'miniCss'], 'miniHtml')(cb)
})

gulp.task('miniHtml', function (){
  return gulp.src(['rev/**/*.json', 'app/**/*.html'])
  .pipe( revCollector({
    replaceReved: true,
    dirReplacements: {}
  }) )
  .pipe(htmlMin({
    minifyJS: true,//压缩页面JS
    minifyCSS: true,//压缩页面CSS
    collapseWhitespace: true,//压缩HTML
  }))
  .pipe(gulp.dest('dist'))
  
})

gulp.task('miniCss', function() {
  return gulp.src('app/**/*.css')
  .pipe(cleanCss({compatibility: 'ie8'}))
  .pipe(rev())
  .pipe(gulp.dest('dist'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('rev/css')) 
})

gulp.task('miniJs', function () {
  return gulp.src('app/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest('dist'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('rev/js')) 
})

gulp.task('del', function() {
del(['dist']);
})