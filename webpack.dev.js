const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3001,
    liveReload: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      API_ENPOINT:
        'https://metaweatherproxy.herokuapp.com/https://www.metaweather.com/api/location',
    }),
  ],
});
