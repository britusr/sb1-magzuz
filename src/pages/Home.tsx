import React, { useState } from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { CategoryMenu } from '../components/CategoryMenu';
import { PlantCard } from '../components/PlantCard';
import { categories, plants } from '../data/mockData';

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string, subcategory?: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory || null);
  };

  const filteredPlants = plants.filter(plant => {
    if (!selectedCategory) return true;
    if (!selectedSubcategory) return plant.category === selectedCategory;
    return plant.category === selectedCategory && plant.subcategory === selectedSubcategory;
  });

  const featuredPlants = plants.filter(plant => plant.featured);

  return (
    <div className="min-h-screen">
      <HeroSlider featuredPlants={featuredPlants} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Categories</h2>
            <CategoryMenu
              categories={categories}
              onSelectCategory={handleCategorySelect}
            />
          </div>
          
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCategory || 'All Plants'}
                {selectedSubcategory && ` - ${selectedSubcategory}`}
              </h2>
              <span className="text-gray-500 dark:text-gray-400">
                {filteredPlants.length} plants
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlants.map((plant) => (
                <div
                  key={plant.id}
                  className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <PlantCard plant={plant} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};