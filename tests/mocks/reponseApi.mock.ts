export const cartsMock = [
  {
    id: 1,
    userId: 1,
    date: '2020-03-02T00:00:02.000Z',
    products: [
      {
        productId: 1,
        quantity: 4,
      },
      {
        productId: 2,
        quantity: 1,
      },
      {
        productId: 3,
        quantity: 6,
      },
    ],
    __v: 0,
  },
  {
    id: 2,
    userId: 1,
    date: '2020-01-02T00:00:02.000Z',
    products: [
      {
        productId: 2,
        quantity: 4,
      },
      {
        productId: 1,
        quantity: 10,
      },
      {
        productId: 5,
        quantity: 2,
      },
    ],
    __v: 0,
  },
  {
    id: 3,
    userId: 2,
    date: '2020-03-01T00:00:02.000Z',
    products: [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 9,
        quantity: 1,
      },
    ],
    __v: 0,
  },
  {
    id: 4,
    userId: 3,
    date: '2020-01-01T00:00:02.000Z',
    products: [
      {
        productId: 1,
        quantity: 4,
      },
    ],
    __v: 0,
  },
  {
    id: 5,
    userId: 3,
    date: '2020-03-01T00:00:02.000Z',
    products: [
      {
        productId: 7,
        quantity: 1,
      },
      {
        productId: 8,
        quantity: 1,
      },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 4,
    date: '2020-03-01T00:00:02.000Z',
    products: [
      {
        productId: 10,
        quantity: 2,
      },
      {
        productId: 12,
        quantity: 3,
      },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 8,
    date: '2020-03-01T00:00:02.000Z',
    products: [
      {
        productId: 18,
        quantity: 1,
      },
    ],
    __v: 0,
  },
];

export const user4Th = {
  address: {
    geolocation: {
      lat: '50.3467',
      long: '-20.1310',
    },
    city: 'San Antonio',
    street: 'Hunters Creek Dr',
    number: 6454,
    zipcode: '98234-1734',
  },
  id: 4,
  email: 'don@gmail.com',
  username: 'donero',
  password: 'ewedon',
  name: {
    firstname: 'don',
    lastname: 'romer',
  },
  phone: '1-765-789-6734',
  __v: 0,
};

export const responseCartHistory = {
  nome: 'don romer',
  email: 'don@gmail.com',
  ultimasCompras: [
    {
      id: 6,
      userId: 4,
      date: '2020-03-01T00:00:02.000Z',
      products: [
        {
          productId: 10,
          quantity: 2,
        },
        {
          productId: 12,
          quantity: 3,
        },
      ],
      __v: 0,
    },
  ],
};

export const allCartsByUserMock = [
  {
    id: 6,
    userId: 4,
    date: '2020-03-01T00:00:02.000Z',
    products: [
      {
        productId: 10,
        quantity: 2,
      },
      {
        productId: 12,
        quantity: 3,
      },
    ],
    __v: 0,
  },
];