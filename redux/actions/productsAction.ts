import { getDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"


export const PRODUCT_TYPES = {
    LOADING: 'LOADING',
    GET_ALL_PRODUCTS: 'GET_ALL_PRODUCTS',
}

export const getAllProducts = ({ token }: { token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: PRODUCT_TYPES.LOADING, payload: true })
        const res = await getDataAPI("product", token)

        dispatch({
            type: PRODUCT_TYPES.GET_ALL_PRODUCTS,
            payload: res?.data?.products
        })
        dispatch({
            type: PRODUCT_TYPES.LOADING,
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
