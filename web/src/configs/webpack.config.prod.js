const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports =  merge(common, {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'bundle.[hash].js',
    },
    plugins: []
    
}) 