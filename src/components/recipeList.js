function insertRecipeNamesList(recipeNames, id) {
    var mainContainer = document.getElementById(id);
    for (var recipeName of recipeNames) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var link = document.createTextNode(recipeName.title);
        a.appendChild(link);
        a.title = recipeName.title;
        a.href = recipeName.slug;
        li.appendChild(a);
        mainContainer.appendChild(li);
    }
}

export function makeRecipeNamesContainer() {
    var mainContainer = document.createElement("ul");
    mainContainer.className = "recipe-list";
    for (var recipeName of recipes) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var link = document.createTextNode(recipeName.title);
        a.appendChild(link);
        a.title = recipeName.title;
        a.href = recipeName.slug;
        li.appendChild(a);
        mainContainer.appendChild(li);
    }

    return mainContainer
}

import recipes from "/data/recipes.json" assert { type: "json" };
// insertRecipeNamesList(recipes, "recipe-list");
