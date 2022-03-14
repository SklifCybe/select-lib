const path = require('path');

const rootSrc = path.resolve(__dirname, 'src/');

module.exports = {
  webpack: {
    alias: {
      '@': rootSrc
    }
  }
}