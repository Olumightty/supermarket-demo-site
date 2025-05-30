
import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Apples',
    description: 'Crisp and juicy apples, perfect for a healthy snack.',
    price: 2.49, // Sale price
    originalPrice: 2.99, // Original price
    image: '/apples.jpeg',
    dataAiHint: 'apples fruit',
    tag: 'SALE',
  },
  {
    id: '2',
    name: 'Organic Bananas',
    description: 'A bunch of ripe, organic bananas.',
    price: 1.99,
    image: '/banana.jpeg',
    dataAiHint: 'bananas fruit',
  },
  {
    id: '3',
    name: 'Whole Wheat Bread',
    description: 'Healthy and delicious whole wheat bread.',
    price: 3.49,
    image: '/wheat-bread.jpeg',
    dataAiHint: 'bread bakery',
    tag: 'NEW',
  },
  {
    id: '4',
    name: 'Free-Range Eggs',
    description: 'A dozen large free-range eggs.',
    price: 4.59, // Sale price
    originalPrice: 4.99, // Original price
    image: '/eggs.jpeg',
    dataAiHint: 'eggs farm',
    tag: 'SALE',
  },
  {
    id: '5',
    name: 'Almond Milk',
    description: 'Unsweetened almond milk, dairy-free alternative.',
    price: 3.29,
    image: '/almond-milk.jpeg',
    dataAiHint: 'milk alternative',
  },
  {
    id: '6',
    name: 'Avocado',
    description: 'Ripe and creamy avocados, sold individually.',
    price: 1.79,
    image: '/avocado.jpeg',
    dataAiHint: 'avocado fruit',
  },
  {
    id: '7',
    name: 'Spinach Bundle',
    description: 'Fresh bundle of organic spinach leaves.',
    price: 2.29,
    originalPrice: 2.49,
    image: '/spinach.jpeg',
    dataAiHint: 'spinach vegetable',
    tag: 'SALE',
  },
  {
    id: '8',
    name: 'Dark Chocolate Bar',
    description: 'Rich 70% cocoa dark chocolate bar.',
    price: 3.99,
    image: '/dark-chocolate.jpeg',
    dataAiHint: 'chocolate snack',
  },
];
