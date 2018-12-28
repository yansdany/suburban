var sassWatch = ['sass/**/*.scss'];

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    postcss: {
      options: {
        map: true,
        parser: require('postcss-scss'),
        processors: [
          require('precss')(),
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 10 versions'}),
          require('cssnano')({zindex: false})
        ]
      },
      dist: {
        src: 'build/css/*.css'
      }
    },

    sass: {
      dist: {
        files: {
          'build/css/app.css': 'sass/app.scss'
        }
      }
    },

    includereplace: {
      dist: {
        src: '*.html',
        dest: 'build/'
      }
    },

    watch: {
      css: {
        files: sassWatch,
        tasks: ['sass', 'postcss'],
        options: {
          livereload: false
        }
      },
      markup: {
        files: ['includes/*.html', '*.html'],
        tasks: ['includereplace']
      }
    },

    webfont: {
      icons: {
        src: 'svg/*.svg',
        dest: 'build/fonts/webfont',
        destCss: 'sass/icons/',
        autoHint: false,
        options: {
          stylesheet: 'scss',
          relativeFontPath: '../fonts/webfont',
          templateOptions: {
            baseClass: 'icon',
            classPrefix: 'icon-'
          }
        }
      }
    }
  });

  grunt.registerTask('build', ['webfont', 'sass', 'postcss']);
  grunt.registerTask('dev', ['sass', 'postcss', 'watch']);
};
