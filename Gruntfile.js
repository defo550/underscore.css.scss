'use strict';

module.exports = function( grunt ) {

  // Show elapsed time at the end.
  require('time-grunt')(grunt);

  // Load all grunt tasks.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    config: {
      cssDir: 'css',
      scssDir: 'scss'
    },

    // Imports the JSON metadata stored in package.json.
    pkg: grunt.file.readJSON('package.json'),

    banner : '/**!\n' +
            '* <%= pkg.name %> v<%= pkg.version %>\n' +
            '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            '* UnderscoreCSS may be freely distributed under the MIT license.\n' +
            '*/',

    watch: {
      styles: {
        files: ['<%= config.scssDir %>/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true // needed to run LiveReload
        }
      }
    },

    sass: {
      dev: {
        files: {
          '<%= config.cssDir %>/images.css' : '<%= config.scssDir %>/images.scss',
          '<%= config.cssDir %>/layout.css' : '<%= config.scssDir %>/layout.scss',
          '<%= config.cssDir %>/lists.css' : '<%= config.scssDir %>/lists.scss',
          '<%= config.cssDir %>/offsets.css' : '<%= config.scssDir %>/offsets.scss',
          '<%= config.cssDir %>/sizing.css' : '<%= config.scssDir %>/sizing.scss',
          '<%= config.cssDir %>/skins.css' : '<%= config.scssDir %>/skins.scss',
          '<%= config.cssDir %>/spacing.css' : '<%= config.scssDir %>/spacing.scss',
          '<%= config.cssDir %>/text.css' : '<%= config.scssDir %>/text.scss'
        }
      }
    },

    concat: {
      options: {
        stripBanners: false,
        banner: '<%= banner %>\n'+'\n',
      },
      dist: {
        src: ['<%= configcssDir %>/*.css'],
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
    }
  });

  grunt.registerTask('listen', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
