const path = require("path");

module.exports = {
  publicPath: "",
  lintOnSave: false,
  productionSourceMap: false,

  devServer: {
    port: 8000,
  },

  chainWebpack(config) {
    config.plugin("html").tap((args) => {
      args[0].title = "AR图像跟踪";
      return args;
    });

    const images = config.module.rule("images");
    const urlLoader = images.uses.get("url-loader");
    images.uses.clear();
    images
      .oneOf("inline")
      .resourceQuery(/inline/i)
      .use("inline-loader")
      .loader("url-loader")
      .set("options", {
        limit: Infinity,
      })
      .end();
    images.oneOf("external").uses.set("external-loader", urlLoader);
  },

  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },
};
