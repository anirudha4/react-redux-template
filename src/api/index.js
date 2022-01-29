import axios from "axios";
import { API_URL } from '@utils/constants'
const client = axios.create({
    baseURL: API_URL
})


export const api = async ({ url, method = 'get', data, headers = { 'ContentType': 'application/json' } }) => {
    return await client[method](url, data, headers)
}
