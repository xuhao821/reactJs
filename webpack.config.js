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
            {test: /\.less/, use: ['style','css','less']},
            {test: /\.css$/, use: ['style','css'] },
            {test: /\.(png|jpg|jpeg)$/, use: ['url']},
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