module.exports = {
  //Presets que o babel ira utilizar
  presets: [
    //Responsavel por ensinar o browser entender as sintaxes export import arrowfunction etc..
    "@babel/preset-env",
    //Responsavel por ensinar o jsx ao browser
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}