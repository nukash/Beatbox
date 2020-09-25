module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "docs",
  devServer: {
    host: "localhost",
  },
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /.*\.mp3/,
          handler: "cacheFirst",
          options: {
            cacheName: "mp3-cache",
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};
