import { PayloadAction } from '@reduxjs/toolkit';
import { TYPES } from '../actions/authAction';
const initialState = {}

const authReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case TYPES.AUTH:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;