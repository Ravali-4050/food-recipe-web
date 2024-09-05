import React, { useState } from 'react';

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic'],
    instructions: 'Cook the spaghetti. In another pan, cook the beef, then add onion, garlic, and tomato sauce. Mix with spaghetti.',
  },
  {
    id: 2,
    name: 'Chicken Curry',
    ingredients: ['Chicken', 'Curry powder', 'Coconut milk', 'Onion', 'Garlic'],
    instructions: 'Cook the chicken with onion and garlic, then add curry powder and coconut milk. Simmer until chicken is cooked.',
  },
  {
    id: 3,
    name: 'Potato Curry',
    ingredients: ['Potatoes', 'Sautéed onions', 'Tomatoes', 'Ginger', 'Garlic', 'Spices and herbs'],
    instructions: 'Boil the potatoes. Sauté onions, garlic, and ginger, then add tomatoes and spices. Add potatoes and cook until soft.',
  },
  {
    id: 4,
    name: 'Grilled Cheese Sandwich',
    ingredients: ['Bread', 'Cheese', 'Butter'],
    instructions: 'Butter the bread slices. Place cheese between the slices and grill until golden brown on both sides.',
  },
  {
    id: 5,
    name: 'Vegetable Stir Fry',
    ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Garlic', 'Ginger'],
    instructions: 'Stir fry the vegetables with garlic and ginger. Add soy sauce and cook until the vegetables are tender.',
  },
  {
    id: 6,
    name: 'Beef Tacos',
    ingredients: ['Ground beef', 'Taco shells', 'Lettuce', 'Tomato', 'Cheese', 'Sour cream'],
    instructions: 'Cook the ground beef with taco seasoning. Serve in taco shells with lettuce, tomato, cheese, and sour cream.',
  },
  {
    id: 7,
    name: 'Margarita Pizza',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Basil', 'Olive oil'],
    instructions: 'Spread tomato sauce on the dough, top with mozzarella, and bake. Add fresh basil and drizzle with olive oil before serving.',
  },
  {
    id: 8,
    name: 'Caesar Salad',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing', 'Chicken (optional)'],
    instructions: 'Mix lettuce, croutons, and Parmesan cheese. Toss with Caesar dressing. Add grilled chicken if desired.',
  },
  {
    id: 9,
    name: 'Pancakes',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking powder', 'Butter', 'Maple syrup'],
    instructions: 'Mix flour, milk, eggs, and baking powder to form a batter. Cook on a buttered griddle until golden brown. Serve with butter and maple syrup.',
  },
  {
    id: 10,
    name: 'Lemon Garlic Shrimp',
    ingredients: ['Shrimp', 'Lemon', 'Garlic', 'Butter', 'Parsley'],
    instructions: 'Sauté garlic in butter, then add shrimp and cook until pink. Squeeze lemon juice over shrimp and garnish with parsley.',
  },
];


function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="min-h-screen bg-emerald-300 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Food Recipe App</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recipes</h2>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id} className="mb-2">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="w-full text-left p-4 bg-white shadow rounded hover:bg-blue-100"
                  >
                    {recipe.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selectedRecipe && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Recipe Details</h2>
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">{selectedRecipe.name}</h3>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside mb-4">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-2">Instructions:</h4>
                <p>{selectedRecipe.instructions}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
