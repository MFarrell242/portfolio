import axios from 'axios';

export default {

    getSamples: function() {
        return axios.get("/api/projects");
    }

};