import axios from 'axios'


export default {
    request(method, uri, data = undefined, headers = undefined) {

        if (!method) {
            console.error('API function call requires method argument')
            return
        }
        if (!uri) {
            console.error('API function call requires uri argument')
            return
        }

        var url = 'http://localhost:3000' + uri

        return axios({
            method,
            url,
            data,
        })

    }
}