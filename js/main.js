/*
id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

[
  {
    id: 12,
    url: 'photos/23.jpg',
    description: 'Было здорово! Надо чаще собираться.',
    likes: 10,
    comments: [
      {
          id: 135,
          avatar: 'img/avatar-6.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
      {
          id: 134,
          avatar: 'img/avatar-6.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
            {
          id: 132,
          avatar: 'img/avatar-7.svg',
          message: 'В целом всё неплохо. Но не всё.',
          name: 'Артём',
      },
    ]
  },
  {},
  {}
]
*/

const PHOTOS_COUNT = 25;
const MAX_LIKES = 15;
const MIN_LIKES = 200;

const DESCRIPTIONS = [
  'Красивый пейзаж',
  'Было здорово! Надо чаще собираться.',
  'Самый лучший день в моей жизни',
  'Спасибо всем кто был рядом , это был лучший юбилей',
  'Я и мои друзья. Люблю их за это.'
];

const name = [
  'Елена',
  'Вика',
  'Генадий',
  'Артем',
  'Денис',
  'Таня',
  'Алена',
  'Настя',
  'Игорь',
  'Константин',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRange = (min, max) => {
  const previewsValues = [];

  return () => {
    let randomNumber = getRandomInteger(min, max);
    if (previewsValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа диапазона от ${min} до ${max}`);
      return null;
    }
    while (previewsValues.includes(randomNumber)) {
      randomNumber = getRandomInteger(min, max);
    }
    previewsValues.push(randomNumber);
    return randomNumber;
  }
}

const getUniqueId = getUniqueRange(0, PHOTOS_COUNT - 1);
const getUniquePhoto = getUniqueRange(1, PHOTOS_COUNT);

const createPhoto = () => ({
  id: getUniqueId(),
  url: `photos/${getUniquePhoto()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: 10,
  comments: []
})

const createPhotos = (n) => Array.from({ length: n }, createPhoto);

// console.log(createPhotos(PHOTOS_COUNT));
