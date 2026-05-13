self.addEventListener('fetch', (event) => {
  // Isso permite que o app funcione mais rápido ao carregar do cache
  event.respondWith(fetch(event.request));
});
