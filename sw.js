const CACHE_NAME = "vayro-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(["./", "./index.html", "./manifest.json"])
    )
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});