const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    // 该项配置只有在根配置文件中才会生效
    // devServer: {     
    //     contentBase: path.resolve('./', 'dist'),
    //     port: 3200
    // },
    output: {
        filename: 'main.js',
        path: path.resolve('./', 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/template.html'
        })
    ],
    module: {
        rules: [
            {
                test:/\.js|jsx$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css|less$/,
                use: [
                        { loader: 'style-loader' }, 
                        { loader: 'css-loader' },
                        {loader: 'less-loader'}
                    ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        // publicPath: 'assets',
                    },
                  },
                ],
              }
        ]
    }
}