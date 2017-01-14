const testRunnerConfig = {
    stylus: {
        use: require('../index.js')(),
        import: './test/test-two-lines.styl'
    }
}

require('stylus-test-runner')(testRunnerConfig);