const testRunnerConfig = {
    stylus: {
        use: require('../index.js')()
    }
}

require('stylus-test-runner')(testRunnerConfig);