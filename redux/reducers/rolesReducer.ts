import { PayloadAction } from '@reduxjs/toolkit';
import { ROLE_TYPES } from '../actions/rolesAction';
import { Role } from '@/lib/types';
const initialState: { loading: boolean, data: Role[] } = {
    loading: false,
    data: []
}

const rolesReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case ROLE_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ROLE_TYPES.GET_ALL_ROLES:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default rolesReducer;