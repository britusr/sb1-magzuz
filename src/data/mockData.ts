import { Plant, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Indoor Plants',
    icon: 'plant',
    subcategories: [
      { id: 'indoor-1', name: 'Air Purifying', categoryId: '1' },
      { id: 'indoor-2', name: 'Low Light', categoryId: '1' },
      { id: 'indoor-3', name: 'Pet Friendly', categoryId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Outdoor Plants',
    icon: 'tree',
    subcategories: [
      { id: 'outdoor-1', name: 'Flowering', categoryId: '2' },
      { id: 'outdoor-2', name: 'Shade Plants', categoryId: '2' },
      { id: 'outdoor-3', name: 'Sun Loving', categoryId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Succulents',
    icon: 'flower',
    subcategories: [
      { id: 'succ-1', name: 'Cacti', categoryId: '3' },
      { id: 'succ-2', name: 'Desert Plants', categoryId: '3' },
    ]
  },
  {
    id: '4',
    name: 'Herbs',
    icon: 'sprout',
    subcategories: [
      { id: 'herb-1', name: 'Culinary', categoryId: '4' },
      { id: 'herb-2', name: 'Medicinal', categoryId: '4' },
    ]
  },
];

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 45.99,
    age: 2,
    category: 'Indoor Plants',
    subcategory: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
    description: 'Popular houseplant with distinctive split leaves',
    careLevel: 'easy',
    stock: 10,
    featured: true
  },
  {
    id: '2',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    price: 29.99,
    age: 1,
    category: 'Indoor Plants',
    subcategory: 'Air Purifying',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b30?auto=format&fit=crop&w=800&q=80',
    description: 'Air-purifying plant with striking upright leaves',
    careLevel: 'easy',
    stock: 15,
    featured: true
  },
  {
    id: '3',
    name: 'Echeveria Elegans',
    scientificName: 'Echeveria elegans',
    price: 12.99,
    age: 1,
    category: 'Succulents',
    subcategory: 'Desert Plants',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80',
    description: 'Beautiful rosette-forming succulent',
    careLevel: 'easy',
    stock: 20,
    featured: true
  }
];