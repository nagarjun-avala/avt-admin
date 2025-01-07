import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/lib/types';
import { PRODUCT_TYPES } from './../actions/productsAction';
const initialState: { loading: boolean, data: Product[] } = {
    loading: false,
    data: []
}

const productsReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case PRODUCT_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case PRODUCT_TYPES.GET_ALL_PRODUCTS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default productsReducer;