const path = require('path');
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
    webpack(config, options) {
        console.log('\n-------config\n', config)
        console.log('\noptions\n', options)
        if (options.isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin({
                tslint: true,
                tsconfig: path.resolve(config.context, './tsconfig.json')
            }))
        }
        return config
    },
})
