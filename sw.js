self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalando...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Ativado');
});

self.addEventListener('fetch', event => {
  // Aqui você pode interceptar requisições se quiser
});

