module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      generated: {
        files: [{
          src: ['resources/js/test1.js', 'resources/js/test2.js', 'resources/js/test3.js'],
          dest: 'resources/js/index.js'
        }]
      }
    },
	copy: {
		main: {
			files:[
                {expand: true, cwd: 'views-dev/', src: ['**'], dest: 'views/'}				
			]		
		}
	},

  	uglify: {
        generated: {
          files: [{
            src: 'resources/js/index.js',
            dest: 'resources/js/index.min.js'
          }]
        }
      },
  	cssmin: {
        generated: {
          files: [
			{
				src: ["resources/css/test1.css", "resources/css/test2.css"],
				dest: 'resources/css/index.min.css'
			},
			{
				src: ["resources/css/test1.css", "resources/css/test2.css"],
				dest: 'resources/css/dictManager.min.css'
            }
		  ]
        }
      },
  	useminPrepare: {
      html: ['views/system/dictManager.html']
    },
    usemin: {
      html: ["views/system/dictManager.html"],
      options: {
        assetsDirs: ['']
      }
    },
	connect: {
      options: {
        port: 9000,
        hostname: 'localhost', 
        livereload: 35729  
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            // 'uedprojects'  //主目录
            ''
          ]
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },

        files: [  //下面文件的改变就会实时刷新网页
          'modules-dev/{,*/}*.html',
          'resources/css/{,*/}*.css',
          'resources/js/{,*/}*.js',
          'resources/images/{,*/}*.{png,jpg}',
          'uedprojects/op17shihui/shihui/common/configs/{,*/}*.js'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-usemin');
  // 默认任务
  //grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('serve', [
      'connect:server',
      'watch'
  ]);
  grunt.registerTask('build', [
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'usemin'
  ]);
}
