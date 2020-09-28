importScripts("precache-manifest.89c55f1562f1fa9a3328c1ba8f9cd5a3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// workbox.core.setCacheNameDetails({ prefix: "my-project" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.endsWith(".mp3"),
  new workbox.strategies.CacheFirst({
    cacheName: "mp3-caching",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200],
      }),
      new workbox.rangeRequests.Plugin(),
    ],
  })
);

