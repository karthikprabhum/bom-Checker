var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: path.join(__dirname, 'src', 'app/app.js'),
    html: path.join(__dirname, 'src', 'index.html')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
      },
	  {
		test: /\.less$/,
		loader: 'style!css!resolve-url!less'
	},
	{
		test: /\.css$/,
		loader: "style-loader!css-loader"
	},
	{
		test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
		loader: 'url-loader?limit=100000' 
	},
	{
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]          
  },
  resolve : {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
