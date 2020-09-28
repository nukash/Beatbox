importScripts("precache-manifest.7c7e5cbb04bc60b1f40aba10248e936f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

