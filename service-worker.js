var CACHE_NAME = 'dian intro';
var urlsToCache = [
  '/',


  'favicon.ico',
  'css/reset.css',
  "css/reveal.css",
  "css/theme/white.css",
  "css/bootstrap.min.css",
  "lib/css/monokai.css",
  "css/print/paper.css",

  "js/jquery-3.4.1.slim.min.js",
  "js/popper.min.js",
  "js/bootstrap.min.js",
  "js/typeriter.js",
  "js/reveal.js",
  "plugin/highlight/highlight.js",
  "plugin/search/search.js",
  "plugin/zoom-js/zoom.js",
  "plugin/notes/notes.js",
  "images/icons/icon-144x144.png",
  "images/icons/icon-72x72.png",
  "images/icons/icon-96x96.png",
  "images/icons/icon-128x128.png",
  "images/icons/icon-152x152.png",
  "images/icons/icon-192x192.png",
  "images/icons/icon-384x384.png",
  "images/icons/icon-512x512.png",

  "img/Picture2.png",
  "img/Picture3.png",
  "img/Picture4.png",
  "img/Picture5.png",
  "img/Picture1.png",
  "img/Picture7.png",
  "img/Picture9.png",
  "img/Picture29.png",
  "img/Picture30.png",
  "img/Picture33.png",
  "img/Picture34.png",
  "img/Picture35.png",
  "img/Picture36.png",
  "img/logo/github.png",
  "img/logo/gmail.png",
  "img/logo/wa.png",
  "img/Picture52.png",

  'video/Interactive 3D.mp4',
  'video/Interactive Map.mp4',
  'video/Google map.mp4',
  'video/Featured Spot.mp4',
  'video/Share Location.mp4',
  'video/Virtual Reality.mp4',
  'video/Videosphere.mp4',
  'video/dian intro.mp4',
  'video/dian.mp4',
  'video/Dian - Lokasi.mp4',
  'video/Dian - Jurusan dan fakultas.mp4',
  'video/Dian - visi dan misi.mp4',
  'video/Dian - Istilah istilah.mp4',
  'video/Dian - Musik.mp4',
  'video/Dian - Prediksi.mp4',

];

self.addEventListener('install', function(event) {
  /*Perform install steps*/
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/* modify */
self.addEventListener('activate', function(event) {

    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName){
              return cacheName != CACHE_NAME;
          }).map(function(cacheName){
              return caches.delete(cacheName);
          })
        );
      })
    );
  });

/* event fetch */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

