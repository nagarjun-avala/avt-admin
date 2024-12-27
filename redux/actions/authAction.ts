import { Admin } from "../../lib/types"
import { getDataAPI, getTestDataApi, postDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"
import { get } from "http"

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

        localStorage.setItem("firstLogin", "true")
        localStorage.setItem("token", res?.data?.access_token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
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
        const res = await getDataAPI("logout")

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {}
        })

        localStorage.setItem("firstLogin", "true")
        localStorage.setItem("token", res?.data?.access_token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
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
        const firstLogin = localStorage.getItem('firstLogin')
        const token = localStorage.getItem('token') || ""
        if (firstLogin)
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