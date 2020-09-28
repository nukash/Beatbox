importScripts("precache-manifest.57b1f7983a80fbf82cbb892db5ae8840.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: "my-project" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { RangeRequestsPlugin } from "workbox-range-requests";

// In your service worker:
// It's up to you to either precache or explicitly call cache.add('movie.mp4')
// to populate the cache.
//
// This route will go against the network if there isn't a cache match,
// but it won't populate the cache at runtime.
// If there is a cache match, then it will properly serve partial responses.
registerRoute(
  ({ url }) => url.pathname.endsWith(".mp3"),
  new CacheFirst({
    cacheName: "your-cache-name-here",
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new RangeRequestsPlugin(),
    ],
  })
);

