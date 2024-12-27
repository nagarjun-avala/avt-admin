import { getDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"


export const TYPES = {
    LOADING: 'LOADING',
    GET_ALL: 'GET_ALL',
    ALERT: 'ALERT',
}

export const getAllAdmins = () => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const token = localStorage.getItem('token') || ""
        const res = await getDataAPI("login", token)

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
