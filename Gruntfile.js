const grun = require('grunt');

module.exports = (grunt) => {
    grunt.initConfig({
        browserify: {
            options: {},

            dev: {
                files: {
                    'build/main.js': ['src/**/*.js']
                },
                options: {
                    transform: [
                        ['markoify', {extension: '.marko'}],
                        ['babelify', { "presets": ["es2015"] }]
                    ],
                    plugins: [
                    ]
                }
            }
        },

        watch: {
            js: {
                files: ['src/**/*.js', 'src/**/*.marko'],
                tasks: ['browserify:dev'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'watch:js']);
}