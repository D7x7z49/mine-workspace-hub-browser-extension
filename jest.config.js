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
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
    moduleNameMapper: {
        '^@workspacehub/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
        '<rootDir>/archive/',
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
    ],
};