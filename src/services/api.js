import axios from 'axios'
const baseUrl = '/front-challenge-2020/wine'

const getAll = () => {
    return axios.get(baseUrl)
}

export default { getAll}
