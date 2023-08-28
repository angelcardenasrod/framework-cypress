/**
 * @class LoginData
 * @description Class that returns data to log in to the app www.demoblaze.com
 * @author angelcardenasrod | Ángel Cárdenas Rodríguez 
 */

export class LoginData{
    static get invalidCredentials(){
        return {
            username: "abc",
            passeord: "abc"
        }
    }
}