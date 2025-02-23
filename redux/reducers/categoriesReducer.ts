import { PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY_TYPES } from '../actions/categoriesAction';
import { Category } from '@/lib/types';
const initialState: { loading: boolean, data: Category[] } = {
    loading: false,
    data: []
}

const categoriesReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case CATEGORY_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case CATEGORY_TYPES.GET_ALL_CATEGORIES:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default categoriesReducer;