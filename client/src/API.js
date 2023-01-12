import axios from 'axios'

const serverURL = 'http://localhost:3000'

// TODO: update and read preferences, given a logged-in user
const API = {
    updatePreferences: function(payload) {
        console.log("axios PUT request");
        return axios.put(serverURL + "/api/preferences", payload)
    },

    readPreferences: function() {
        return axios.get(serverURL + "/api/preferences")
    },

    // process of adding new user info into database
    createUser: function(payload) {
        console.log("axios POST request");
        return axios.post(serverURL + "/api/register", payload);
    },

    // Get user after logging in
    getUser: function() {
        return axios.get(serverURL + "/api/register");
    },

    // TODO: implement food query, e.g. /api/food/CafeVentanas?name=Avocado%20Toast
    getFoods: function(payload) {
        return axios.get(serverURL + "/api/food" + payload);    
    }

}

export default API;