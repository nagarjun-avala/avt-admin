import { getDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"


export const CATEGORY_TYPES = {
    LOADING: 'LOADING',
    GET_ALL_CATEGORIES: 'GET_ALL_CATEGORIES',
}

export const getAllCategories = ({ token }: { token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: CATEGORY_TYPES.LOADING, payload: true })
        const res = await getDataAPI("category", token)

        dispatch({
            type: CATEGORY_TYPES.GET_ALL_CATEGORIES,
            payload: res?.data?.categories
        })
        dispatch({
            type: CATEGORY_TYPES.LOADING,
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
