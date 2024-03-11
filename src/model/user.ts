import { UserData } from "./types";
import { writeFileSync, readFileSync } from "node:fs";
import { randomUUID } from "crypto"
const PATH = "./src/database/users.json"
const PATHLOG = "./src/database/userlog.json"
import pc from "picocolors"


function findUser(userName: string, userPassword: string, database: any) {

    const users = database.users

    const result = users.find((user: any) => user.name == userName && user.password == userPassword)

    return result

}

function getDataLog() {

    let data = readFileSync(PATHLOG, "utf-8")
    let userData = JSON.parse(data)

    return userData
}

let userLog = getDataLog().users[0]

abstract class UserModel {
    name;
    password;
    id;

    constructor(data: UserData) {
        const { name, password } = data
        this.name = name;
        this.password = password
        this.id = randomUUID()
    }

    static getData() {

        let data = readFileSync(PATH, "utf-8")
        let userData = JSON.parse(data)

        return userData
    }
    static getDataLog() {

        let data = readFileSync(PATHLOG, "utf-8")
        let userData = JSON.parse(data)

        return userData
    }


    static createUser(data: UserData) {

        const { name, password } = data

        const dataBase = this.getData()
        const userExist = findUser(name, password, dataBase)

        if (name == undefined || password == undefined) {

            return console.log(`${pc.blue("Debe ingresar nombre y contraseña")}`)

        } else if (!userExist) {
            let newUser = {
                name: data.name,
                password: data.password,
                id: randomUUID()
            };
            dataBase.users.push(newUser)

            let updateData = JSON.stringify(dataBase)
            writeFileSync(PATH, updateData)

            return console.log(`${pc.blue("El usuario fue creado con exito")}`)
        }
        else {
            return console.log(`${pc.red("El usuario ya existe")}`)
        }
    }

    static logIn(data: UserData) {


        const { name, password } = data
        const dataBaseLog = this.getDataLog()
        const dataBase = this.getData()

        const userExist = findUser(name, password, dataBase)
        const userIsLog = findUser(name, password, dataBaseLog)

        if (name == undefined || password == undefined) {

            return console.log(`${pc.red("Debe ingresar nombre y contraseña")}`)
        }
        else if (userIsLog) {
            return console.log(`${pc.red("El usuario ya esta logueado")}`)

        } else if (userExist) {
            dataBaseLog.users.push(userExist)

            let updateDataLog = JSON.stringify(dataBaseLog)
            writeFileSync(PATHLOG, updateDataLog)

            return console.log(`${pc.yellow("Se ha logueado con exito")}`)
        }
        else {
            return console.log(`${pc.blue(` El usuario no existe\n\r Para crear un nuevo usuario use la opción\n\r ${pc.bold("newuser")}`)}`)
        }
    }

    static logOut() {

        if (userLog !== undefined) {
            let updateDataLog = JSON.stringify({
                "users": [
                ]
            })
            writeFileSync(PATHLOG, updateDataLog)

            return console.log(`${pc.green(`Logout exitoso\n\rHasta la proxima!`)}`)


        } else { console.log(`${pc.yellow("Debe loguearse primero")}`) }

    }
}


export { UserModel }



