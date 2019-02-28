module.exports = {
    plugins: [
        require('autoprefixer')({
            remove: false,
            browsers: [
                'ios >= 8',
                'ie >= 10'
            ]
        })
    ]
};
