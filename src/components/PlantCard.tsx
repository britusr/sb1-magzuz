import React from 'react';
import { Plant } from '../types';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{plant.name}</h3>
            <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
          </div>
          <span className="text-lg font-bold text-green-600">${plant.price}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs ${
            plant.careLevel === 'easy' ? 'bg-green-100 text-green-700' :
            plant.careLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {plant.careLevel} care
          </span>
          <span className="text-sm text-gray-500">{plant.age} years old</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{plant.description}</p>
        
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: plant })}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};