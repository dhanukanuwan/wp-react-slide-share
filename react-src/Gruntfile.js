module.exports = function(grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
			  sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {                  
          'src/css/main.min.css': 'src/sass/main.scss'
        }
      }
    },
    watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			}
		},
  });

  //grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['watch']);

};
