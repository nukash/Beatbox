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
      exclude: [/\.mp3$/],

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
  css: {
    sourceMap: true,
  },
};
