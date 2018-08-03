module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    '**/src/**/*.tests.ts'
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node'
  ]
};
