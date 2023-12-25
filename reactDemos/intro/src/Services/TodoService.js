import axios from "axios";

export default class TodoService{
    getTodos(){
        return axios.get("https://jsonplaceholder.typicode.com/todos")
    }
}