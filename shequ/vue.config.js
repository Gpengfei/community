const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  },
  devServer: {
    /* before (app) {
      app.get('/api/panghu', (req, res) => {
        res.json({
          errno: 0, // 这里是你的json内容
          data: panghu
        })
      })
    }, */
    // open: process.platform === 'darwin',
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : '0.0.0.0',
    hot: true,
    https: false,
    // port: 8080,
    hotOnly: process.env.NODE_ENV !== 'production',
    proxy: null // 设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
  },
  css: {
    /*为预处理器 loader 传递自定义选项*/
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/variable.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // 打包分析
    if (IS_PROD) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static",
        },
      ]);
    }
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@components", resolve("src/components"))
      .set("@plugins", resolve("src/plugins"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@layouts", resolve("src/layouts"))
      .set("@static", resolve("src/static"))
      .set("@style", resolve("src/style"))
      .set("@views", resolve("src/views"));
  },
};
