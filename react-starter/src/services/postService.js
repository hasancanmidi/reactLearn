import axios from "axios";

class PostService {
    getAll() {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
}

export default new PostService();