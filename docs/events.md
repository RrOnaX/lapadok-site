# Таблица событий GA4

| Событие | Где отправляется | Параметры |
|---------|------------------|-----------|
| cta_click | index.html (кнопка "Записаться") | button_name, page_section |
| pet_type_select | index.html (карточки животных) | pet_type |
| service_view | index.html, services.html | service_name |
| doctor_view | index.html, doctors.html | doctor_id, specialty |
| vaccine_calc | vaccines.html | pet_type, age_weeks |
| promo_copy | pet-kit.html | promo_code |
| contact_click | все страницы (телефон/email) | contact_type |
| messenger_click | contacts.html | messenger |
| social_click | подвал сайта | network, page_section |
| generate_lead | contacts.html (успешная заявка) | lead_pet_type, lead_service, lead_source |