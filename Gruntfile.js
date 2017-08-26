module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      dev: {
        files: ['public/javascripts/*.js'],
        task: ['uglify'],
        options: {
          nospawn: 'true',
          interrupt: 'true'
        }
      }
    },
    uglify: {
      static_js: {
        files: {
          'public/javascripts/thirdparty/thirdparty.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
          ]
        }
      },
      options: {
        mangle: false
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/stylesheets/thirdparty/thirdparty.min.css': [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
          ]
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.registerTask('default', ['uglify', 'cssmin'])
}
