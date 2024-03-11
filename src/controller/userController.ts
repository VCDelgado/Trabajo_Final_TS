import { UserModel } from "../model/user";
import { UserData } from "../model/types";


abstract class UserController {

    static async createUser(data: UserData) {

        let result = UserModel.createUser(data)

        return result
    }

    static async logIn (data: UserData) {

        let result = UserModel.logIn(data)

        return result
    }

    static async logOut () {

        let result = UserModel.logOut()

        return result
    }

}


export {UserController}
