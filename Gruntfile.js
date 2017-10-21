module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      static_js: {
        files: {
          'public/javascripts/thirdparty/thirdparty.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
          ]
        }
      },
      options: {
        mangle: false
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'public/stylesheets/css/main.css': 'public/stylesheets/less/main.less',
          'public/stylesheets/css/overlay.css': 'public/stylesheets/less/overlay.less'
        }
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
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
          ],
          'public/stylesheets/minified/master.min.css': [
            'public/stylesheets/css/overlay.css',
            'public/stylesheets/css/main.css'
          ]
        }
      }
    },
    watch: {
      styles: {
        files: ['public/stylesheets/less/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          nospawn: true
        }
      },
      dev: {
        files: ['public/javascripts/*.js'],
        task: ['uglify'],
        options: {
          nospawn: 'true',
          interrupt: 'true'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'watch'])
}
