const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [require('autoprefixer')],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dashboard',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/views/dashboard.html'),
        }),

        new HtmlWebpackPlugin({
            title: 'About Me',
            filename: 'about-me.html',
            template: path.resolve(__dirname, 'src/views/about-me.html'),
        }),

        new HtmlWebpackPlugin({
            title: 'Create Story',
            filename: 'create-story.html',
            template: path.resolve(__dirname, 'src/views/create-story.html'),
        }),

        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.join(__dirname, 'src/public/img'),
                to: path.join(__dirname, 'dist'),
              },
            ],
          }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/public/'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),

        new CleanWebpackPlugin(),
    ],
};