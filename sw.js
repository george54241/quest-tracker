/* Service worker : permet d'ouvrir le journal sans Internet. */
const VERSION = "journal-v2";
const SHELL = [
  "./", "index.html", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "fonts/fonts.css",
  "fonts/MarcellusSC-400-latin.woff2", "fonts/MarcellusSC-400-latin-ext.woff2",
  "fonts/NotoSans-500-latin.woff2", "fonts/NotoSans-500-latin-ext.woff2", "fonts/NotoSans-700-latin.woff2", "fonts/NotoSans-700-latin-ext.woff2",
  "fonts/NotoSans-500i-latin.woff2", "fonts/NotoSans-500i-latin-ext.woff2", "fonts/NotoSans-700i-latin.woff2", "fonts/NotoSans-700i-latin-ext.woff2",
  "fonts/NotoSans-800i-latin.woff2", "fonts/NotoSans-800i-latin-ext.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // Gemini et autres sites : jamais mis en cache
  if (req.mode === "navigate") {
    // La page : d'abord Internet (pour recevoir les mises à jour), sinon la copie gardée.
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return r; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); }
    return r;
  })));
});
