import { ID_MASSPUS, ID_MASSMIN, SEARCH_CHANGED, BRUH, ARRAYLIKEPLUSE, ARRAYLIKEMINUS, REDUXDATA } from '../../types'

export const searchChanged = (
    numberHuman: number, 
    numberTime: number, 
    kategory: string,
    ) => {
    return {
        type: SEARCH_CHANGED,
        payload: numberHuman,
        popload: numberTime,
        pereload: kategory,
        // likelike: likeked
    }
}

export const id_massplus = ( 
    likeked: any,
    names: any,
    detailed: any,
    number: any,  
    human: any,
    kategore: any,
    min: any,
    mindo?: any,
    ) => {
        // const likekedhg = {id: likeked, name: names}
    console.log('массив плюс???:', likeked, names )

    return {
        type: ID_MASSPUS,
        // likelike: likekedhg,
        likekede: likeked,
        namese: names,
        detailed: detailed,
        number: number,  
        human: human,
        kategore: kategore,
        min: min,
        mindo: mindo,
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

export const arrayLikePlus = (
    id: any,
     name: any,
     detailed: any,
    number: any,
    human: any,
    kategore: any,
    min: any,
    mindo: any,
) => {
    return {
        type: ARRAYLIKEPLUSE,
        id: id,
        name: name,
        detailed: detailed,
        number: number,
        human: human,
        kategore: kategore,
        min: min,
        mindo: mindo,
    }
}
export const arrayLikeMinus = (
    id: any,
) => {
    return {
        type: ARRAYLIKEMINUS,
        id: id,
    }
    
}


export const dataRedux = ( 
    data: any
    ) => {
    console.log('brrr', data )
    return {
        type: REDUXDATA,
        data: data
    }
}
// {
//     id: '58srsthyfjh0f-3da1-471f-bd96-145wbregbr2',
//     name: '2462452ik',
//     podrobn: '325647376y5e7e456ue45u ',
//     title: 'Tafrem',
//     number: 15,
//     human: 200,
//     kategore: 'Тактильные',
//     min: 20,
//     mindo: 250,
// },