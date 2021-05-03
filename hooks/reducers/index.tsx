import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
// import LikedReduser from './LikedReduser'
// import {searchChanged} from '../actions/index'

const AppReducer = combineReducers({
    search: SearchReducer,
    
    // likeds: LikedReduser
})
export type RootState = ReturnType<typeof AppReducer>;
export default AppReducer