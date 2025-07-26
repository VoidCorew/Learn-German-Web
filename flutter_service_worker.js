'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "a22b0fa07d5e483f1ff8d19fcc819ada",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6c8f1be70742ffed17f820dbfc2e009",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18f754b0437c5ed4da07ae8841c9d109",
".git/logs/refs/heads/main": "f9e9e3c29b879696ca4b076464513dfa",
".git/logs/refs/remotes/origin/main": "f6986d18b8fb84e26c18f890603169a7",
".git/objects/10/2c3f7ab1cd2308962db63ed29faaeec2000765": "f07f9d4a7e453e75541b757da6561b99",
".git/objects/14/8337d0d67f6f6ab95efa7a63a489431c0e0c39": "de65c3beca6ff41bda831c94cf17c97d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/24fd1f8b9d64bf23d48f7090045581de8c1068": "98067a01fa2db0f3834c46d780577c57",
".git/objects/22/49e0a3451130e96f20d773ab42575a157ebeea": "05dc42dbe32232777e711804480d9f57",
".git/objects/29/043c7f6bcf7edfaca1bbd99ecb2081b0116a2a": "7702eab71f78dfd49cb005d8b1560e7b",
".git/objects/33/15887ebdf5d268f130145dd7ad05f315c4d7c6": "80a571811b747dc9d0720f7e1709663a",
".git/objects/3b/c5cf8523a84de2cfa090b7c5d7817cbb6f8279": "9995bd803766dca6c7f88b280f7dd0d0",
".git/objects/3e/473c361d41319b6ac9dc53a1b61580f57ee034": "b5ecfee177f1d240f0236c673337f2e3",
".git/objects/43/6c982ff3209357305892181e61565d1e01d439": "c2f0eb7bb7750258f9e16248e7745133",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/2a3aeef9e4573cea6da940c42e176f747b6a2c": "492b81663299fc7c39755bba3f2be50c",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/495144fda6a0c7424a1fecb58b36093481d641": "8e997ff8596f72f54b5fe3dbd5fd151a",
".git/objects/5f/1ec9652cb7884a59e7a76855b9fefcae536118": "40eab2a8e874d89e16fb8234dae5610f",
".git/objects/68/dad2d8a1134c6818f45ab4501ddd1fc0fa0f49": "1c26f64dfd6e4ced0fca374549b9c51e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/dccbc9e946115d883dad3c6cf8c1a31fe81401": "a17526a33050c4b1e909743e463a5194",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/399eb6af3e69d605e567aa79da9cb262d715f2": "6a45e2d6e38126751c305795714d606a",
".git/objects/81/1c09fdd534f6e8d9d6ee6ef255467804989e12": "5ca207e82ec0de674b2a90e1cf348c2e",
".git/objects/81/3c56a77ad7294bd98c1e04bc7f8f6c90b7d337": "e8cdbf062568682dbb1ec4b0eebb186c",
".git/objects/83/92abdd5461425ad82c07f71348a56318c0f485": "6dbbec113cc81cda2d3522c2d6aba589",
".git/objects/83/d184644a3f781771872876e940d19ed6fe88e7": "f1f9a7f80661e858929ac3147eed40b6",
".git/objects/87/a2f855ed8ec8560bfe1f7e6a8bfad34ed75781": "8c072dd8a2a9ffccbea897e4a8d5fd31",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/3309f448809e4b6968f72d0435f2f027c36048": "9ec092748a0620ca38de2a255e9097b8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a5/9220cda70d73c9fddf9180c106029ec838fb85": "2c12e4ff7c31005b202d7e3ffc7a4908",
".git/objects/af/6a6972c5900819dada5cb48fe7a0ce7820c2ac": "4d6cc633b122c4c61baa4eceaffd833c",
".git/objects/b4/2c19bd765b05ec94e708e6929a2a695617fb19": "3e05dd3222a88fee4f9025d4e59cbead",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c2/5adebb076d5dcfc21978abf76e614b64ccfded": "864692be31b7e615512ff2c113d651bc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0cae5b9ab141227b94f7c6ec07af26b07be3e5": "b1669a6f8d9b83eea7ec8135d4af4b32",
".git/objects/d5/ce9ce8ec08d592df36209c23f82694fc086187": "698cca8a2e52be76b900b6d2f696e963",
".git/objects/d5/d986b0ef2d92cb53d4094fa5ce10dac133ebcc": "e5dca71db6987ec88c0490f95df8f75d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4d55f7c57c93d81ec0e07374944a4614b0bcbc": "c6b3e94bb6fce7f3a3dd772a151e7d43",
".git/objects/da/28cf12596c0f4933dedbfdbdaba24b4079fdf0": "804f938b7d65ecb4f80e9c6168eb7bca",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/1253ff3319ed9923e47eb716dd55e8c37ad4f1": "6575b611b827731788c14c094b2aa732",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/671a0d7d024930930b6763a605d347f23d4203": "a014ea012620da2622fc95d0229654e5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/fb/6910a04a8f54bbff8df0317c891095fe57c34b": "eee0a348ec5770f8bb787211e46dd6b1",
".git/objects/ff/101229cae3a44679db1e59927af3d7fd85f7f6": "42367507e324f01644f85edd32f44014",
".git/refs/heads/main": "265dab6d53016c068c2655838a47eb41",
".git/refs/remotes/origin/main": "265dab6d53016c068c2655838a47eb41",
"assets/AssetManifest.bin": "70d7da05624cb7a32063c3d6b0c4bdd4",
"assets/AssetManifest.bin.json": "c848c5ddf2361c71507e3d9b85cb2c84",
"assets/AssetManifest.json": "011706639e7087940479b5f10c657c39",
"assets/assets/fonts/JetBrainsMono-Regular.ttf": "a0147b5ab9e4946e81879aef45313def",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/sounds/complete.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/sounds/fail.mp3": "5ac439acea5766e688392363515eea5e",
"assets/assets/sounds/success.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/FontManifest.json": "68e6175f7b55b7e87928c4fb3dbac481",
"assets/fonts/MaterialIcons-Regular.otf": "45231d661ca2368a448cc31186e915ef",
"assets/NOTICES": "8bef9c05f6ba5bcc33f0ce22726c59f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "815bd446cb0d077d58ca44982ed3929b",
"icons/favicon-16x16.png": "5b8ee28f9a919cdbf4ba6c753585b49f",
"icons/favicon-32z32.png": "4299f68fd0e9a743352e74b52d3eda2a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/icon-256x256.png": "8f9416a2a3e48b4471de4b3e8b336eb6",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/icon-512x512.png": "de056762b14d652d59483dda69187493",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c79fbd9b44c699e7bfb4b482bb40c4fa",
"/": "c79fbd9b44c699e7bfb4b482bb40c4fa",
"main.dart.js": "6e908b9e6891be3fdaed218105aaa18a",
"manifest.json": "f3b832f57494fda42b7a0cfae63f3092",
"version.json": "349bffb51ad322e2cc07ab1ad9a8280e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
