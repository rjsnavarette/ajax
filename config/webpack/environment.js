const { environment } = require('@rails/webpacker')

module.exports = environment

environment.config.set('resolve.alias', {jquery: 'jquery/src/jquery'});
