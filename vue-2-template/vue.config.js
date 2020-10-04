// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// vue.config.js 配置说明
// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    publicPath: "/",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: "dist",
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "static",
    // 是否开启eslint保存检测，有效值：true | false | 'error'
    lintOnSave: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        https: true
    },
    //css相关配置
    css: {
        //是否使用css分离插件 ExtractTextPlugin
        extract: true,
        //开启 css source maps？
        sourceMap: false,
        //css预设配置项
        loaderOptions: {
            // scss: {
            //   prependData: `
            //           @import "./src/styles/main.scss";
            //           `
            // }
        },
        //启用css modules for all css/ pre-processor files.
        requireModuleExtension: true
    },
    configureWebpack: config => {
        config.name = name;
        config.resolve = {
            extensions: [".js", ".json", ".vue", ".ts"],
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@image": path.resolve(__dirname, "./src/assets/images"),
                "@scss": path.resolve(__dirname, "./src/assets/scss"),
                "@component": path.resolve(__dirname, "./src/components"),
                "@model": path.resolve(__dirname, "./src/models"),
                "@services": path.resolve(__dirname, "./src/services"),
                "@util": path.resolve(__dirname, "./src/utils")
            }
        };
    }
};
