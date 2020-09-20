//set local storage
const addRecipeContainer = document.querySelector('div#addRecipe');
const recipeList = document.querySelector('article#recipes');
const button = document.querySelector('input#submit');
const data = JSON.parse(localStorage.getItem('recipes'));

function loadInitialRecipes() {
    let itemsArray = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];
    if(itemsArray.length == 0) {
        loadAllRecipes(); 
    }
}

function loadAllRecipes() {
    for (let i = 0; i < recipes.length; i++) {
        let currentRecipes = getAllRecipes();
        currentRecipes.push(recipes[i]);
        localStorage.setItem('recipes', JSON.stringify(currentRecipes));
    }
}

function getAllRecipes() {
    let recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];
    return recipes;
}

//add recipe to local storage
function addRecipe(newRecipe) {
    let currentRecipes = getAllRecipes();
    currentRecipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(currentRecipes));
}

//edit recipe 
function loadEditRecipe() {
    let editedRecipes = localStorage.getItem('editRecipes') ? JSON.parse(localStorage.getItem('editRecipes')) : [];
    return editedRecipes;
}

function addEditedRecipe(listOfRecipes, i) {
    let addEditedRecipe = localStorage.setItem('editRecipes', JSON.stringify(listOfRecipes[i]));
    return addEditedRecipe;
}

//remove recipe for local Storage
function deleteRecipe(listOfRecipes) {
    return localStorage.setItem('recipes',JSON.stringify(listOfRecipes));
};