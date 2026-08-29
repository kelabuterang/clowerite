/**
 * Service Worker Registration for Cloverait PWA
 */

export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('🍀 Cloverait PWA Service Worker registered with scope:', registration.scope);

          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) return;

            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('🍀 Cloverait: Konten baru tersedia; silakan segarkan halaman.');
                } else {
                  console.log('🍀 Cloverait: Konten telah di-cache untuk penggunaan offline.');
                }
              }
            };
          };
        })
        .catch((error) => {
          console.warn('Cloverait PWA Service Worker registration notice:', error);
        });
    });
  }
}
