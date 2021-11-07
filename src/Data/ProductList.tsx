interface ShopItems {
    id: number;
    title: string;
    price: number;
    src: string;
    type: string;
  }

const shopItems: ShopItems[] = [
  {
    id: 1,
    title: 'sweet item',
    price: 5,
    src: '../Assets/Images/sweets-1.jpeg',
    type: 'sweets',
  },
  {
    id: 2,
    title: 'cupcake item',
    price: 5,
    src: './Assets/Images/cupcake-1.jpeg',
    type: 'cupcakes',
  },
  {
    id: 3,
    title: 'cake item',
    price: 5,
    src: './Assets/Images/cake-1.jpeg',
    type: 'cakes',
  },
  {
    id: 4,
    title: 'doughnut item',
    price: 5,
    src: './Assets/Images/doughnut-1.jpeg',
    type: 'doughnuts',
  },
  {
    id: 5,
    title: 'sweet item',
    price: 10,
    src: './Assets/Images/sweets-2.jpeg',
    type: 'sweets',
  },
  {
    id: 6,
    title: 'cupcake item',
    price: 10,
    src: './Assets/Images/cupcake-2.jpeg',
    type: 'cupcakes',
  },
  {
    id: 7,
    title: 'cake item',
    price: 10,
    src: './Assets/Images/cake-2.jpeg',
    type: 'cakes',
  },
  {
    id: 8,
    title: 'doughnut item',
    price: 10,
    src: './Assets/Images/doughnut-2.jpeg',
    type: 'doughnuts',
  },
  {
    id: 9,
    title: 'sweet item',
    price: 15,
    src: './Assets/Images/sweets-3.jpeg',
    type: 'sweets',
  },
];

export { shopItems };
export type { ShopItems };
