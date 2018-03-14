const path = require('path');
var webpack = require('webpack');

var config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
 
  module: {
     rules: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
       
           query: {
              presets: ['es2015', 'react']
           }
        },
        { test: /\.css$/, loader: 'style-loader!css-loader'},
     ]
  },
  plugins: [
    
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Tether: 'tether',
        "window.jQuery": "jquery",
        "window.Tether": 'tether'
    })
]
}
module.exports = config;