import { SEARCH_CHANGED } from '../../types'

export const searchChanged = (numberHuman: number, numberTime: number) => {
    console.log('number human:', numberHuman)
    return {
        type: SEARCH_CHANGED,
        payload: numberHuman,
        popload: numberTime
        
    }
}