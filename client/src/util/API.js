import axios from "axios";

export default {
    getUser: function() {
        return axios.get("/api/users");
    },
    saveBook: function(userData) {
        return axios.post("/api/users", userData);
    }
};