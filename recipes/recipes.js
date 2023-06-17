const button = document.querySelector("#searchButton");
button.addEventListener("click", searchMeals);

async function searchMeals() {
  const ingredient = document.querySelector("#ingredientInput").value;
  const searchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(searchURL);
    const data = await response.json();
    const meals = data.meals;

    const searchResultsTitleContainer =
      document.getElementById("searchResultsTitle");
    searchResultsTitleContainer.innerHTML = "";
    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = "";

    if (meals) {
      const headerDiv = document.createElement("div");
      headerDiv.innerHTML = "<p>Your search results:</p>";
      searchResultsTitleContainer.appendChild(headerDiv);

      meals.forEach((meal) => {
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("mealDiv");

        mealDiv.innerHTML = `
          <img src="${meal.strMealThumb}">
          <p>${meal.strMeal}</p>
          <button class="get-recipe-button" data-id="${meal.idMeal}">Get Recipe</button>`;
        searchResultsContainer.appendChild(mealDiv);
      });
    } else {
      searchResultsContainer.innerHTML = "No meals found.";
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }

  registerGetRecipeButtons();
}

function registerGetRecipeButtons() {
  const searchResultsContainer = document.getElementById("searchResults");

  searchResultsContainer.addEventListener("click", function (event) {
    if (event.target.matches(".get-recipe-button")) {
      const id = event.target.dataset.id;
      getRecipeDetails(id);
    }
  });
}

async function getRecipeDetails(id) {
  const searchRecipeURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(searchRecipeURL);
    const data = await response.json();

    if (data.meals && data.meals.length > 0) {
      const meal = data.meals[0];

      const recipeName = meal.strMeal;
      const recipeCategory = meal.strCategory;
      const recipeInstructions = meal.strInstructions;
      const videoURL = meal.strYoutube;

      const recipeDetailsDiv = document.createElement("div");
      recipeDetailsDiv.classList.add("recipe-details");

      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerText = "X";

      closeButton.addEventListener("click", function () {
        recipeDetailsDiv.remove();
      });

      const recipeContentDiv = document.createElement("div");
      recipeContentDiv.classList.add("recipe-content");

      recipeContentDiv.innerHTML = `
        <h3>${recipeName}</h3>
        <div> ${recipeCategory}</div>
        <p><strong>Instructions:</strong></p>
        <p> ${recipeInstructions}</p>
        <img src="${meal.strMealThumb}">
        <a href="${videoURL}" target="_blank">Watch Video</a>
      `;

      recipeDetailsDiv.appendChild(closeButton);
      recipeDetailsDiv.appendChild(recipeContentDiv);

      const existingRecipeDetails = document.querySelector(".recipe-details");
      if (existingRecipeDetails) {
        existingRecipeDetails.remove();
      }

      const searchResultsContainer = document.getElementById("searchResults");
      searchResultsContainer.appendChild(recipeDetailsDiv);
    } else {
      console.log("No recipe found.");
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
}
