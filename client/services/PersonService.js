import axios from 'axios';

export default {
    urlPrefix : 'http://localhost:8080/persons',

    getOne(id) {
        let url = this.urlPrefix + '/' + id
        return axios.get(url)
    },

    getAll() {
        let url = this.urlPrefix
        return axios.get(url)
    },

    save(person) {
        let url = this.urlPrefix
        return axios.post(url,person)
    }


}