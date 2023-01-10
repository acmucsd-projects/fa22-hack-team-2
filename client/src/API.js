import axios from 'axios'

const serverURL = 'http://localhost:3000'

// TODO: update and read preferences, given a logged-in user
const API = {
    updatePreferences: function(payload) {
        console.log("axios PUT request");
        return axios.put(serverURL + "/api/preferences", payload)
    },

    readPreferences: function(payload) {
        console.log("axios GET request");
        return axios.get(serverURL + "/api/preferences", payload)
    },

    // process of adding new user info into database
    createUser: function(payload) {
        console.log("axios POST request");
        return axios.post(serverURL + "/api/register", payload);
    },

    // Get user after logging in
    getUser: function() {
        return axios.get(serverURL + "/api/register");
    }

}

export default API;