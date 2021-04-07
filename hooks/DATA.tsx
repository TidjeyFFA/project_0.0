import React, {useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import { StyleSheet, TouchableOpacity, Modal, Text, View} from 'react-native';

export const DATA = [
  {
    id: '586etga0f-3da1-471f-bd96-145571e29d72',
    name: 'игра',
    podrobn: 'картофель не любит есть своих сородичей',
    title: 'Third Item',
    number: 20,
    human: 20,
    min: 20,
  },
  {
    id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
    name: 'драконор',
    podrobn: 'драконы очень любят картошку, но картофельподает на них в суд',
    title: 'Third Item',
    number: 10,
    human: 10,
    min: 20,
  },
  {
    id: '58sgbgbsgb0f-3da1-471f-bd96-145wbregbr2',
    name: 'bulbik',
    podrobn: 'buldik rghder ghbdr gbe rgb ',
    title: 'Tafrem',
    number: 15,
    human: 2,
    min: 20,
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
  