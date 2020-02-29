var CACHE_NAME = 'dian intro';
var urlsToCache = [
  '/',


  'https://intro.riset.xyz/favicon.ico',
  'https://intro.riset.xyz/css/reset.css',
  "https://intro.riset.xyz/css/reveal.css",
  "https://intro.riset.xyz/css/theme/white.css",
  "https://intro.riset.xyz/css/bootstrap.min.css",
  "https://intro.riset.xyz/lib/css/monokai.css",
  "https://intro.riset.xyz/css/print/paper.css",

  "https://intro.riset.xyz/js/jquery-3.4.1.slim.min.js",
  "https://intro.riset.xyz/js/popper.min.js",
  "https://intro.riset.xyz/js/bootstrap.min.js",
  "https://intro.riset.xyz/js/typeriter.js",
  "https://intro.riset.xyz/js/reveal.js",
  "https://intro.riset.xyz/plugin/highlight/highlight.js",
  "https://intro.riset.xyz/plugin/search/search.js",
  "https://intro.riset.xyz/plugin/zoom-js/zoom.js",
  "https://intro.riset.xyz/plugin/notes/notes.js",
  "https://intro.riset.xyz/images/icons/icon-144x144.png",
  "https://intro.riset.xyz/images/icons/icon-72x72.png",
  "https://intro.riset.xyz/images/icons/icon-96x96.png",
  "https://intro.riset.xyz/images/icons/icon-128x128.png",
  "https://intro.riset.xyz/images/icons/icon-152x152.png",
  "https://intro.riset.xyz/images/icons/icon-192x192.png",
  "https://intro.riset.xyz/images/icons/icon-384x384.png",
  "https://intro.riset.xyz/images/icons/icon-512x512.png",

  "https://intro.riset.xyz/img/Picture2.png",
  "https://intro.riset.xyz/img/Picture3.png",
  "https://intro.riset.xyz/img/Picture4.png",
  "https://intro.riset.xyz/img/Picture5.png",
  "https://intro.riset.xyz/img/Picture1.png",
  "https://intro.riset.xyz/img/Picture7.png",
  "https://intro.riset.xyz/img/Picture9.png",
  "https://intro.riset.xyz/img/Picture29.png",
  "https://intro.riset.xyz/img/Picture30.png",
  "https://intro.riset.xyz/img/Picture33.png",
  "https://intro.riset.xyz/img/Picture34.png",
  "https://intro.riset.xyz/img/Picture35.png",
  "https://intro.riset.xyz/img/Picture36.png",
  "https://intro.riset.xyz/img/logo/github.png",
  "https://intro.riset.xyz/img/logo/gmail.png",
  "https://intro.riset.xyz/img/logo/wa.png",
  "https://intro.riset.xyz/img/Picture52.png",

  'https://intro.riset.xyz/video/Interactive 3D.mp4',
  'https://intro.riset.xyz/video/Interactive Map.mp4',
  'https://intro.riset.xyz/video/Google map.mp4',
  'https://intro.riset.xyz/video/Featured Spot.mp4',
  'https://intro.riset.xyz/video/Share Location.mp4',
  'https://intro.riset.xyz/video/Virtual Reality.mp4',
  'https://intro.riset.xyz/video/Videosphere.mp4',
  'https://intro.riset.xyz/video/dian intro.mp4',
  'https://intro.riset.xyz/video/dian.mp4',
  'https://intro.riset.xyz/video/Dian - Lokasi.mp4',
  'https://intro.riset.xyz/video/Dian - Jurusan dan fakultas.mp4',
  'https://intro.riset.xyz/video/Dian - visi dan misi.mp4',
  'https://intro.riset.xyz/video/Dian - Istilah istilah.mp4',
  'https://intro.riset.xyz/video/Dian - Musik.mp4',
  'https://intro.riset.xyz/video/Dian - Prediksi.mp4',

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

