import { ID_MASSPUS, ARRAYLIKEPLUSE, ARRAYLIKEMINUS } from '../../types'
import { id_massplus, id_massmin, searchChanged, bruhRedux, arrayLikePlus  } from '../actions'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {action} from '../actions'
let arrayA = []
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? arrayA = JSON.parse(jsonValue) : [];
    } catch(e) {
      // error reading value
    }
}
getData
const INITIAL = {
    mass: [{id: '000', name: '222'}, ],
    arrayLike: []
        // {
        // id: 'id', 
        // name: 'name',
        // podrobn: 'podrobn',
        // number: 'number',
        // human: 'human',
        // kategore: 'kategore',
        // min: 'min',
        // mindo: 'mindo',
        // },  
    
}

const storeData = async ( state = INITIAL ) => {
    try {
        let arrayLikem = {...state.arrayLike}
      const jsonarrayLike = JSON.stringify(  arrayLikem  )
      await AsyncStorage.setItem('storage_Key', jsonarrayLike)
      console.log('array seved ')
    } catch (e) {
      console.log('error saving array')
      // saving error
    }
    console.log('Done')

}
 
export default (state = INITIAL, action: any) => {
    // console.log('акцион: ', action)
    // console.log('state ', action.likekede)         ARRAYLIKEPLUSE
    switch(action.type) {
        case ID_MASSPUS:
            console.log(' name bloika like: ', action.namese)
            if(state.mass.length > 0) {
                if(action.likekede == state.mass[0].id) {
                    return state
                }
            }
            return{
                ...state,
                mass: [ {id: action.likekede, 
                    name: action.namese,
                    detailed: action.detailed,
                    number: action.number,  
                    human: action.human,
                    kategore: action.kategore,
                    min: action.min,
                    mindo: action.mindo,
                }, ...state.mass,   ],
                // likeked:[...state.likeked,  {id: action.likekede, name: action.namese} ]
            };
        case ARRAYLIKEPLUSE:
            console.log(' name bloika like: ', action.name)
            return{
                ...state,
                arrayLike: [  
                    {
                        id: action.id, 
                        name: action.name,
                        detailed: action.detailed,
                        number: action.number,
                        human: action.human,
                        kategore: action.kategore,
                        min: action.min,
                        mindo: action.mindo,
                    }, 
                    ...state.arrayLike 
                 ],
                storeData
                //  async()  { try {
                //      const arrayLikeString = JSON.stringify(state.arrayLike);
                //      AsyncStorage.setItem('@MyStore:arrayLike', arrayLikeString)
                //  } catch (error) {
                //      console.log('error saving')
                //  }}
                // likeked:[...state.likeked,  {id: action.likekede, name: action.namese} ]   ARRAYLIKEMINUS
            };
        case ARRAYLIKEMINUS:
            // console.log(' name bloika like in minus: ', action.name)
            // console.log(' массив понравившихсчя: : ', action.name)
            return{
                ...state,
                arrayLike: state.arrayLike.filter(arrayLike => arrayLike.id != action.id ),
                storeData
            };
        default: return state
    }
} 