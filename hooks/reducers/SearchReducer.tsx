import { ID_MASSPUS, ID_MASSMIN, SEARCH_CHANGED, BRUH } from '../../types'
import { id_massplus, id_massmin, searchChanged, bruhRedux } from '../actions'
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
    console.log('action; ', action)
    // console.log('человечина: ', action.payload)
    // console.log('state ', action.bruh)
    // console.log('массив плюс:', action.likekede )
    // console.log('name massive', action.names )
    
    switch(action.type) {
        case SEARCH_CHANGED:
            // console.log('количество человек: ', action.payload )
            // console.log('количество часов: ', action.popload )
            // console.log('категории: ', action.pereload )
            // console.log('ФФФ: ', action.namese )
            return{
                ...state,
                movie: action.payload,
                movieT: action.popload,
                movogore: action.pereload,
            };
        // case ID_MASSPUS:
        //         console.log('массив плюс:', action.namese )
        //     return{
        //         ...state,
        //         // likeked: action.likelike   , action.names
        // // likekede: likeked,
        // // namese: names,
        //         likeked:[...state.likeked,  {id: action.likekede, name: action.namese} ]
        //     };
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