var webpack = require('webpack');
var path = require('path');
module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, './dev'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.less/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.css$/,
                exclude: /(static)/,
                use: ['style-loader','css-loader'] },
            {test: /\.(png|jpg|jpeg)$/,
                exclude: /(static)/,
                use: ['url-loader']},
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    },
    devServer:{
        inline:true,
        port:5000,
        // host:'192.168.199.237'
    }
}