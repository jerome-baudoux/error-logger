module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: '.tmp/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
		mangle: false,
        banner: '/**\n * Error-Logger by Jerome Baudoux\n * http://www.jerome-baudoux.com\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License as published by\n * the Free Software Foundation, either version 3 of the License, or\n * (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>\n */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
		  // Sources
          console: true,
          module: true,
          document: true,
          window: true,
		  // Tests
          after: false,
          afterEach: false,
          before: false,
          beforeEach: false,
          browser: false,
          describe: false,
          expect: false,
          inject: false,
          it: false,
          jasmine: false,
          spyOn: false
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	clean: {
      server: '.tmp'
    },
    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.registerTask('test', ['jshint', 'karma']);

  grunt.registerTask('default', ['jshint', 'karma', 'concat', 'uglify', 'clean:server']);

};