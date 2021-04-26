import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
// import {searchChanged} from '../actions/index'

const AppReducer = combineReducers({
    search: SearchReducer
})
export type RootState = ReturnType<typeof AppReducer>;
export default AppReducer