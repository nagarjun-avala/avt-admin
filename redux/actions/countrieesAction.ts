import { getDataAPI, postDataAPI } from '@/lib/fetchData'
import { AppDispatch } from "../store"
import { GLOBALTYPES } from "./globalTypes"
import { Country } from '@/lib/types'


export const COUNTRY_TYPES = {
    LOADING: 'LOADING',
    CREATE_COUNTRY: 'CREATE_COUNTRY',
    GET_ALL_COUNTRIES: 'GET_ALL_COUNTRIES',
}

export const getAllCountries = ({ token }: { token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: COUNTRY_TYPES.LOADING, payload: true })
        const res = await getDataAPI("country", token)

        dispatch({
            type: COUNTRY_TYPES.GET_ALL_COUNTRIES,
            payload: res?.data?.countries
        })
        dispatch({
            type: COUNTRY_TYPES.LOADING,
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

export const createCountry = ({ data, token }: { data: Partial<Country>, token: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: COUNTRY_TYPES.LOADING, payload: true })

        const res = await postDataAPI("country", data, token)

        dispatch({
            type: COUNTRY_TYPES.CREATE_COUNTRY,
            payload: res?.data?.country
        })
        dispatch({
            type: COUNTRY_TYPES.LOADING,
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
