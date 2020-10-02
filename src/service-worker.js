// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener("message", (e) => {
  if (!e.data) {
    return;
  }

  switch (e.data) {
    case "skipWaiting":
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

workbox.core.clientsClaim(); // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim(); // Vue CLI 3 and Workbox v3.

const cacheKeyWillBeUsed = ({ request }) => {
  const url = workbox.precaching.getCacheKeyForURL(request.url);
  return new Request(url, { headers: request.headers });
};

importScripts("./workbox-utils.js");
// const RUNTIME_CACHE_NAME = `${APP_CACHE_PREFIX}-runtime-${APP_CACHE_SUFFIX}`;
// Create runtime Route.
const runtimeRoute = new WorkboxCacheBeforeCacheOnly(
  self,
  "beatbox-runtime",
  self.__precacheManifest || []
);
// Register runtime Route.
workbox.routing.registerRoute(runtimeRoute.match, runtimeRoute);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith(".mp3"),
  new workbox.strategies.CacheOnly({
    // cacheName: "mp3-caching",
    cacheName: workbox.core.cacheNames.precaching,
    plugins: [
      // new workbox.cacheableResponse.Plugin({
      //   statuses: [200],
      // }),
      { cacheKeyWillBeUsed },
      new workbox.rangeRequests.Plugin(),
    ],
    matchOptions: {
      ignoreSearch: true,
      ignoreVary: true,
    },
  })
);

console.log(self.__WB_MANIFEST);
console.log(self.__precacheManifest);
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
