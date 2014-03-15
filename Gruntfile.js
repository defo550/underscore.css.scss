'use strict';

module.exports = function( grunt ) {

  // Show elapsed time at the end.
  require('time-grunt')(grunt);

  // Load all grunt tasks.
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // Imports the JSON metadata stored in package.json.
    pkg: grunt.file.readJSON('package.json'),

    banner : '/**!\n' +
            '* <%= pkg.name.split("-").join(" ") %> v<%= pkg.version %>\n' +
            '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            '* UnderscoreCSS may be freely distributed under the MIT license.\n' +
            '*/',

    concat: {
      options: {
        stripBanners: false,
        banner: '<%= banner %>\n'+'\n',
      },
      dist: {
        src: ['stylesheets/*.css'],
        dest: 'underscore.css',
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '<%= banner %>',
          report: 'gzip'
        },
        files: {
          'underscore.min.css': ['stylesheets/*.css']
        }
      }
    }
  });

  grunt.registerTask('build', [
    'concat',
    'cssmin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
