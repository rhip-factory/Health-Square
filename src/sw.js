workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https:.*min.(css|js)"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "cdn-cache"
  })
);

// workbox.routing.registerRoute(
//   new RegExp("https:waiter*"),
//   workbox.strategies.networkFirst()
// );

self.addEventListener('fetch', event => {
  if (event.request.method === 'POST') {
    event.respondWith(
      fetch(event.request).catch(err => {
        // Receive the error in response.error
        return new Response(
          JSON.stringify({
            error: "This function is disabled while app is offline"
          }), {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
      })
    )
  }
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
