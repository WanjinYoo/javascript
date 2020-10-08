const chooseRecipe = function(bakeryA, bakeryB, recipes) {



let fistingredient = false;
let secondingredient = false;
for(let i = 0; i < recipes.length; i++){
    fistingredient = ingredientcheck(bakeryA,bakeryB,recipes[i].ingredients[0]);
    secondingredient = ingredientcheck(bakeryA,bakeryB,recipes[i].ingredients[1]);
    if(fistingredient&& secondingredient){
        return recipes[i].name;
    }
    else{
        fistingredient = false;
        secondingredient = false;
    }

}
    return "N/A"

};

const ingredientcheck = function(bakeryA,bakeryB,ingredient){
    for(let i = 0; i < bakeryA.length; i++){
        if(bakeryA[i] === ingredient){
            return true;
        }
    }
    for(let i = 0; i < bakeryB.length; i++){
        if(bakeryB[i] === ingredient){
            return true;
        }
    }
    return false;
};
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));