module.exports = [
    // ########################
    // # MAIN PROJECT FILES
    // ########################
    require('./src/webpack.client.js'),
    require('./src/webpack.server.js'),

    // ########################
    // # EXAMPLE FILES
    // ########################
    require('./example/rpg/webpack.config.js')
]