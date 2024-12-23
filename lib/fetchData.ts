import axios from 'axios'
const api = process.env.NEXT_PUBLIC_API_URL

export const getDataAPI = async (url: string, token?: string) => {
    const res = await axios.get(`${api}/${url}`, {
        headers: {
            Authorization: token
        }
    })
    return res
}

export const postDataAPI = async (url: string, post: unknown, token?: string) => {
    const res = await axios.post(`${api}/${url}`,post, {
        headers: {
            Authorization: token
        }
    })
    return res
}

export const putDataAPI = async (url: string, post: unknown, token?: string) => {
    const res = await axios.put(`${api}/${url}`,post, {
        headers: {
            Authorization: token
        }
    })
    return res
}

export const patchDataAPI = async (url: string, post: unknown, token?: string) => {
    const res = await axios.patch(`${api}/${url}`,post, {
        headers: {
            Authorization: token
        }
    })
    return res
}

export const deleteDataAPI = async (url: string, token?: string) => {
    const res = await axios.delete(`${api}/${url}`, {
        headers: {
            Authorization: token
        }
    })
    return res
}