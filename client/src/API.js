import axios from 'axios'

const server = 'http://localhost:3000'

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
        return axios.post("${serverURL}/api/register", payload)
    },

}

export default API;