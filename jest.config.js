export default {
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // setupFilesAfterEnv: ['./jest.setup.js'],
};
