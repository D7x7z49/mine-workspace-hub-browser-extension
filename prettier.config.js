// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'always',
    rangeStart: 0,
    rangeEnd: Infinity,
    filepath: '',
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'always',
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
};

export default config;