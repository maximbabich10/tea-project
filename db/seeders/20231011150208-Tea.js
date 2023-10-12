

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [{
    name: 'Эрл Грей',
    location: '41.02, 40.51',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8YklKb_SJu3zHtGxN_XWyBdLybCjHDWAdw&usqp=CAU',
    description: 'Пикантный, интригующий и завораживающий. Истинный дэнди чая. В нем экзотические цитрусовые ноты и непринужденное благородство цейлонских сортов'
  },
  {
    name: 'Цейлон',
    location: '6.88, 79.91',
    image: 'https://encrypted-tbn0.gstatic.com/https://upload.wikimedia.org/wikipedia/commons/6/64/Uruwala_OP1.jpg?q=tbn:ANd9GcQm8YklKb_SJu3zHtGxN_XWyBdLybCjHDWAdw&usqp=CAU',
    description: 'Цейлон обладает насыщенным, крепким, немного терпким привкусом, что является «визитной карточкой» качества и отличительной особенностью в сравнении с другими'
  },
  {
    name: 'Матча',
    location: '35.02, 135.76',
    image: 'https://slon-tea.ru/wa-data/public/blog/img/matcha_01.jpg',
    description: 'Чай Матча традиционно используется в японской чайной церемонии. Особенности выращивания и приготовления позволяют этому напитку сохранять огромное количество полезных веществ'
  },
  {
    name: 'Мате',
    location: '4.53,-53.32',
    image: 'https://www.rusteaco.ru/images/teacoffee/kak-zavarivat-chay-mate-v-chaynike1.png',
    description: 'Прославленный чай мате, который еще называют «иерба мате» считается традиционным напитком жителей Южной Америки'
  },
  {
    name: 'Серебряные иглы Чанша Ти Белый чай',
    location: '35.93,103.34',
    image: 'https://old.cantata.ru/upload/resize/09/09e4ddc79cdf241b8b41598bb1819cd8_1023x600.jpg',
    description: 'Китайский белый чай с севера провинции Фуцзянь. Его вкус лучше всего раскрывается при традиционном китайском способе заваривания'
  },
  {
    name: 'Дарджилинг Rishihat',
    location: '24.59, 72.70',
    image: 'https://moschaitorg.ru/upload/resize_cache/iblock/8be/1000_1000_222b7c3585b318343053213777ce5de05/8beac49e13ba1fe5458aa7a02231f52f.jpg',
    description: 'Этот Дарджилинг выращивается на высоте 1000–2500 метров над уровнем моря на индийской плантации.Здесь чайные кусты впитали в себя чудесный и целебный свежий горный воздух, что наделяет напиток уникальными свойствами и незабываемыми вкусовыми качествами.'
  },
  {
    name: 'Те Гуань Инь',
    location: '26.01, 119.31',
    image: 'https://101tea.ru/upload/ammina.optimizer/jpg-webp/q70/upload/medialibrary/96e/96e78e9b43ba2809204e970c47b0604d.webp',
    description: 'Тегуаньинь - это удивительный аромат! Когда однажды вы попробуете настоящий Тегуаньинь, то навсегда запомните его. Он ярок, но в то же время совершенно ненавязчив'
  },
  {
    name: 'Золотой Юннань',
    location: '26.01, 119.31',
    image: 'https://tea-ru.ru/uploads/product/1220/g5f0836881c610173.jpg',
    description: 'Чай из одноименной провинции с большим содержанием золотистых чайных почек. В чае присутствуют нотки изюма, сливы, специй и кленового сиропа'
  },
  {
    name: 'Пуэр ',
    location: '26.01, 119.31',
    image: 'https://tea-ru.ru/uploads/product/1220/g5f0836881c610173.jpg',
    description: 'Чай из одноименной провинции с большим содержанием золотистых чайных почек. В чае присутствуют нотки изюма, сливы, специй и кленового сиропа'
  },
  {
    name: 'Лапсанг Сушонг',
    location: '47.75, 112.30',
    image: 'https://tea.ru/upload/blog/0321/2303/1/02.jpg',
    description: 'Лапсанг сушонг – чай со вкусом дыма, дёгтя или копчёностей '
  },
  {
    name: 'Большой Красный Халат (Да ХунПао)',
    location: '21.71, 98.90',
    image: 'https://dom-chaya.ru/upload/iblock/4c3/4c3d819e9bc29ee70159228f71cf864c.jpg',
    description: '大红袍 — «Большой Красный Халат», утёсный китайский чай, который производят на северо-западе провинции Фуцзянь, в горах Уи. По классу его относят к улунам средней ферментации или полуферментированным улунам.'
  },
], {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
