module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/2020/'
    : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: ` 
                    @import '~@/styles/_fonts.scss';
                    @import '~@/styles/_variable.scss';
                    @import '~@/styles/_global.scss';
                `
            }
        }
    },
    chainWebpack: (config) => {
        config.module
        .rule('vue')
        .use('vue-svg-inline-loader')
        .loader('vue-svg-inline-loader')
        .options({
          /* ... */
        });
    },
    transpileDependencies: ['vue2-dropzone']
}