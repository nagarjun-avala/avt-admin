import axios from 'axios'
const api = process.env.NEXT_PUBLIC_APP_ENV == 'development' ? process.env.NEXT_PUBLIC_API_URL_DEV : process.env.NEXT_PUBLIC_API_URL_PRO

// axios.defaults.baseURL = api

export const getDataAPI = async (url: string, token?: string) => {
    return await axios.get(`${api}/api/${url}`, {
        headers: {
            Authorization: token
        }
    })
}

export const demoPostDataAPI = async (url: string, data: unknown, token?: string) => {
    return await axios({
        method: "POST",
        url,
        withCredentials: true,
        headers: {
            Authorization: token
        }
    })

}

export const postDataAPI = async (url: string, data: unknown, token?: string) => {
    return await axios.post(`${api}/api/${url}`, data, {
        headers: {
            Authorization: token
        }
    })
}

export const putDataAPI = async (url: string, data: unknown, token?: string) => {
    return await axios.put(`${api}/api/${url}`, data, {
        headers: {
            Authorization: token
        }
    })
}

export const patchDataAPI = async (url: string, data: unknown, token?: string) => {
    return await axios.patch(`${api}/api/${url}`, data, {
        headers: {
            Authorization: token
        }
    })
}

export const deleteDataAPI = async (url: string, token?: string) => {
    return await axios.delete(`${api}/api/${url}`, {
        headers: {
            Authorization: token
        }
    })
}


// ! TESTING ROUTE FETCHING
export const getTestDataApi = async (url: string, token?: string) => {
    return await axios.get(`${api}/${url}`, {
        headers: {
            Authorization: token
        }
    })
}