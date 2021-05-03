import { ID_MASSPUS, ID_MASSMIN, SEARCH_CHANGED, BRUH } from '../../types'

export const searchChanged = (
    numberHuman: number, 
    numberTime: number, 
    kategory: string,
    // likeked: any,
    ) => {
    console.log('number human:', numberHuman)
    return {
        type: SEARCH_CHANGED,
        payload: numberHuman,
        popload: numberTime,
        pereload: kategory,
        // likelike: likeked
    }
}

export const id_masspus = ( 
    likeked: any,
    names: any,
    ) => {
        const likekedhg = {id: likeked, name: names}
    console.log('массив плюс:', likekedhg )

    return {
        type: ID_MASSPUS,
        likelike: likekedhg,
    }
}

export const id_massmin = ( 
    likeked: any,
    names: any,
    ) => {
    console.log('массив минус:', likeked )
    return {
        type: ID_MASSPUS,
        likelike: likeked,
        names: names,
    }
}


export const bruhRedux = ( 
    bruhh: any
    ) => {
    console.log('brrr', bruhh )
    return {
        type: BRUH,
        bruh: bruhh
    }
}