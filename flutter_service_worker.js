'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83a592d22bb1a255dd7ae22e5d6e93bf",
"assets/AssetManifest.bin.json": "0201af11110018cc38f9b122fd3cf1cc",
"assets/AssetManifest.json": "e9152b1846926da1a87c39f8d880cce7",
"assets/assets/img/accentchair.png": "bfe2103f113b3eaec41850713be376ed",
"assets/assets/img/chair.png": "b9721048fa17332a342bfb19d84c58ef",
"assets/assets/img/firstpage/largerscreen.jpg": "7610e21266feda665b3eff413b3a1756",
"assets/assets/img/firstpage/meduimscreen.jpg": "f1d0cb537d37f46943aff17ef8d7e1f0",
"assets/assets/img/firstpage/smallscreen.jpg": "18252396ae619ddeea28fc3f16bb1100",
"assets/assets/img/hero.jpg": "3a66e8c7c3baafa3136bc7c2d4a8cb17",
"assets/assets/img/hero1.jpg": "0b93337e82c0b6953dcacfc69180403a",
"assets/assets/img/homeImg.jpg": "ce89e3319c9c55343a3cc71fdaf8ea21",
"assets/assets/img/pri-img.jpg": "a13a5ec42f6f5d5bc285594e3595ec8e",
"assets/assets/img/sec-img.jpg": "db4759d796ffe938288fc42a252e132f",
"assets/assets/img/secondChair.jpg": "414ed7adda11db4e2e0d5e1862ec8903",
"assets/assets/img/shop_bundles/all_bundles.jpg": "ed0ac74f0d3bd49d2895272acb1044f2",
"assets/assets/img/shop_bundles/bedroom.jpg": "0ab211087ed483fe2061ce80683315e2",
"assets/assets/img/shop_bundles/dining_room.jpg": "3e91bd16d17e0885b613d32643e9d613",
"assets/assets/img/shop_bundles/home_office.webp": "a88e72cc22bda10a65f05621422d92c0",
"assets/assets/img/shop_bundles/living_room.jpg": "0c8f12ddf3ae9231aac2d92b07b12206",
"assets/assets/img/shop_bundles/outdoor.jpg": "b0e1e31d31e7486b19c557f8d92c03f1",
"assets/assets/img/slider/slide1.jpg": "69cea56079cb3b80751960fbe31dd1d3",
"assets/assets/img/slider/slide2.jpg": "f775c97698e0a4824795eee4aa0c82f0",
"assets/assets/img/slider/slide3.jpg": "1bfa3cbda16a0293054d6f1323367a6e",
"assets/assets/img/third-img.jpg": "0c8114d29fdbf6fcc459404805320c13",
"assets/assets/logo.png": "499a29fed0b9552dc24b76281056d519",
"assets/assets/photo_2024-05-19_17-27-34.jpg": "dc3ddb369ac95d19f0ee13ed3c550893",
"assets/assets/products/chairProduct.jpg": "58c0137149d0d473d3ffb2d0822990b3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "573c7f2222c9d568e8df514066c2d09a",
"assets/NOTICES": "ed2cbe6c48540558378bf20252d7709c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7841a137c15abeddcd1a61641819da04",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ba403c65d71f149ef22da8dccd469805",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "941e5a680a3c963a2becb8c87d7bb1c3",
"/": "941e5a680a3c963a2becb8c87d7bb1c3",
"main.dart.js": "611b907184fd4e445f332449362e03dd",
"manifest.json": "0ac7d0e990eed56cb3bce931557eac9d",
"version.json": "ff3a8db7bb159668fd68ed2a87ceb633"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
