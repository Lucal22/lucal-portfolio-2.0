const path = require('path');

module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.ts(x)?'],
  collectCoverage: true,

  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/public/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/jest-setup.ts'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/src/assets/index.ts',
  // },
};
