module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-import'),
        require('postcss-preset-env'),
        require('cssnano')
    ]
} 