import React from "react";
import Button from "./Button";

const Recipe = () => {
    const [recipe, setRecipe] = React.useState({ name: "", category: "", instructions: "" });

    const fetchApi = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php") // Use random recipe API
            .then((res) => res.json())
            .then((data) => {
                if (data.meals) {
                    setRecipe({
                        name: data.meals[0].strMeal,
                        category: data.meals[0].strCategory,
                        instructions: data.meals[0].strInstructions
                    });
                } else {
                    setRecipe({ name: "No recipe found", category: "", instructions: "" });
                }
            })
            .catch((error) => {
                console.error("Error fetching recipe:", error);
                setRecipe({ name: "Error fetching recipe", category: "", instructions: "" });
            });
    };

    return (
        <div className="Recipe">
            <Button callApi={fetchApi} /> 
            <p>Meal: {recipe.name}</p>
            <p>Category: {recipe.category}</p>
            <p>Instructions: {recipe.instructions}</p>
        </div>
    );
};

export default Recipe;

