import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import jest from 'eslint-plugin-jest';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Include .gitignore for ignored files
  includeIgnoreFile(gitignorePath),

  // JavaScript/TypeScript general settings
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser, // Browser environment globals
        ...globals.jest, // Jest testing globals
      },
    },
  },

  // JavaScript recommended rules
  pluginJs.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // React recommended rules
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },

  // Jest testing rules
  jest.configs['flat/recommended'],

  // Accessibility rules with jsx-a11y
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules, // Apply recommended rules
      'jsx-a11y/alt-text': 'error', // Enforce alt text for images
      'jsx-a11y/anchor-is-valid': 'warn', // Warn for invalid anchors
    },
    settings: {
      jsxA11y: {
        polymorphicPropName: 'as', // Support for polymorphic components
        components: {
          CustomButton: 'button', // Map custom components
          MyInput: 'input',
        },
        attributes: {
          for: ['htmlFor', 'for'], // Allow both htmlFor and for attributes
        },
      },
    },
  },

  // Prettier configuration must be last to disable conflicting rules
  eslintConfigPrettier,
];
