import { SEARCH_CHANGED } from '../../types'
// import {action} from '../actions'

const INITIAL_STATE = {
    movie: 0,
    movieT: 0,
}

export default (state = INITIAL_STATE, action: any) => {
    console.log('action ', action)
    console.log('state ', action.payload)
    switch(action.type) {
        case SEARCH_CHANGED:
            return{
                ...state,
                movie: action.payload,
                movieT: action.popload
            }
        default: return state
    }
} 