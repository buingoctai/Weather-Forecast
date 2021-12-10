const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      API_ENPOINT:
        'https://metaweatherproxy.herokuapp.com/https://www.metaweather.com/api/location',
    }),
  ],
});
