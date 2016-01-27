'use strict'
module.exports = function (grunt) {
  var channelTemplate = grunt.file.read('templates/channel-template.hbs');
  grunt.log.warn('test' + channelTemplate);
  grunt.initConfig({
    jsdoc2md: {
      channelDocs: {
        files: [
          { src: 'index.js', dest: 'docs/index-channel.md' },
          { src: 'anothersrc.js', dest: 'docs/anothersrc-channel.md' }
        ],
        options: {
          template: channelTemplate
        }
      }
    },
    concat: {
      options: {
        stripBanners: true
      },
      channelDocs: {
        src: ['docs/*-channel.md'],
        dest: 'docs/channels.md',
      },
    }
  })
 
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', 'jsdoc2md')
  grunt.registerTask('channelDocs', 'Create the global channel documentation.', function() {
    var tasks = [];
    //The pending option pull all copy even if it is not published
    tasks.push('jsdoc2md:channelDocs');
    tasks.push('concat:channelDocs');
    grunt.task.run(tasks);
  });
}