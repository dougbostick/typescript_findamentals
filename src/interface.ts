interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  imageUrl?: string;
}

interface Image {
  url: string;
  size: { width: number; height: number };
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: Image;
}

interface Backpack<T> {
  id: string;
  product: T;
  quantity: number;
}

interface Apple extends Product {}

const Iphones: Backpack<Apple> = {
  id: '1',
  product: {
    id: '1',
    name: 'iPhone X',
    price: 999,
    description: 'Apple iPhone X',
    image: {
      url: 'apple.com',
      size: { width: 100, height: 100 },
    },
  },
  quantity: 200,
};
