module.exports = function (pkg) {
  return {
    name: pkg.name,
    displayName: pkg.name,
    rootDir: '../..',
    globals: {
      'ts-jest': {
        tsConfigFile: `<rootDir>/packages/${pkg.name}/tsconfig.json`
      }
    },
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testEnvironment: 'node',
    testMatch: [
      `<rootDir>/packages/${pkg.name}/src/**/*.tests.ts`
    ],
    moduleFileExtensions: [
      'js',
      'json',
      'ts'
    ]
  };
};
