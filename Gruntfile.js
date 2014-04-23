'use strict';

module.exports = function( grunt ) {

  // Show elapsed time at the end.
  require('time-grunt')(grunt);

  // Load all grunt tasks.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    config: {
      cssDir: 'css',
      scssDir: 'scss',
      convertDir: 'scss/convert-to-css'
    },

    // Imports the JSON metadata stored in package.json.
    pkg: grunt.file.readJSON('package.json'),

    banner : '/**!\n' +
             '* <%= pkg.name %> v<%= pkg.version %>\n' +
             '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
             '* UnderscoreCSS may be freely distributed under the MIT license.\n' +
             '*/',

    watch: {
      scss: {
        files: ['<%= config.scssDir %>/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded'
        },

        files: {
          '<%= config.cssDir %>/images.css': '<%= config.convertDir %>/images.scss',
          '<%= config.cssDir %>/layout.css': '<%= config.convertDir %>/layout.scss',
          '<%= config.cssDir %>/lists.css': '<%= config.convertDir %>/lists.scss',
          '<%= config.cssDir %>/offsets.css': '<%= config.convertDir %>/offsets.scss',
          '<%= config.cssDir %>/sizing.css': '<%= config.convertDir %>/sizing.scss',
          '<%= config.cssDir %>/skins.css': '<%= config.convertDir %>/skins.scss',
          '<%= config.cssDir %>/spacing.css': '<%= config.convertDir %>/spacing.scss',
          '<%= config.cssDir %>/text.css': '<%= config.convertDir %>/text.scss'
        }
      }
    },

    concat: {
      options: {
        stripBanners: false,
        banner: '<%= banner %>\n'+'\n',
      },
      dist: {
        src: ['<%= config.cssDir %>/*.css'],
        dest: '<%= pkg.name.toLowerCase() %>.css',
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '<%= banner %>',
          report: 'gzip'
        },
        files: {
          '<%= pkg.name.toLowerCase() %>.min.css': ['<%= config.cssDir %>/*.css']
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },

      css: {
        src: '<%= config.cssDir %>/**/*.css'
      }
    }
  });

  grunt.registerTask('listen-scss', [
    'watch:scss'
  ]);

  grunt.registerTask('build-css', [
    'sass:dev',
    'autoprefixer:css',
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', [
    'build-css'
  ]);
};
