const bounds = [
    [45.5, 46.5],  // Юго-западная граница (ещё левее)
    [49.5, 56.0]   // Северо-восточная граница (ещё правее)
  ];
  
  const map = L.map('map', {
    center: [47.5, 52.5], // Центр карты на Атырау
    zoom: 7, // Уменьшенный стартовый зум
    minZoom: 7, // Минимальный зум (не даёт отдаляться слишком сильно)
    maxBounds: bounds, // Ограничение границ карты
    maxBoundsViscosity: 1.0 // Полностью ограничивает выход за пределы области
  });
  
  // Подключение OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  // Добавление маркеров для ключевых точек области
  L.marker([47.1167, 51.8833]).addTo(map)
    .bindPopup("<b>Атырау</b><br>Столица области.");
  
  L.marker([47.0667, 52.1667]).addTo(map)
    .bindPopup("<b>Кульсары</b><br>Город в Атырауской области.");
  
  L.marker([46.9500, 51.5500]).addTo(map)
    .bindPopup("<b>Карабатан</b><br>Промышленный район.");
  
