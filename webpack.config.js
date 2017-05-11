const ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        query:{
          presets:['react', 'es2015', 'stage-0']// cai dat de doc dc syntax JSX trong ReactJS, syntax es2015
        },
        test:/\.js?$/,
        exclude: [/node_modules/, /bower_components/] //doc file js ngoai tru file js trong thu muc node_modules
      },
       {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
       {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, //ho tro doc file png|woff|woff2|eot|ttf|svg trong bootstrap
          loader: 'url-loader?limit=100000' //ho tro doc url trong  bootstrap
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
