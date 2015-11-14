module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          // outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/unprefixed.app.css': 'scss/app.scss'
        }
      }
    },

    /* Autoprefixer - Adds vendor prefixes automatically
     * https://github.com/nDmitry/grunt-autoprefixer */
    autoprefixer: {
      options: {
        browsers: [
          'last 2 version',
          'safari 6',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]
      },
      dev: {
        files: {
          'css/app.css': 'css/unprefixed.app.css'
          // '<%= project.assets %>/css/style.min.css': ['<%= project.assets %>/css/style.unprefixed.css']
        }
      },
      // dist: {
      //   files: {
      //     '<%= project.assets %>/css/style.prefixed.css': ['<%= project.assets %>/css/style.unprefixed.css']
      //   }
      // }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass','autoprefixer:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
