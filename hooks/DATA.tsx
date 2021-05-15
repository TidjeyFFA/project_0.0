import React, {useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import { StyleSheet, TouchableOpacity, Modal, Text, View} from 'react-native';
export function Perem()  {
  
let fillHuman = 0; 
let fillKategor = '';
let fillTime = 0;
}

//  Знакомства    Эмоциональная разгрузка    Командообразование    Тактильные   Интерактивные   Психологические
export const DATA = [
  {
    id: '586etga0f-3da1-471f-bd96-145571e29d72',
    name: 'игра',
    detailed: 'картофель не любит есть своих сородичей',
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
    name: 'драконор',
    detailed: 'драконы очень любят картошку, но картофельподает на них в суд hghgfhsb dfr rthrt hreh dr her brt breh gergbe h herh regh erh erh erth erhg erhbethe5yhe her he5r hr',
    title: 'Third Item',
    number: 10,
    human: 10,
    kategore: 'Эмоциональная разгрузка',
    min: 20,
    mindo: 250,
  },
  {
    id: '58sgbgbsgb0f-3da1-471f-bd96-145wbregbr2',
    name: 'bulbik',
    detailed: 'buldik rghder ghbdr gbe rgb ',
    title: 'Tafrem',
    number: 15,
    human: 2,
    kategore: 'Командообразование',
    min: 20,
    mindo: 250,
  },
  {
    id: '58srsthyfjh0f-3da1-471f-bd96-145wbregbr2',
    name: '2462452ik',
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
    name: 'nhrfdshshnrshe',
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
    name: 'nhrfdshshnrshe',
    detailed: 'bhjo hjkipo gb gt tgytfug ufg uftg utgfutg ',
    title: 'Tafrem',
    number: 15,
    human: 520,
    kategore: 'Психологические',
    min: 20,
    mindo: 250,
  },
];
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


export function BattFil(
  {
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) {
  return (
      <TouchableOpacity onPress={() => navigation.replace('FilterSk')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>FilterSk</Text></TouchableOpacity>
  )};
  