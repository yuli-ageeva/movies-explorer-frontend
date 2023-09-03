const movies = [{
  movieId: '11',
  nameRU: '«Роллинг Стоунз» в изгнании',
  nameEN: 'Stones in Exile',
  director: 'Стивен Кайак',
  country: "США",
  year: '2010',
  duration: '102',
  description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. " +
    "Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: " +
    "летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, " +
    "в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
  trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP',
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP'
},
  {
    movieId: '12',
    nameRU: '«Роллинг» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак',
    country: "США",
    year: '2010',
    duration: '102',
    description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. " +
      "Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: " +
      "летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, " +
      "в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP'
  },
  {
    movieId: '13',
    nameRU: '«Роллинг» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак',
    country: "США",
    year: '2010',
    duration: '102',
    description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. " +
      "Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: " +
      "летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, " +
      "в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP'
  }, {
    movieId: '16',
    nameRU: '«Роллинг» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак',
    country: "США",
    year: '2010',
    duration: '102',
    description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. " +
      "Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: " +
      "летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, " +
      "в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP'
  }, {
    movieId: '15',
    nameRU: '«Роллинг» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак',
    country: "США",
    year: '2010',
    duration: '102',
    description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. " +
      "Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: " +
      "летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, " +
      "в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPYNBKo1zsT_iRVR5GXpp7n1xgmaaFJdQ1RG0Okcd7r9cRMcP'
  }]

export default movies