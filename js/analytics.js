// analytics.js — единый файл событий GA4
// Замените G-XXXXXXXXXX на реальный ID после регистрации в GA4

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Раскомментируйте после получения ID:
// gtag('js', new Date());
// gtag('config', GA_MEASUREMENT_ID);

window.trackEvent = function(eventName, params = {}) {
  const clean = {};
  for (let k in params) clean[k] = String(params[k]).substring(0, 100);
  console.log('[GA4]', eventName, clean);
  // gtag('event', eventName, clean);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-event]').forEach(el => {
    el.addEventListener('click', () => {
      const name = el.dataset.event;
      const params = {};
      for (let k in el.dataset) {
        if (k === 'event') continue;
        const snake = k.replace(/([A-Z])/g, '_$1').toLowerCase();
        params[snake] = el.dataset[k];
      }
      window.trackEvent(name, params);
    });
  });
});