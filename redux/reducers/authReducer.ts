import { PayloadAction } from '@reduxjs/toolkit';
import { GLOBALTYPES } from '../actions/globalTypes';
const initialState = {
    token: "",
    admin: {},
}

const authReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case GLOBALTYPES.AUTH:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;