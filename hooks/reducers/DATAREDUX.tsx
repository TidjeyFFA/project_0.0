import { ID_MASSPUS, ARRAYLIKEPLUSE, ARRAYLIKEMINUS, REDUXDATA } from '../../types'




const INITIAL = {
    dataredux: []
}


export default (state = INITIAL, action: any) => {
    // console.log('акцион: ', action)
    // console.log('state ', action.likekede)         ARRAYLIKEPLUSE
    switch(action.type) {
        case REDUXDATA:
            return{
                ...state,
                dataredux: action.data
            };
        default: return state
    }
} 