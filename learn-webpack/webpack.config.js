const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ],
          },
        },
      },
    ],
  },
};
