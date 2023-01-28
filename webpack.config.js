const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/api': path.resolve(__dirname, 'src/api')
    }
  }
};
