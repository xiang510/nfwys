const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports =  merge(common, {

    mode: 'development',
    devtool: 'inline-source-map',
    // 该项配置只有在根配置文件中才会生效
    // devServer: {     
    //     contentBase: path.resolve('./', 'dist'),
    //     port: 3200
    // },
    output: {
        filename: 'main.js',
        publicPath: '/'
    },
}) 