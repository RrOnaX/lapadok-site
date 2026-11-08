// form.js — обработка формы заявки
(function() {
  // Сохранение UTM-меток в sessionStorage
  const params = new URLSearchParams(window.location.search);
  const utmFields = ['utm_source','utm_medium','utm_campaign','utm_content'];
  utmFields.forEach(f => {
    if (params.get(f)) sessionStorage.setItem(f, params.get(f));
  });

  window.getUTM = function() {
    return {
      utm_source: sessionStorage.getItem('utm_source') || 'direct',
      utm_medium: sessionStorage.getItem('utm_medium') || 'none',
      utm_campaign: sessionStorage.getItem('utm_campaign') || 'not_set',
      utm_content: sessionStorage.getItem('utm_content') || 'not_set'
    };
  };

  window.generateUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  // Валидация
  window.validatePhone = function(phone) {
    return /^\+7\d{10}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  window.validateEmail = function(email) {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  window.validateName = function(name) {
    return name.trim().length >= 2 && name.trim().length <= 60;
  };
})();