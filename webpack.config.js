const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  // resolve: {
  //   extensions: [ '.js'] //'.ts', '.tsx', , '.jpg'
  // },
  module:{
    rules: [ 
      // {test: /\.tsx?$/, loader: 'ts-loader'} ,
      {test: /\.(png|jpg|gif)$/i, use: [ { loader: 'file-loader', options: { publicPath: 'dist' } }]  },
      {test: /\.css$/i, use: ['style-loader', 'css-loader'], },
      {test: /index\.html/, loader: 'file-loader', query: { name: '[name].[ext]' } },
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
};