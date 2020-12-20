module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}