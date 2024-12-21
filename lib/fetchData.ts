const api = "https://avt-server.onrender.com/api"

export const getApi = async (url: string, tolen?: string, options?: RequestInit) => {
    const res = await fetch(`${api}/${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tolen}`,
            ...(options?.headers || {})
        }
    })
    const data = await res.json()
    return data
}

export const postApi = async (url: string, tolen?: string, body?: unknown, options?: RequestInit) => {
    const res = await fetch(`${api}/${url}`, {
        ...options,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tolen}`,
            ...(options?.headers || {})
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}

export const putApi = async (url: string, tolen?: string, body?: unknown, options?: RequestInit) => {
    const res = await fetch(`${api}/${url}`, {
        ...options,
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tolen}`,
            ...(options?.headers || {})
        },
        body: JSON.stringify(body)
    })
    const data = await res.json()
    return data
}

export const deleteApi = async (url: string, tolen?: string, options?: RequestInit) => {
    const res = await fetch(`${api}/${url}`, {
        ...options,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tolen}`,
            ...(options?.headers || {})
        }
    })
    const data = await res.json()
    return data
}