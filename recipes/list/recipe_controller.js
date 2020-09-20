var fileContent;

$(document).ready(function() {
    loadRecipes();
})

function loadRecipes() {
    loadInitialRecipes();
    let allRecipes = getAllRecipes();
    for (let i = 0; i < allRecipes.length; i++) {
        let object =recipes[i];
        appendRecipe(i, allRecipes[i].imageURL, allRecipes[i].name, allRecipes[i].type, allRecipes[i].ingredients, allRecipes[i].steps)
    }    
}

function appendRecipe(i, img, name, type, ingredients, steps) {
    $("#recipes").prepend(
        `<div class = "recipe"> \
            <img src = "${img}" class= "recipeImg">\
            <h2 class = "headerOfRecipe">${name}</h2>\
            <div class = "recipeText">\
                <p class = "ingredients">${ingredients}</p><p class = "steps">${steps}</p>\
            </div>
            <div class="buttons">
                <input type="button" value="Виж цялата рецепта" class = "seeWhole" onclick = "seeWhole()">
                <a class = "editRecipe"><i class="fas fa-pencil-alt"></i></a>
                <input type = "button" value = "X" class = "delete">
            </div>
         </div>`
    );
}

//create new recipe
window.addEventListener("load", function() {
    document.getElementById("imgInput").onchange = function(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function() {
              fileContent = reader.result;
        }
    }
});

$("#submit").click(function() {
    let newRecipe = {
        "name" : $("#name").val(),
        "ingredients" : $("#ingredients").val(),
        "steps" : $("#steps").val(),
        "imageURL" : fileContent,
        "type" : $("#dishType").val(),
    }
    addRecipe(newRecipe);
    getBackToMainPage();

});

function getBackToMainPage() {
    window.open('../../index.html', '_self');
}

//SearchRecipe
$("#searchRecipe").keyup(function() {
    handleSearch();
});

function handleSearch() {
    let input, filter, article, div, h2, i, txtValue;
    input = document.getElementById("searchRecipe");
    filter = input.value.toUpperCase();
    article = document.getElementById("recipes");
    div = article.getElementsByClassName("recipe");

    for (i = 0; i < div.length; i++) {
        h2 = div[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        isTextExists(txtValue, filter, div, i);
    }
}

function isTextExists(txtValue, filter, div, i) {
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
    } else {
        div[i].style.display = "none";
    }
}

//see whole recipe
function seeWhole() {
    let title = $(event.target).closest('.recipe').html(); 
    let windowM = window.open('recipes/see_whole/see_whole.html', '_self');
    let elementHead = "<link rel ='stylesheet' type='text/css' href ='recipes/see_whole/see_whole.css'>"
    let newTitle = title.split('<div class="buttons">');
    let backButton = '<a href = "index.html" class = "homePage" >Върни се</a>';
    windowM.document.write(elementHead);
    windowM.document.write(newTitle[0]);
    windowM.document.write(backButton);
}

//edit recipe
$("#recipes").on("click", ".editRecipe", function() {
    window.open('recipes/edit/edit_recipe.html', '_blank');
    editRecipe();
    let me = $(this).closest('.recipe').remove();    
});
 

function editRecipe() {
    let name = $(event.target).closest('.recipe').find("h2").text();
    let listOfRecipes = getAllRecipes();
    for (let i = 0; i < listOfRecipes.length; i++) {
        if (listOfRecipes[i].name == name) {
            let editedRecipes = addEditedRecipe(listOfRecipes, i);
            listOfRecipes.splice(i, 1);            
        }
    }
    deleteRecipe(listOfRecipes);
}

function loadRecipe() {
    let editedRecipes = loadEditRecipe();
    console.log(editedRecipes);
    $("#editRecipe").prepend(
        `<input type = "text" name = "" value = "${editedRecipes.name}" placeholder = "" id = "name">
         <img src = "${editedRecipes.imаgеURL}" class = "dessert recipeImg">\
        <form action = "/action_page.php" id = "imageURL">
            <input type = "file" id = "imgInput" name = "img" accept = "image/*">
        </form>
        <textarea name = "" placeholder = "Необходими съставки" rows = "10" cols = "140" id = "ingredients">${editedRecipes.ingredients}</textarea>
        <textarea name = "" placeholder = "Начин на приготвяне" rows = "10" cols = "140" id = "steps">${editedRecipes.steps}</textarea>`
    );  
}

//delete recipe from page
$("#recipes").on("click", ".delete", function(name, i, listOfRecipes) {
    listOfRecipes = getAllRecipes();
    name = $(this).closest('.recipe').find('.headerOfRecipe').html();
    for (i = 0; i < listOfRecipes.length; i++) {
        isNameEqual(name, i, listOfRecipes);
    }
    deleteRecipe(listOfRecipes);
})

function isNameEqual(name, i, listOfRecipes) {
    if (listOfRecipes[i].name == name) {
        listOfRecipes.splice(i, 1);
    }
}

$("#recipes").on("click", ".delete", function() {
    let confirmMessage = confirm("Сигурни и сте, че желаете да изтриете тази рецепта");
    if (confirmMessage) {
        $(this).closest('.recipe').remove();
    }
});

//adding recipe on add page cancelation
$("#cancel").click(function() {
    let confirmMessage = confirm("Сигурни ли сте,че желаете да напуснете страницата?");
    refreshPage(confirmMessage);
});

function refreshPage(confirmMessage) {
    if (confirmMessage) {
        refreshPage();
    }
}

function refreshPage() {
    window.location.reload();
}

//filter by type 