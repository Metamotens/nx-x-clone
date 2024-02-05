const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    fontFamily: {
      twitterBold: ["TwitterBold", "sans-serif"],
      twitterHeavy: ["TwitterHeavy", "sans-serif"],
    },
  },
  plugins: [],
};
