import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import roles from './rolesReducer'
import admins from './adminsReducer'

export default combineReducers({
    auth,
    alert,
    roles,
    admins,
})