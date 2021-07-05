import React, {useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { connect, } from 'react-redux'
import axios from 'axios';
import { dataRedux } from '../hooks/actions'

import { StyleSheet, TouchableOpacity, Modal, Text, View} from 'react-native';
import { AnyAction } from 'redux';
// import { Gemes }
// export function Perem()  {
  
// let fillHuman = 0; 
// let fillKategor = '';
// let fillTime = 0;
// }

//  Знакомства    Эмоциональная разгрузка    Командообразование    Тактильные   Интерактивные   Психологические

export const DATA = [
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
  },
];
/////////////////////////////////////000000000000000\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// class DATAMASS {
  
// export function FFF() {
//   const [borro, setBorro] = useState(0);
// }


// export default class DATAMass() {
// const DATA = [
//   {
//     id: '586etga0f-3da1-471f-bd96-145571e29d72',
//     name: 'игра',
//     podrobn: 'картофель не любит есть своих сородичей',
//     title: 'Third Item',
//     number: 20,
//     minuts: 10,
//   },
//   {
//     id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
//     name: 'драконор',
//     podrobn: 'драконы очень любят картошку, но картофельподает на них в суд',
//     title: 'Third Item',
//     number: 10,
//     minuts: 30,
//   },
//   {
//     id: '586fgdj0f-3djs1-471f-bd96-145jsjs72',
//     name: 'hghghgh',
//     podrobn: 'shrhdrhjtejtjtjtektuktukukukeuk',
//     title: 'Third Item',
//     number: 12,
//     minuts: 10,
//   },
// ];
// }


// export default function DATAMass() {
// const DATA = [
//   {
//     id: '586etga0f-3da1-471f-bd96-145571e29d72',
//     name: 'игра',
//     podrobn: 'картофель не любит есть своих сородичей',
//     title: 'Third Item',
//     number: 20,
//     minuts: 10,
//   },
//   {
//     id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
//     name: 'драконор',
//     podrobn: 'драконы очень любят картошку, но картофельподает на них в суд',
//     title: 'Third Item',
//     number: 10,
//     minuts: 30,
//   },
//   {
//     id: '586fgdj0f-3djs1-471f-bd96-145jsjs72',
//     name: 'hghghgh',
//     podrobn: 'shrhdrhjtejtjtjtektuktukukukeuk',
//     title: 'Third Item',
//     number: 12,
//     minuts: 10,
//   },
// ];
// }


// export function BattFil(
//   {
//   navigation,
// }: StackScreenProps<RootStackParamList, 'Root'>) {
//   return (
//       <TouchableOpacity onPress={() => navigation.replace('FilterSk')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>FilterSk</Text></TouchableOpacity>
//   )};
////////////////////////////////
// let AAA
//  let DATA2: any = []
// let DATA3 = []
// let DATA4: any = []
// let DATA5: any = []
// let i = 3
// // let pattern = "(\s)+"

// //         // DATA2[2].split(/\s+/),           
//  let Url = 'https://docs.google.com/spreadsheets/d/1tdSmdFhnd_PIR3JP7uD5n65C5mV3roA534pX7KmYO5w/export?format=tsv&id=1tdSmdFhnd_PIR3JP7uD5n65C5mV3roA534pX7KmYO5w&gid=0'
//  export function DATAexcel ()  { (axios.get( Url )
//     .then(rsp => {
//       // console.log('seeeeooooooooooooooooooooeeees', rsp.data.split('  ')), 
//       // DATA2 = rsp.data.split(' '||'       ')
//       DATA2 = rsp.data.split('\n'),
// setTimeout(()=> {
// for ( i = 2 ; i <= 3; ++ i) { 
//         DATA3 = DATA2[i].split(/\s+/)
//         let ii = DATA3.length
//         let io = ii-2
//           DATA4 = []

//         for(let a=0;a<= io; a++ ){ 
          
//           // DATA4 = [DATA4 + ', ' + DATA3[a] ]
          
//         }
//         DATA4.push(
//           {
//             id: DATA3[0],
//             name: DATA3[1],
//             detailed: DATA3[2],
//             title: 'Third Item',
//             number: 20,
//             human: DATA3[4],
//             humanOt:  50,
//             kategore: DATA3[5],
//             min:DATA3[3],
//             mindo: 250,
//           },
//          )
//         DATA5=DATA4
//       console.log(
//         // DATAexcel.data
//         // JSON.parse(rsp.data), 
//         '000:::   ', 
//         DATA5,
//         io       ) 

//       }
// },0);
// setTimeout(()=> { console.log(
//       '777\n'    ,
//       // DATA5
//     dataRedux(DATA5)
//       )}, 100)

//     })
// )
// return DATA5
// }
    
// const dispatchStateToProps = (dispatch: any) => {
//   return  { 
//     dataRedux: (data:any ) => dispatch( dataRedux( data) ),
//   }
// }


// export const DataRedux1 = connect( dispatchStateToProps )( DATAexcel )


// setTimeout( 100)
// console.log(
//   // DATAexcel.data
//   'gggggggggggggggg',
//   DATA2
//   ) 
  //////////////////
  //  const DATA2 = (DATAexcel:  Promise<any>).split('  ')
  
        // .then(rsp => debug.log(rsp))