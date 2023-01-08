import recipes from "/data/recipes.json" assert { type: "json" };

export function makeRecipePage(recipeId) {
    var recipe = recipes.filter(function (el) {
        return el.id == recipeId;
    });

    var mainContainer = document.createElement("div");
    mainContainer.className = "recipe-block";

    if (recipe.length == 0) {
        console.log("recipe not found")
        
    } else {
        recipe = recipe[0]
        console.log(recipe)
        var header = document.createElement("h1");
        header.innerText = recipe.title
        var description = document.createElement("p")
        description.innerText = recipe.description
        
        mainContainer.appendChild(header)
        mainContainer.appendChild(description)
    }
    return mainContainer
}

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
