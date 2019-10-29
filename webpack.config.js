const path = require('path');
module.exports = {
  //Arquivo de entrada
  entry: path.resolve(__dirname, 'src','index.js'),
  //Onde sera jogado o codigo transpilado pelo webpack
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    //Regras = Pra qual tipo de arquivo o babel deve utilizar
    rules:[
      //Loades
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',


        },
      },{
        test: /\.css$/,
        rules:[
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        // i no final CASECENCETIVE
        test: /\.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }

};