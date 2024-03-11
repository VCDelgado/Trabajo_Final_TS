import { Choice, Food, Recipe, Ingredients } from "./types";
import { writeFileSync, readFileSync } from "node:fs";
import pc from "picocolors"

const PATH = "./src/database/recipes.json"
const PATHTEMP = "./src/database/temporal.json"
const PATHLOG = "./src/database/userlog.json"

let APP_ID = "df95d53b"
let API_KEY = "b12014a40e97d1604f5ee4ab2ad15fdd"

const API_BASE_URL = new URL(`https://api.edamam.com/api/recipes/v2?type=public`)

async function fetchData(choice: Choice) {

    try {

        API_BASE_URL.searchParams.append('app_id', APP_ID)
        API_BASE_URL.searchParams.append('app_key', API_KEY)

        for (let index = 1; index < Object.keys(choice).length; index++) {
            API_BASE_URL.searchParams.append(Object.keys(choice)[index], Object.values(choice)[index])
        }

        let response = await fetch(API_BASE_URL)
        let data = await response.json()

        let result: Food[] = []

        data.hits.map((array: any) => { result.push(createFood(array.recipe)) })

        return result

    } catch (err) {
        throw new Error(`${pc.bgRed("Ingrese un parámetro válido")}`)
    }
}


function createFood(food: Food) {

    let newRecipe: Food = {
        label: food.label,
        dietLabels: food.dietLabels,
        healthLabels: food.healthLabels,
        mealType: food.mealType,
        cuisineType: food.cuisineType,
        url: food.url,
        source: food.source,
        food: food.food,
        quantity: food.quantity,
        measure: food.measure,
        ingredients: food.ingredients,
        calories: food.calories,
        ingredientLines: food.ingredientLines
    }

    return newRecipe
}

function createFoodList(food: Food) {

    let newFood: Food = {
        label: food.label,
        dietLabels: food.dietLabels,
        mealType: food.mealType,
        cuisineType: food.cuisineType,
        ingredientLines: food.ingredientLines,
        ingredients: food.ingredients,
        calories: food.calories,

    }
    return newFood
}

function createRecipe(recipe: Recipe) {

    let newRecipe: Recipe = {
        label: recipe.label,
        ingredientLines: recipe.ingredientLines,
        ingredients: recipe.ingredients,
        calories: recipe.calories
    }
    return newRecipe

}

function getDataLog() {

    let data = readFileSync(PATHLOG, "utf-8")
    let userData = JSON.parse(data)

    return userData
}

let userLog = getDataLog().users[0]

abstract class RecipeModel {

    static async getByChoice(choice: Choice): Promise<Food | undefined> {

        if (userLog !== undefined) {

            if (Object.keys(choice)[1] !== undefined) {

                const dataBase: any = await fetchData(choice)

                let result: Food[] = []

                dataBase.map((list: any) => { result.push(createFoodList(list)) })

                let show: any = result.forEach((recipe, i) => console.log(i++, recipe.label))

                let updateDB = JSON.stringify(result)

                writeFileSync(PATHTEMP, updateDB)

                return show

            } else { console.log(`${pc.blue("Debe elegir por lo menos un tipo de comida")}`) }
            
        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }
    }

    static getDB(): Recipe[] {

        let data = readFileSync(PATH, "utf8")
        let parseData = JSON.parse(data)

        return parseData
    }

    static getDBTemp(): Recipe[] {

        let data = readFileSync(PATHTEMP, "utf8")
        let parseData = JSON.parse(data)

        return parseData
    }

    static recipeBook() {

        if (userLog !== undefined) {

            let data = this.getDB()

            console.log(pc.blue(pc.bold(`CUADERNO DE RECETAS \n\r`)))
            data.map((recipe, i) => console.log(`${pc.blue(`Receta Nº ${i++}`)}\n\r ${pc.red(pc.bold(recipe.label))} \n\r ${recipe.ingredientLines}\n\r`))

        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }
    }

    static async addRecipe(number: number) {
        if (userLog !== undefined) {

            const dataBaseTemp = this.getDBTemp()
            const dataBase = this.getDB()

            if (dataBaseTemp[0] != undefined) {

                let recipe = dataBaseTemp[number]

                dataBase.push(createRecipe(recipe))

                let updateDB = JSON.stringify(dataBase)
                let updateDBTemp = JSON.stringify([])

                writeFileSync(PATH, updateDB)
                writeFileSync(PATHTEMP, updateDBTemp)

                console.log(`${pc.blue("La receta ha sido agregada a tu cuaderno")}`)

            } else {
                console.log(`${pc.blue( `Debe elegir primero el tipo de receta deseada\n\rUtiliza en comando ${pc.bold(`"find"`)}`)}`)
            }

        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }
    }

    static async getIngredients(recipe: number) {
        if (userLog !== undefined) {

            const list = this.getDB()

            if (list[recipe] !== undefined) {
                console.log(`${pc.blue(`INGREDIENTES DE RECETA Nº ${recipe}`)}\n\r`)

                list[recipe].ingredients.map((element: any) => { console.log(element.quantity, pc.bold(element.food), element.measure) })
            
            } else {
                console.log(`${pc.blue("Ingrese un numero válido del libro de recetas")}`)
            }
        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }
    }

    static async getTotalCalories() {

        if (userLog !== undefined) {

            const list = this.getDB()

            const caloriesAll: number[] = []

            list.map((recipe: any) => caloriesAll.push(recipe.calories))

            const totalCalories = caloriesAll.reduce((acumulador, currentValue) => Math.round(acumulador + currentValue), 0)

            console.log(pc.cyan(`El total es de ${pc.bold(`${totalCalories}`)} calorias en el Recetario`))

        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }
    }

}

export { RecipeModel }



