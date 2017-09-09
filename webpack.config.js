var path = require('path');

module.exports = {
    context: path.join(__dirname, 'client'),
    entry: './js/index',
    output: {
        path: path.join(__dirname, 'server/public'),
        publicPath: "/",
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    includePaths: [
                        'client/style/common'
                    ]
                }
            }]
        }]
    }
};













