const packageConfig = require('./package.json')

console.log('Set Globals: ', packageConfig.standard.globals, '\n')

module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      static_js: {
        files: {
          'public/javascript/minified/master.min.js': [
            // Vendor libraries
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.js',
            'node_modules/sweetalert2/dist/sweetalert2.all.min.js',
            // Custom js
            'public/javascript/wired.js',
            'public/javascript/controller.js'
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
          'public/stylesheets/minified/master.min.css': [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
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
          spawn: false
        }
      },
      dev: {
        files: ['{,models/,public/javascript/,routes/}*.js'],
        tasks: ['continue:on', 'standard', 'continue:off', 'uglify'],
        options: {
          spawn: false,
          interrupt: true
        }
      }
    },
    standard: {
      app: {
        options: {
          fix: 'true',
          globals: packageConfig.standard.globals
        },
        src: [
          '{,models/,public/javascript/,routes/}*.js'
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-continue')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-standard')
  grunt.registerTask('default', ['continue:on', 'standard', 'continue:off', 'uglify', 'less', 'cssmin', 'watch'])
}
