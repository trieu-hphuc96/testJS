const path = require('path');

module.exports = options => {
  return {
    entry: './public/javascripts/main.js',
    output: {
      filename: './javascripts/bundle.js',
      path: path.resolve(__dirname, 'public')
    },
  }
}