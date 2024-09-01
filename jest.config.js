/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: "jsdom",
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        "^.+.tsx?$": ["ts-jest", {
            useESM: true,
        }],
    },
    testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@workspacehub/(.*)$': '<rootDir>/src/$1',
      },
};