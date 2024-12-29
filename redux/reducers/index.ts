import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import roles from './rolesReducer'
import admins from './adminsReducer'
import categories from './categoriesReducer'

export default combineReducers({
    auth,
    alert,
    roles,
    admins,
    categories,
})