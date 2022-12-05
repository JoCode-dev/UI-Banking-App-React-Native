const onboarding_screens = [
  {
    id: 1,
    bannerImage: require('../assets/images/onboard_1.png'),
    description: 'Manage your finances in the app. Yout money is safe here.',
  },
  {
    id: 2,
    bannerImage: require('../assets/images/onboard_2.png'),
    description: 'Keep your finances safe. And make fast operations',
  },
  {
    id: 3,
    bannerImage: require('../assets/images/onboard_3.png'),
    description: 'We are here for you ♡',
  },
];

const cards = [
  {
    id: 1,
    balances: '6,869',
    cc: '1762',
    logo: require('../assets/images/visa.png'),
    backgroundImage: require('../assets/images/card_1.jpg'),
    color: 'black',
  },
  {
    id: 2,
    balances: '3,125',
    cc: '3869',
    logo: require('../assets/images/visa.png'),
    backgroundImage: require('../assets/images/card_2.jpg'),
    color: 'white',
  },
  {
    id: 3,
    balances: '8,125',
    cc: '1452',
    logo: require('../assets/images/visa.png'),
    backgroundImage: require('../assets/images/card_1.jpg'),
    color: 'black',
  },
];

const transactions = [
  {
    id: 1,
    title: 'PS Store',
    category: 'Electronics',
    icon: require('../assets/images/playstation.png'),
    type: 'sent',
    amount: '50.65',
    cardNumber: '1762',
  },
  {
    id: 2,
    title: 'Nike',
    category: 'Shop',
    icon: require('../assets/images/nike.png'),
    type: 'sent',
    amount: '25.62',
    cardNumber: '1762',
  },

  {
    id: 3,
    title: 'Adidas',
    category: 'Shop',
    icon: require('../assets/images/adidas.png'),
    type: 'received',
    amount: '13.19',
    cardNumber: '3869',
  },
  {
    id: 4,
    title: 'PS Store',
    category: 'Electronics',
    icon: require('../assets/images/playstation.png'),
    type: 'sent',
    amount: '30.25',
    cardNumber: '1452',
  },
  {
    id: 5,
    title: 'Nike',
    category: 'Shop',
    icon: require('../assets/images/nike.png'),
    type: 'received',
    amount: '20.45',
    cardNumber: '1452',
  },
  {
    id: 6,
    title: 'PS Store',
    category: 'Electronics',
    icon: require('../assets/images/playstation.png'),
    type: 'sent',
    amount: '22.35',
    cardNumber: '1762',
  },
];

export default {
  onboarding_screens,
  cards,
  transactions,
};
