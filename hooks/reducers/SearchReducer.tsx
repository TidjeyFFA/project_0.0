import { ID_MASSPUS, ID_MASSMIN, SEARCH_CHANGED, BRUH } from '../../types'
import { id_masspus, id_massmin, searchChanged, bruhRedux } from '../actions'
// import {action} from '../actions'

const INITIAL_STATE = {
    movie: 0,
    movieT: 0,
    movogore: '',
    brah: true,
    likeked: [],
    bruh: 1,
}

export default (state = INITIAL_STATE, action: any) => {
    console.log('action ', action)
    console.log('state ', action.payload)
    console.log('state ', action.bruh)
    console.log('name massive', action.names )
    
    switch(action.type) {
        case SEARCH_CHANGED:
            return{
                ...state,
                movie: action.payload,
                movieT: action.popload,
                movogore: action.pereload,
            };
        case ID_MASSPUS:
            return{
                ...state,
                // likeked: action.likelike   , action.names
                likeked:[...state.likeked,  action.likelike ]
            };
        case ID_MASSMIN:
            return{
                ...state,
                // likeked: action.likelike
                likeked:[...state.likeked, action.likelike]
            };
        case BRUH:
            return{
                ...state,
                bruh: action.bruh
            };
        default: return state
    }
} 