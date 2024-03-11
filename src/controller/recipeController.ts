import { RecipeModel } from "../model/recipe";
import { Choice } from "../model/types";


abstract class RecipeController {

    static async getByChoice(choice: Choice) {

        let result = RecipeModel.getByChoice(choice)

        return result
    }

    static async recipeBook () {

        RecipeModel.recipeBook()
        
    }

    static async addRecipe (number: number) {
        let result = RecipeModel.addRecipe(number)

        return result
    }

    static async getIngredients(recipe: number) {

        let result = RecipeModel.getIngredients(recipe)

        return result
    }
    static async getTotalCalories() {

        let result = RecipeModel.getTotalCalories()

        return result
    }

}

export {RecipeController}