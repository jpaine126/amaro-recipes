function getRecipes(recipes) {
    var allRecipes = recipes.recipes;
    var recipeNames = [];

    for (var recipe of allRecipes) {
        recipeNames.push(recipe.title);
    }

    return recipeNames
}

function insertRecipeNamesList(recipeNames, id) {
    var mainContainer = document.getElementById(id);
    for (var recipeName of recipeNames) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var link = document.createTextNode(recipeName);
        a.appendChild(link);
        a.title = recipeName;
        a.href = "/recipes/" + recipeName;
        li.appendChild(a);
        mainContainer.appendChild(li);
    }
}

import data from "../../data/recipes.json" assert { type: "json" };

insertRecipeNamesList(getRecipes(data), "recipe-list")



function makeWebpage(stub) {
    var opened = window.open(stub);
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
}
