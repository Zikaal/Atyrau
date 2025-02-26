const bounds = [
      [45.5, 46.5],  // Юго-западная граница
      [49.5, 56.0]   // Северо-восточная граница
    ];

    // Инициализация карты
    const map = L.map('map', {
      center: [47.5, 52.5], // Центр карты (например, Атырау)
      zoom: 7,
      minZoom: 6,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0
    });

    // Подключение OpenStreetMap в качестве базового слоя
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Массив локаций. Для каждой локации добавлено свойство photo с URL изображения.
    const locations = [
      {
        name: "Каспийское море",
        coords: [46.53799773173459, 51.519102284266985],
        meaning: "От персидского 'Место коней'",
        photo: "img/1.jpg"
      },
      {
        name: "река Жайык",
        coords: [47.10166998222104, 51.918833839546025],
        meaning: "старое название Яик (от тюрк. ‘высший бог’, ‘творец’)",
        photo: "img/2.jpg"
      },
      {
        name: "река Сагиз",
        coords: [48.232444103032286, 54.88293152796897],
        meaning: "тюрк. ‘сростки кристаллов соли’",
        photo: "img/3.jpg"
      },
      {
        name: "река Кичаг",
        coords: [46.74221337732942, 48.628592540911725],
        meaning: "каз.Кигáш – ‘кривой’, ‘загнутый’, ‘изогнутый’",
        photo: "img/4.jpg"
      },
      {
        name: "река Уил",
        coords: [48.613042476544216, 52.413648321690964],
        meaning: "каз. Ойыл - ‘нефть’",
        photo: "img/5.jpg"
      },
      {
        name: "озеро Индер",
        coords: [48.49985796846053, 51.91291589164033],
        meaning: "каз. Индербор - ‘мел’",
        photo: "img/6.jpg"
      },
      {
        name: "река Эмба",
        coords: [47.07270174008425, 55.04914347137451],
        meaning: "каз. Жем – ‘пропитание’",
        photo: "img/7.jpg"
      },
      {
        name: "город Атырау",
        coords: [47.09562116413034, 51.9191234495532],
        meaning: "знач. ‘устье реки’",
        photo: "img/8.jpg"
      },
      {
        name: "село Ақжайық",
        coords: [47.06876588678999, 51.87321043366877],
        meaning: "каз. Ақ – ‘белый’, жайық – ‘река Урал’",
        photo: "img/9.jpg"
      },
      {
        name: "город Кульсары",
        coords: [46.96255091470504, 54.01307981474327],
        meaning: "посвящена Кульсары Тинекейулы",
        photo: "img/10.jpg"
      },
      {
        name: "район Курмангазы",
        coords: [47.54894143249952, 48.922924083237966],
        meaning: "посвящена Курмангазы Сагырбайулы",
        photo: "img/11.jpg"
      },
      {
        name: "район Махамбет",
        coords: [47.67678000681049, 51.71424706948621],
        meaning: "посвящена Махамбе́т Утеми́сулы",
        photo: "img/12.jpg"
      },
      {
        name: "район Исатай",
        coords: [46.79707660138262, 50.0677443077779],
        meaning: "посвящена Исатай Тайманулы",
        photo: "img/13.jpg"
      },
      {
        name: "район Индер",
        coords: [48.63833663515119, 51.4831910045894],
        meaning: "каз. Индербор – ‘мел’",
        photo: "img/14.jpg"
      },
      {
        name: "село Байчунас",
        coords: [47.24092407144931, 52.93913783543513],
        meaning: "каз. Байшонас – ‘нефтяное месторождение’",
        photo: "img/15.jpg"
      },
      {
        name: "село Аккистау",
        coords: [47.22040201586229, 51.00694595500151],
        meaning: "каз. Аққыстау; Ақ – ‘белый’, қыстау – ‘зимовать’, ‘проводить зиму’",
        photo: "img/16.jpg"
      },
      {
        name: "село Миялы",
        coords: [48.88412895727724, 53.794812897481684],
        meaning: "каз. ‘местность, где много растет солодки’",
        photo: "img/17.jpg"
      },
      {
        name: "село Аккайын",
        coords: [47.42135398831659, 51.83204017487015],
        meaning: "каз. Аққайың; ақ – белый, қайың – береза",
        photo: "img/18.jpg"
      },
      {
        name: "село Кошкар",
        coords: [47.4321801403823, 53.446811526350366],
        meaning: "каз. Қошқар – ‘баран’",
        photo: "img/19.jpg"
      },
      {
        name: "село Жыланды",
        coords: [46.620946034137425, 48.6444846070973],
        meaning: "каз. Жыланды – ‘змеиний, со змеями’",
        photo: "img/20.jpg"
      },
      {
        name: "посёлок Балыкши",
        coords: [47.08441851970366, 51.878385197111854],
        meaning: "каз. Балықшы – ‘рыбак’, ‘рыболов’",
        photo: "img/21.jpg"
      },
      {
        name: "район Жылыой",
        coords: [46.76967699693299, 54.26289405862465],
        meaning: "каз. Жылыой; жылы – ‘теплый’, ой – ‘впадина’, ‘низина’, ‘долина’",
        photo: "img/22.jpg"
      },
      {
        name: "район Кызылкога",
        coords: [48.38084482963372, 53.8199179136008],
        meaning: "қызыл - ‘красный’, қоға - ‘рогоз’",
        photo: "img/23.jpg"
      },
      {
        name: "село Кызылжар",
        coords: [48.206263858940105, 51.595830867859306],
        meaning: "Қызылжар - ‘красный овраг’",
        photo: "img/24.jpeg"
      },
      {
        name: "район Химпоселок",
        coords: [47.092412444334705, 51.94130874241918],
        meaning: "'химический поселок'",
        photo: "img/25.jpg"
      },
      {
        name: "село Сарайчик",
        coords: [47.50039899381784, 51.7194054433137],
        meaning: "От персидского ‘дворец’",
        photo: "img/26.jpg"
      },
      {
        name: "район Макат",
        coords: [47.644391452692695, 53.331884456856365],
        meaning: "каз. Мақат – ‘душа’, ‘дух’",
        photo: "img/27.jpeg"
      },
      {
        name: "село Искене",
        coords: [47.22596536159137, 52.66903636706324],
        meaning: "каз. Ескене – ‘сознание’, ‘дух’, ‘разум’, ‘ум’",
        photo: "img/28.jpg"
      },
      {
        name: "село Махамбет",
        coords: [47.67125732319936, 51.586174161717686],
        meaning: "посвящена Махамбе́т Утеми́сулы",
        photo: "img/29.jpg"
      },
      {
        name: "посёлок Доссор",
        coords: [47.52402729496593, 52.981352077712444],
        meaning: "каз. Доссор; дос – ‘друг’, сор – ‘солончак’, ‘засолённая местность’",
        photo: "img/30.jpg"
      },
      {
        name: "Рын-пески",
        coords: [47.33356819464468, 48.880091049761155],
        meaning: "каз. Нарын құмы — ‘узкий песок’",
        photo: "img/31.jpg"
      },
      {
        name: "Гора Желтау",
        coords: [46.96255091470504, 54.01307981474327],
        meaning: "каз. Желтау; жел – ‘ветер’, тау – ‘гора’",
        photo: "img/32.jpg"
      },
      {
        name: "Мост Алиева",
        coords: [47.11746090196577, 51.9210756390379],
        meaning: "посвящени Алиеву",
        photo: "img/33.jpg"
      },
      {
        name: "Центральный мост",
        coords: [47.10530653079645, 51.91967067815934],
        meaning: "посвящен",
        photo: "img/34.jpg"
      },
      {
        name: "мост Жилгородок",
        coords: [47.09814809092486, 51.89373083727956],
        meaning: "(‘жилой комплекс, поселок для работников строящегося предприятия’)",
        photo: "img/35.jpg"
      },
      {
        name: "Мост Балықши",
        coords: [47.07998659163784, 51.87183895262074],
        meaning: "каз. Балықшы – ‘рыбак’, ‘рыболов’",
        photo: "img/36.jpg"
      },
      {
        name: "Мост Мечников",
        coords: [47.12859465417639, 51.924506096709074],
        meaning: "посвящени Ильи Мечникова",
        photo: "img/37.jpg"
      },
      {
        name: "Объездной мост",
        coords: [47.145251, 51.930272],
        meaning: "для обьезда",
        photo: "img/38.jpg"
      }
    ];

    // Добавляем маркеры на карту с попапами, содержащими изображение, название и пояснение
    locations.forEach(location => {
      const popupContent = `
        <div>
          <h3>${location.name}</h3>
          ${location.photo ? `<img src="${location.photo}" alt="${location.name}" class="popup-image">` : ''}
          <p>${location.meaning}</p>
        </div>
      `;
      L.marker(location.coords)
        .addTo(map)
        .bindPopup(popupContent);
    });
