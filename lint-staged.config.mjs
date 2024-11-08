export default {
  '*.{html}': ['prettier --write'],
  '*.{css}': ['prettier --write'],
  '*.{js,cjs,mjs,ts,jsx,tsx}': ['prettier --write', 'eslint'],
  '*.{json,yml}': ['prettier --write'],
  '*.{md}': ['prettier --write'],
};
