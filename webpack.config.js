const path = require('path');

module.exports = options => {
  return {
    mode: 'none',
    entry: './public/javascripts/main.js',
    output: {
      filename: './javascripts/dist/bundle.js',
      path: path.resolve(__dirname, 'public')
    },
  };
};
