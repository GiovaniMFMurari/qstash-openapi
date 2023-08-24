export default {
  globals: {
    NODE_ENV: 'test',
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: 'node',
  roots: ['<rootDir>/dist'],
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  transformIgnorePatterns: [
    '//node_modules'
  ],
  transform: {},
};
