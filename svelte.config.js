// const path = require('path');
// const { mdsvex } = require('mdsvex');
// const { postcss } = require('svelte-preprocess');
const preprocess = require('svelte-preprocess');

module.exports = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    preprocess({
      typescript: false, // for typescript, use the typescript examples!
      postcss: true,
    })
  ],
};
