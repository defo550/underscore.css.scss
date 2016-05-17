'use strict';

module.exports = function( grunt ) {

  // Show elapsed time at the end.
  require('time-grunt')(grunt);

  // Load all grunt tasks.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Imports the JSON metadata stored in package.json.
    pkg: grunt.file.readJSON('package.json'),

    config: {
      name: '<%= pkg.name.split(\'.\')[0] %>',
      cssDir: 'css',
      scssDir: 'scss'
    },

    banner: '/*! <%= pkg.name %> v<%= pkg.version %> | MIT License | ' + '<%= pkg.repository.url %> */',

    watch: {
      scss: {
        files: ['<%= config.scssDir %>/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer'],
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    },

    sass: {
      dev: {
        options: {
          sourcemap: 'none',
          style: 'expanded'
        },

        files: {
          '<%= config.cssDir %>/images.css': '<%= config.scssDir %>/images.scss',
          '<%= config.cssDir %>/display.css': '<%= config.scssDir %>/display.scss',
          '<%= config.cssDir %>/layout.css': '<%= config.scssDir %>/layout.scss',
          '<%= config.cssDir %>/links.css': '<%= config.scssDir %>/links.scss',
          '<%= config.cssDir %>/lists.css': '<%= config.scssDir %>/lists.scss',
          '<%= config.cssDir %>/offsets.css': '<%= config.scssDir %>/offsets.scss',
          '<%= config.cssDir %>/sizing.css': '<%= config.scssDir %>/sizing.scss',
          '<%= config.cssDir %>/skins.css': '<%= config.scssDir %>/skins.scss',
          '<%= config.cssDir %>/spacing.css': '<%= config.scssDir %>/spacing.scss',
          '<%= config.cssDir %>/text.css': '<%= config.scssDir %>/text.scss'
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
        dest: '<%= config.name %>.css',
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        files: {
          '<%= config.name %>.min.css': ['<%= config.cssDir %>/*.css']
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
