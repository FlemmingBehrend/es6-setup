module.exports = function (w) {

    return {
        files: [
            'src/**/*.js',
            {pattern: 'src/**/*.spec.js', ignore: true}
        ],

        tests: [
            'src/**/*.spec.js'
        ],
        compilers: {
            '**/*.js': w.compilers.babel()
        },

        env: {
            type: 'node'
        },

        testFramework: 'jasmine'

    };
};
