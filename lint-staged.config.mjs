export default {
  '*.{html}': ['prettier --ignore-unknown --write'],
  '*.{css}': ['prettier --ignore-unknown --write'],
  '*.{js,cjs,mjs,ts,jsx,tsx}': ['prettier --ignore-unknown --write', 'eslint'],
  '*.{json,yml}': ['prettier --ignore-unknown --write'],
  '*.{md}': ['prettier --ignore-unknown --write'],
};
