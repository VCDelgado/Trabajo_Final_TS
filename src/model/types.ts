type Intro = "newuser" |"find" | "login" | "logout"| "ingredients" | "calories" | "addRecipe" | "recipeBook" 

interface UserData {
    name: string,
    password: string,
}

interface Choice {
    
}

interface Food {
    label: string,
    dietLabels?: []
    healthLabels?: []
    mealType?: []
    cuisineType?: []
    ingredientLines: []
    url?: string,
    source?: string,
    food?: string,
    quantity?: number,
    measure?: string,
    ingredients?: [],
    calories?: number
}


interface Ingredients {
    
    ingredients: []
    
}

interface Recipe {
    label: string,
    ingredientLines: [],
    ingredients: [],
    calories: number
}



export {UserData, Choice, Food, Recipe, Intro, Ingredients}