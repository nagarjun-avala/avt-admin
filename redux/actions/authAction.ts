import { Admin } from "../../lib/types"
import { getDataAPI, getTestDataApi, postDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"

export const login = (data: Partial<Admin>) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI("login", data)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res?.data?.access_token,
                admin: res?.data?.admin
            }
        })
        dispatch({
            type: GLOBALTYPES.CONFIG,
            payload: res?.data?.config
        })

        localStorage.setItem("token", res?.data?.access_token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
        window.location.href = "/"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = (error.response?.data?.message) || 'An error occurred';
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: errorMessage
            }
        })
    }
}

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        localStorage.removeItem("token")
        await getDataAPI("logout")

        window.location.href = '/login'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = (error.response?.data?.message) || 'An error occurred';
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: errorMessage
            }
        })
    }
}

export const refreshToken = () => async (dispatch: AppDispatch) => {
    try {
        const token = localStorage.getItem('token') || ""
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        const res = await getDataAPI("refresh_token", token)

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res?.data?.access_token,
                admin: res?.data?.admin
            }
        })
        dispatch({
            type: GLOBALTYPES.CONFIG,
            payload: res?.data?.config
        })
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {}
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = (error.response?.data?.message) || 'An error occurred';
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: errorMessage
            }
        })
    }
}


// ! These are Testing Routes for cookies:Which does not work

export const setCookieTest = () => async (dispatch: AppDispatch) => {
    try {

        const res = await getTestDataApi("set-cookie")

        console.log(res.data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = (error.response?.data?.message) || 'An error occurred';
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: errorMessage
            }
        })
    }
}
export const getCookieTest = () => async (dispatch: AppDispatch) => {
    try {

        const res = await getTestDataApi("get-cookie")

        console.log(res.data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const errorMessage = (error.response?.data?.message) || 'An error occurred';
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: errorMessage
            }
        })
    }
}
// ! End of Test Routes