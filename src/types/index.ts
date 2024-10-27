export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  price: number;
  age: number;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  careLevel: 'easy' | 'medium' | 'hard';
  stock: number;
  featured?: boolean;
}

export interface CartItem extends Plant {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}