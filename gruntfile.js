module.exports = function(grunt) {

        grunt.initConfig({
                server: {
                    base: "" + (process.env.SERVER_BASE || 'www'),
                    web: {
                        port: 8000
                    }
                }
            }) //initConfig

        grunt.loadNpmTasks('express');
        // grunt.loadNpmTasks('compression'); gzip server compression nto working



        grunt.loadTasks("tasks");

        //---------------------------------------- initial task (watch) when grunt starts ------------------|     
        grunt.registerTask('default', 'server');
    } //exports
