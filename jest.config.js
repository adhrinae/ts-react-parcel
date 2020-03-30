module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  moduleNameMapper: {
    '.+\\.css$': '<rootDir>/src/styleMock.ts',
  },
  testMatch: ['**/__tests__/*.(test|spec).(ts|tsx|js)'],
}
