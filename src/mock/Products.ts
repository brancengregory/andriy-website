import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wedding Cake Topper',
    image: '/assets/wedding-cake-topper.jpg',
    price: 19.99,
    description: 'A beautiful wedding cake topper for your special day.',
  },
  {
    id: 2,
    name: 'Christmas Ornament',
    image: '/assets/christmas-ornament.jpg',
    price: 9.99,
    description: 'A festive ornament to brighten up your Christmas tree.',
  },
  // Add more products as needed
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === parseInt(id));
}