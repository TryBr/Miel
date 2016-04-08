module.exports = function(grunt) {


    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		

		//min js
		uglify: {
			build: {
				src: [
				"js/vendor/modernizr-2.8.3.min.js",
				"js/vendor/jquery-1.11.2.min.js",
				"js/vendor/jquery-ui.min.js",
				"js/vendor/owl.carousel.min.js",
				"js/vendor/jquery.fancybox.js",   
				"js/vendor/lightslider.min.js",
				"js/vendor/jquery-ui.min.js",
				"js/main.js"

				],
				dest: 'production/scripts.min.js',
			}
		},
				
		//css min
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			  },
			  target: {
				files: {
				  'production/styles.min.css': [
			        "css/normalize.css",
			        "css/jquery-ui.min.css",
			        "css/jquery-ui.structure.min.css",
			        "css/owl.carousel.css",
			        "css/owl.theme.css",
			        "css/owl.transitions.css",
			        "css/jquery.fancybox.css",
			        "css/lightslider.css",	        
			      	"css/main.css"
				  ]
				}
			  }
			},
			
		//watch
		watch: {
			scripts: {
				files: ['js/*.js', 'js/vendor/*.js'],
				tasks: ['uglify', 'cssmin'],
				options: {
					spawn: false,
				},
			}
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');


    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', [
	'uglify',
	'cssmin'
	]);
	
};