import React, { useState } from "react";


const initialRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
    ],
    instructions:
      "Cook the spaghetti. In another pan, cook the beef, then add onion, garlic, and tomato sauce. Mix with spaghetti.",
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: ["Chicken", "Curry powder", "Coconut milk", "Onion", "Garlic"],
    instructions:
      "Cook the chicken with onion and garlic, then add curry powder and coconut milk. Simmer until chicken is cooked.",
  },
  {
    id: 3,
    name: "Beef Tacos",
    ingredients: ["Taco shells", "Ground beef", "Cheese", "Lettuce", "Tomato"],
    instructions:
      "Cook the beef, place it into taco shells, and top with cheese, lettuce, and tomato.",
  },
  {
    id: 4,
    name: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions:
      "Butter the bread, place cheese between slices, and grill until golden brown.",
  },
  {
    id: 5,
    name: "Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Baking powder", "Sugar"],
    instructions:
      "Mix ingredients, pour batter onto a hot pan, and cook until golden.",
  },
  {
    id: 6,
    name: "Stir-fry Vegetables",
    ingredients: ["Broccoli", "Carrots", "Soy sauce", "Garlic", "Ginger"],
    instructions:
      "Stir-fry the vegetables in soy sauce, garlic, and ginger until tender.",
  },
  {
    id: 7,
    name: "Caesar Salad",
    ingredients: ["Lettuce", "Croutons", "Caesar dressing", "Parmesan"],
    instructions:
      "Toss lettuce with croutons, Caesar dressing, and Parmesan cheese.",
  },
  {
    id: 8,
    name: "Margarita Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
    instructions:
      "Spread sauce on dough, top with mozzarella and basil, and bake.",
  },
  {
    id: 9,
    name: "Scrambled Eggs",
    ingredients: ["Eggs", "Butter", "Salt", "Pepper"],
    instructions:
      "Whisk eggs, cook in butter, and season with salt and pepper.",
  },
  {
    id: 10,
    name: "Fruit Smoothie",
    ingredients: ["Banana", "Berries", "Yogurt", "Honey"],
    instructions: "Blend ingredients until smooth and serve chilled.",
  },
  {
    id: 11,
    name: "Tomato Soup",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable broth"],
    instructions:
      "Cook tomatoes, onion, and garlic in broth, then blend until smooth.",
  },
  {
    id: 12,
    name: "Grilled Chicken",
    ingredients: ["Chicken breast", "Olive oil", "Garlic", "Rosemary"],
    instructions:
      "Marinate chicken in olive oil, garlic, and rosemary, then grill.",
  },
];


function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  // Add new recipe
  const addRecipe = () => {
    if (newRecipe.name && newRecipe.ingredients && newRecipe.instructions) {
      setRecipes([
        ...recipes,
        {
          id: recipes.length + 1,
          ...newRecipe,
          ingredients: newRecipe.ingredients.split(","),
        },
      ]);
      setNewRecipe({ name: "", ingredients: "", instructions: "" });
    }
  };

  // Delete recipe
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
    setSelectedRecipe(null);
  };

  // Start editing recipe
  const startEdit = (recipe) => {
    setSelectedRecipe(recipe);
    setNewRecipe({
      name: recipe.name,
      ingredients: recipe.ingredients.join(","),
      instructions: recipe.instructions,
    });
    setIsEditing(true);
  };

  // Update recipe
  const updateRecipe = () => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === selectedRecipe.id
          ? {
              ...selectedRecipe,
              ...newRecipe,
              ingredients: newRecipe.ingredients.split(","),
            }
          : recipe
      )
    );
    setIsEditing(false);
    setNewRecipe({ name: "", ingredients: "", instructions: "" });
    setSelectedRecipe(null);
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-r from-[#0A0B0D] to-[#2E3235] p-4 pb-6"
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Food Recipe App</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Recipes</h2>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id} className="mb-2">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="w-full text-left p-4 bg-white shadow rounded hover:bg-blue-100"
                  >
                    {recipe.name}
                  </button>
                  <div className="flex mt-2">
                    <button
                      onClick={() => startEdit(recipe)}
                      className="mr-2 text-sm bg-yellow-400 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRecipe(recipe.id)}
                      className="text-sm bg-red-400 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {selectedRecipe && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Recipe Details</h2>
              <div className="p-4 bg-white shadow rounded">
                <h3 className="text-xl font-bold mb-2">
                  {selectedRecipe.name}
                </h3>
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
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            {isEditing ? "Edit Recipe" : "Add New Recipe"}
          </h2>
          <div className="p-4 bg-white shadow rounded">
            <input
              type="text"
              name="name"
              value={newRecipe.name}
              onChange={handleInputChange}
              placeholder="Recipe Name"
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
              placeholder="Ingredients (comma separated)"
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
              placeholder="Instructions"
              className="w-full mb-2 p-2 border rounded"
            ></textarea>
            {isEditing ? (
              <button
                onClick={updateRecipe}
                className="w-full bg-yellow-400 text-white p-2 rounded"
              >
                Update Recipe
              </button>
            ) : (
              <button
                onClick={addRecipe}
                className="w-full bg-green-500 text-white p-2 rounded"
              >
                Add Recipe
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
