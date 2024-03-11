import { RecipeController } from "./controller/recipeController";
import { UserController } from "./controller/userController";
import { Choice, Intro, UserData } from "../src/model/types";
import pc from "picocolors"

const args = require('args-parser')(process.argv);

let enter: any = Object.keys(args)[0]
let label: any = Object.values(args)[0]

let data: UserData = {
    name: Object.keys(args)[1],
    password: Object.keys(args)[2]
}

let choice: Choice = args

function app(intro: Intro) {

    if (intro !== undefined || null) {
        switch (intro) {
            case "newuser":
                return UserController.createUser(data)
            case "login":
                return UserController.logIn(data)
            case "logout":
                return UserController.logOut()
            case "find":
                return RecipeController.getByChoice(choice)
            case "ingredients":
                return RecipeController.getIngredients(label)
            case "calories":
                return RecipeController.getTotalCalories()
            case "addRecipe":
                return RecipeController.addRecipe(label)
            case "recipeBook":
                return RecipeController.recipeBook()
            default: console.log(`${pc.red("Ingrese una opción válida")}`)
        }
    }
}

function main() {
    app(enter)
}

main()