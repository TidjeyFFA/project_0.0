import { ID_MASSPUS, ARRAYLIKEPLUSE, ARRAYLIKEMINUS } from '../../types'
import { id_massplus, id_massmin, searchChanged, bruhRedux, arrayLikePlus  } from '../actions'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {action} from '../actions'
const storeData = async (arrayLike: any) => {
    try {
      const jsonarrayLike = JSON.stringify(arrayLike)
      await AsyncStorage.setItem('@storage_Key', jsonarrayLike)
    } catch (e) {
      // saving error
    }
}
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
      // error reading value
    }
}

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
                // storeData({arrayLike})
                //  async()  { try {
                //      const arrayLikeString = JSON.stringify(state.arrayLike);
                //      AsyncStorage.setItem('@MyStore:arrayLike', arrayLikeString)
                //  } catch (error) {
                //      console.log('error saving')
                //  }}
                // likeked:[...state.likeked,  {id: action.likekede, name: action.namese} ]   ARRAYLIKEMINUS
            };
        case ARRAYLIKEMINUS:
            console.log(' name bloika like in minus: ', action.name)
            console.log(' массив понравившихсчя: : ', action.name)
            return{
                ...state,
                arrayLike: state.arrayLike.filter(arrayLike => arrayLike.id != action.id ),
            };
        default: return state
    }
} 