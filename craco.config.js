// craco.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/_redirects', to: '' }],
      }),
    ],
  },
};
