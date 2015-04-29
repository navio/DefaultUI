var gulp = require('gulp');
var data = require('gulp-data');
var file = require('gulp-file');

gulp.task('default',function(){

  var component = require('./component.json');


      gulp.src('component.json')
      .pipe(file(component.name+'.html','This is my text'));


});
