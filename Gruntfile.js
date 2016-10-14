'use strict'

module.exports = function (grunt) {
	var SRC_DIR = 'src'

	grunt.initConfig({
		htmlhint: {
			options: {
				htmlhintrc: 'tasks/.htmlhintrc'
			},
			main: {
				src: [SRC_DIR + '/**/*.html']
			},
		},
		'validation': {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				doctype: 'HTML5',
				charset: 'utf-8',
				generateReport: false,
				errorHTMLRootDir: "w3c",
				errorTemplate: "w3c_validation_error_Template.html",
				failHard: true,
				relaxerror: [] //ignores these errors 
			},
			files: {
				src: [SRC_DIR + '/**/*.html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-htmlhint')
	grunt.loadNpmTasks('grunt-w3c-html-validation')

	grunt.registerTask('htmlcode', ['htmlhint:main'])
	grunt.registerTask("htmlvalidate", ["validation"])

	//BAT files mirrors
	grunt.registerTask('analize', ['htmlcode', 'htmlvalidate'])
};