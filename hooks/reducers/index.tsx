import { combineReducers } from 'redux'
import SearchReducer from './SearchReducer'
import LikedReduser from './LikedReduser'
import DataRedux from './DATAREDUX'


const AppReducer = combineReducers({
    search: SearchReducer,
    likeds: LikedReduser,
    dataRedux: DataRedux
})
export type RootState = ReturnType<typeof AppReducer>;
export default AppReducer