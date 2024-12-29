import { PayloadAction } from '@reduxjs/toolkit';
import { ADMIN_TYPES } from '../actions/adminsAction';
import { Admin } from '@/lib/types';
const initialState: { loading: boolean, data: Admin[] } = {
    loading: false,
    data: []
}

const adminsReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case ADMIN_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ADMIN_TYPES.GET_ALL_ADMINS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default adminsReducer;