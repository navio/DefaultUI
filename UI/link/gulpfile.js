var gulp = require('gulp');
var data = require('gulp-data');
var file = require('gulp-file');

gulp.task('default',function(){

  var component = require('./component.json');
  var template  = gulp.src('template/'+component.name+'.html');

  function parameters(elements){
    var ms = '';
    var parameterTemplate = '<c:set name="{{name}}" type="{{type}}" />';
    for(var el in elements){
      ms = ms + el;
    }
    return ms;
  }


  template.pipe(file(component.name+'.html', parameters(component.parameters) ))
          .pipe(gulp.dest('build'));


});
