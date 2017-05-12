self.addEventListener('install', function (event) {
  var cacheName = 'cricApp-v-0';

  var apiRequest = new Request('https://cricapi.com/api/matches?apikey=zqSwzbdKdAfnR491Nvo80MQZgZW2');
  var fontRequest = new Request('https://fonts.googleapis.com/css?family=Roboto');

  var filesToCache = [
    '',
    '/',
    apiRequest,
    fontRequest
  ];

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
})

