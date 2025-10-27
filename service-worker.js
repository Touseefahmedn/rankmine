self.addEventListener("install", e => {
  e.waitUntil(caches.open("rankmine-v1").then(cache => {
    return cache.addAll(["/", "/index.html", "/style.css"]);
  }));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

// Firebase push notification placeholder
self.addEventListener('push', e=>{
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icons/icon-192.png'
  });
});
