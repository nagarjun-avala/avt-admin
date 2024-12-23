import { TYPES } from '../actions/notifyAction';
const initialState = {}

interface actionTypes {
    type: keyof typeof TYPES; payload: unknown;
}

const notifyReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case TYPES.NOTIFY:
            return action.payload;
        default:
            return state;
    }
}

export default notifyReducer;