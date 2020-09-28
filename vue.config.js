module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    host: "localhost",
  },
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      swDest: "service-worker.js",
      globDirectory: "docs",
      globPatterns: ["*.{html,js,css,png}"],

      // runtimeCaching: [
      //   {
      //     urlPattern: /.*\.mp3/,
      //     handler: "cacheFirst",
      //     options: {
      //       cacheName: "mp3-cache",
      //       cacheableResponse: {
      //         statuses: [0, 200],
      //       },
      //     },
      //   },
      // ],
    },
  },
};
