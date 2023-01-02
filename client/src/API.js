import axios from 'axios'

const serverURL = 'http://localhost:4000'

// TODO: update and read preferences, given a logged-in user
const API = {
    updatePreferences: function() {
        return axios.put('${serverURL}/api/preferences') // TODO: determine parameter
    },

    readPreferences: function() {
        return axios.get('${serverURL}/api/preferences') // TODO: determine parameter
    },

    // process of adding new user info into database
    createUser: function(payload) {
        return axios.post(serverURL + "/api/register", payload);
    },

    // Get all users to check for unique usernames
    getAllUsers: function() {
        return axios.get(serverURL + "/api/register");
    }

}

export default API;