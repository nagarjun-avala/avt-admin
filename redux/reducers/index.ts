import { combineReducers } from 'redux'
import config from './configReducer'
import auth from './authReducer'
import alert from './alertReducer'
import roles from './rolesReducer'
import admins from './adminsReducer'
import categories from './categoriesReducer'
import products from './productsReducer'
import countries from './countriesReducer'

export default combineReducers({
    config,
    auth,
    alert,
    roles,
    admins,
    categories,
    products,
    countries,
})