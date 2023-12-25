import axios from "axios";

export default class UsersService{
    getUsers(){
        return axios.get("https://jsonplaceholder.typicode.com/users")
    }
}