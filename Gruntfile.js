module.exports = function (grunt) {

  grunt.initConfig({

    //basic setting and info about our plugins
    pkg: grunt.file.readJSON('package.json'),

    //Name the plugin (plugin name without the "grunt-contrib") on which action is needed to be performed
      /*
      *@example
      *cssmin: {
      combine:{
      filename:{
        public/css/main.css:["list of css file which is needed to be minified"]
     }
   }
    }
      */
  });

    //load the plugins
    grunt.loadNpmTasks(/*plugins name*/);

    //do the task
    grunt.registerTask('default',[/*plugins name given by programmer*/]);
};
