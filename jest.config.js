module.exports = {
    bail: false,
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: [
        'src/**/*.(js|jsx|ts|tsx)',
        '!**/test/**',
        '!**/node_modules/**'
    ],
    coverageReporters: [
        'text'
    ],
    moduleNameMapper: {
        '\.css$': 'identity-obj-proxy'
    },
    resetMocks: true,
    resetModules: true,
    setupFiles: [
        '<rootDir>/__tests__/setup.js'
    ],
    testMatch: [
        '<rootDir>/__tests__/**/*.spec.js'
    ],
    testURL: 'http://localhost/',
    transform: {
        '\.js$': 'babel-jest'
    }
};
