import { PayloadAction } from '@reduxjs/toolkit';
import { Country } from '@/lib/types';
import { COUNTRY_TYPES } from '../actions/countrieesAction';
const initialState: { loading: boolean, data: Country[] } = {
    loading: false,
    data: []
}

const countriesReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case COUNTRY_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case COUNTRY_TYPES.CREATE_COUNTRY:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case COUNTRY_TYPES.GET_ALL_COUNTRIES:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default countriesReducer;