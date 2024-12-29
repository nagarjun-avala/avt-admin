import { getDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"


export const ROLE_TYPES = {
    LOADING: 'LOADING',
    GET_ALL_ROLES: 'GET_ALL_ROLES',
}

export const getAllRoles = ({ token }: { token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: ROLE_TYPES.LOADING, payload: true })
        const res = await getDataAPI("role", token)

        console.log(res)

        dispatch({
            type: ROLE_TYPES.GET_ALL_ROLES,
            payload: res?.data?.roles
        })
        dispatch({
            type: ROLE_TYPES.LOADING,
            payload: false
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
