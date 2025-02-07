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
  
  const bounds = [
    [45.5, 46.5],  // Юго-западная граница (ещё левее)
    [49.5, 56.0]   // Северо-восточная граница (ещё правее)
];

const map = L.map('map', {
    center: [47.5, 52.5], // Центр карты на Атырау
    zoom: 7,
    minZoom: 7,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

// Подключение OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Список топонимов с координатами
const locations = [
    { name: "Каспийское море", coords: [44.5, 50.0] },
    { name: "река Урал", coords: [47.1, 51.9] },
    { name: "реки Хобда", coords: [48.3, 55.1] },
    { name: "Большая Хобда", coords: [48.6, 55.3] },
    { name: "Малая Хобда", coords: [48.0, 55.0] },
    { name: "озеро Жиренькол", coords: [47.5, 52.0] },
    { name: "река Сагыз", coords: [47.7, 54.0] },
    { name: "река Кичаг", coords: [47.9, 52.3] },
    { name: "река Киыл", coords: [48.2, 53.1] },
    { name: "река Илек", coords: [48.8, 55.4] },
    { name: "река Уил", coords: [48.1, 53.7] },
    { name: "озеро Индер", coords: [48.3, 51.6] },
    { name: "река Эмба", coords: [47.4, 54.2] },
    { name: "город Атырау", coords: [47.1167, 51.8833] },
    { name: "село Ақжайық", coords: [47.2, 51.8] },
    { name: "район Денгиз", coords: [46.9, 51.5] },
    { name: "район Кулсары", coords: [47.0667, 52.1667] },
    { name: "район Курмангазы", coords: [46.6, 49.2] },
    { name: "район Махамбет", coords: [47.2, 51.6] },
    { name: "район Исатай", coords: [46.7, 51.3] },
    { name: "район Индер", coords: [48.2, 51.5] },
    { name: "село Байчунас", coords: [47.0, 52.0] },
    { name: "село Аккистау", coords: [47.4, 51.7] },
    { name: "село Миялы", coords: [48.0, 53.5] },
    { name: "село Аккайын", coords: [47.9, 53.3] },
    { name: "село Кошкар", coords: [48.2, 52.8] },
    { name: "село Жыланды", coords: [47.6, 53.1] },
    { name: "посёлок Балыкши", coords: [47.0, 51.9] },
    { name: "район Жылыой", coords: [47.1, 52.1] },
    { name: "район Кызылкога", coords: [47.3, 52.7] },
    { name: "село Кызылжар", coords: [47.8, 51.5] },
    { name: "район Химпоселок", coords: [47.3, 51.6] },
    { name: "село Комсомол", coords: [46.9, 51.2] },
    { name: "город Сарайчик", coords: [47.5, 51.4] },
    { name: "район Макат", coords: [47.1, 52.0] },
    { name: "село Искене", coords: [47.4, 52.3] },
    { name: "посёлок Яманка", coords: [47.2, 51.5] },
    { name: "посёлок Доссор", coords: [47.4, 52.5] },
    { name: "Прикаспийская низменность", coords: [46.5, 50.5] },
    { name: "Рын-пески", coords: [47.7, 52.9] },
    { name: "Бузанай", coords: [47.3, 51.1] },
    { name: "Ментеке", coords: [47.5, 51.2] },
    { name: "гора Желтау", coords: [48.4, 52.8] },
    { name: "пески Каракум", coords: [47.9, 50.7] },
    { name: "мост Алиева", coords: [47.1, 51.9] },
    { name: "Центральный мост", coords: [47.2, 51.8] },
    { name: "Жилгородок", coords: [47.3, 51.7] },
    { name: "мост Балыкши", coords: [47.0, 51.6] },
    { name: "мост Мечников", coords: [47.2, 51.9] },
    { name: "Объездной мост", coords: [47.1, 51.7] }
];

// Добавление маркеров на карту
locations.forEach(location => {
    L.marker(location.coords).addTo(map)
      .bindPopup(`<b>${location.name}</b>`);
});

  
