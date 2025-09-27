export const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and superior sound quality.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    popularity: 95
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with fitness tracking, heart rate monitor, and long battery life.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    popularity: 88
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic adjustable laptop stand made from premium aluminum for better posture.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    popularity: 72
  },
  {
    id: '4',
    name: 'Coffee Mug',
    description: 'Insulated stainless steel coffee mug that keeps your drinks hot or cold for hours.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Kitchen',
    popularity: 65
  },
  {
    id: '5',
    name: 'Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature settings.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Kitchen',
    popularity: 78
  },
  {
    id: '6',
    name: 'Wireless Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    popularity: 82
  },
  {
    id: '7',
    name: 'Phone Case',
    description: 'Premium leather phone case with card slots and magnetic closure for ultimate protection.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    popularity: 91
  },
  {
    id: '8',
    name: 'Backpack',
    description: 'Water-resistant laptop backpack with multiple compartments and USB charging port.',
    price: 69.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Accessories',
    popularity: 76
  }
];

export const categories = ['All', 'Electronics', 'Accessories', 'Home & Kitchen'];

export const getMinMaxPrice = () => {
  const prices = products.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
};