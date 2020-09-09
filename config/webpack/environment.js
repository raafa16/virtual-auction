const { environment } = require('@rails/webpacker')

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  JQuery: 'jquery',
  Popper: ['popper.js', 'default'], // for Bootstrap 4
})
)

module.exports = environment

module.exports = environment
