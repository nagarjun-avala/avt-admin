import { getDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"


export const ADMIN_TYPES = {
    LOADING: 'LOADING',
    GET_ALL_ADMINS: 'GET_ALL_ADMIN',
}

export const getAllAdmins = ({ token }: { token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: ADMIN_TYPES.LOADING, payload: true })
        const res = await getDataAPI("admin", token)

        dispatch({
            type: ADMIN_TYPES.GET_ALL_ADMINS,
            payload: res?.data?.admins
        })
        dispatch({
            type: ADMIN_TYPES.LOADING,
            payload: false,
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
