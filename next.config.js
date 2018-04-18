const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
    webpack(config, options) {
        if (options.isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin())
            // config.path.resolve(compiler.options.context, './tsconfig.json')
        }
        return config
    },
})
