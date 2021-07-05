import { ID_MASSPUS, ARRAYLIKEPLUSE, ARRAYLIKEMINUS, REDUXDATA } from '../../types'




const INITIAL = {
    dataredux: [
          {
            id: '586etga0f-3da1-471f-bd96-145571e29d72',
            name: 'Кораблик',
            detailed: 'Всем участникам выдаются бумажные корабликиБ и каждый по очереди рассказывает о себе, как о караблике ("Мой кораблик совут "Ксюша", он любит читать книги о путешествиях...")',
            title: 'Third Item',
            number: 20,
            human: 20,
            humanOt:  50,
            kategore: 'Знакомства',
            min: 20,
            mindo: 250,
          },
          {
            id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
            name: 'Звездный дождь',
            detailed: 'Каждый из ребят получает по бумажной звездочке. На ней они должны написать свое имя. Послеэтого ведущий обходит всех с коробочкой в руках. Каждый бросает в коробочку звездочку и громко произносит свое имя. После того как все звездочки собраны, ребята по очерединачинают вытягивать их из коробки. Доставший звезду, игрок читает написанное на ней имя и отдает ее владельцу.',
            title: 'Third Item',
            number: 10,
            human: 10,
            kategore: 'Эмоциональная разгрузка',
            min: 20,
            mindo: 250,
          },
          {
            id: '58sgbgbsgb0f-3da1-471f-bd96-145wbregbr2',
            name: 'Летающие имена',
            detailed: 'все участники встают в круг и начсинают плясать под жестокий даб степ наполняя жизнь не только красками но и холодным неоном. ',
            title: 'Tafrem',
            number: 15,
            human: 2,
            kategore: 'Командообразование',
            min: 20,
            mindo: 250,
          },
          {
            id: '58srsthyfjh0f-3da1-471f-bd96-145wbregbr2',
            name: 'Р462452ik',
            detailed: '325647376y5e7e456ue45u ',
            title: 'Tafrem',
            number: 15,
            human: 200,
            kategore: 'Тактильные',
            min: 20,
            mindo: 250,
          },
          {
            id: '58ssgvvgfds3da1-471f-bd96-14jbregbr2',
            name: 'ПАhrfdshshnrshe',
            detailed: 'bhjo hjkipo gb gt tgytfug ufg uftg utgfutg ',
            title: 'Tafrem',
            number: 34,
            human: 6265,
            kategore: 'Интерактивные',
            min: 30,
            mindo: 250,
          },
          {
            id: '58sjdyjusrjy0f-3da1-471f-bd96-14jbregbr2',
            name: 'Рhrfdshshnrshe',
            detailed: 'bhjo hjkipo gb gt tgytfug ufg uftg utgfutg ',
            title: 'Tafrem',
            number: 15,
            human: 520,
            kategore: 'Психологические',
            min: 20,
            mindo: 250,
          },]
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