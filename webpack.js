module.exports = {
  context: __dirname + '/scripts',
  entry: './main.js',
  output: {
    filename: 'main.min.js',
    path: __dirname + '/build',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: '6to5-loader'},
    ]
  }
};
