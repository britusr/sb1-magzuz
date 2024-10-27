import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Category } from '../types';

interface CategoryMenuProps {
  categories: Category[];
  onSelectCategory: (category: string, subcategory?: string) => void;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, onSelectCategory }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <div key={category.id} className="relative">
          <button
            onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-green-600">{category.name}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openCategory === category.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openCategory === category.id && (
            <div className="mt-1 ml-4 space-y-1">
              {category.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onSelectCategory(category.name, sub.name)}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md"
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};