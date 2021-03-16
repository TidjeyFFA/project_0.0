import { StackScreenProps } from '@react-navigation/stack';
<<<<<<< HEAD
import * as React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

export default function TabTryScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab try</Text>
      <EditScreenInfo path="/screens/TabTryScreen.tsx" />
      <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}><Text>loh</Text></TouchableOpacity>
    </View>
  );
}

=======
import React, { useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import BlockOk from '../hooks/BlockOk';
// import DATA from '../hooks/DATA';
import { RootStackParamList } from '../types';

import { StyleSheet, Modal, Alert, Pressable, Image, TouchableOpacity, SafeAreaView, TouchableOpacityBase} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import  DATAMass from '../hooks/DATA';

import { Text, View } from '../components/Themed'; 

// DATAMass

const DATA = [
  {
    id: '586etga0f-3da1-471f-bd96-145571e29d72',
    name: 'игра',
    podrobn: 'картофель не любит есть своих сородичей',
    title: 'Third Item',
    number: 20,
    minuts: 10,
  },
  {
    id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
    name: 'драконор',
    podrobn: 'драконы очень любят картошку, но картофельподает на них в суд',
    title: 'Third Item',
    number: 10,
    minuts: 30,
  },
  {
    id: '586fgdj0f-3djs1-471f-bd96-145jsjs72',
    name: 'hghghgh',
    podrobn: 'shrhdrhjtejtjtjtektuktukukukeuk',
    title: 'Third Item',
    number: 12,
    minuts: 10,
  },
];




function Item(
  { id, title, name, podrobn, number, }:
  {id: string, title: string, name: string, podrobn: string, number: any }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={[
        styles.item,
      ]}
    >
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 25,}}>{name}</Text>
      </View>
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 20, }}>{podrobn}</Text>
      </View>
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
              style={{
                height: 20,
                width: '80%',
                // backgroundColor: '#00EE3C',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  borderRadius: 1 ,
                  height: 1,
                  width: 40,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ><Text>   </Text></TouchableOpacity>
            </TouchableOpacity>
    <TouchableOpacity
      // onPress
      style={[
        styles.item,
      ]}
    >
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 25,}}>{name}</Text>
      </View>
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 20, }}>{podrobn}</Text>
      </View>
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
    
            <View style={{width:'90%'}}>
                {/* <BlockOk path="lololol" /> */}
          </View>
          </View>
      </Modal>
    </View>
    
  );
}

const result = DATA.filter(DATA => DATA.number > 11);

export default function TabTryScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.title}>Tab try</Text>
      <EditScreenInfo path="/screens/TabTryScreen.tsx" />
      <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>NotFound</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('FilterSk')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>FilterSk</Text></TouchableOpacity>
     
              <Image style={{width: 287, height: 197, margin: 20, marginRight: 20, marginLeft: 20,}}
                source={require('../img/F.png')}
              />
      <FlatList
        data={result}
        renderItem={({ item }) => (
          <Item
            number={item.number}
            id={item.id}
            title={item.title}
            name={item.name}
            podrobn={item.podrobn}
          />
        )}
        keyExtractor={item => item.id}
      />
    <View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
              style={{
                height: 20,
                width: '80%',
                // backgroundColor: '#00EE3C',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#000',
                  borderRadius: 1 ,
                  height: 1,
                  width: 40,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ><Text>   </Text></TouchableOpacity>
            </TouchableOpacity>
            <View style={{width:'90%'}}>
                <BlockOk path="lololol" />
          </View>
          </View>
      </Modal>
    </View>
  </View>
  </ScrollView>
  );
}

// //filter by particular state
// const state=;
// const filtered = data
// .filter(e => e.state == state)//filter to only keep elements from the same state
// .map(e => {
//   const {id, name, city} = e;
//   return {id, name, city};
// });//only keep the desired data ie id, name and city

// //get states array
// const states = data
// .reduce((acc: any, elem: any, e: any) => {
//   const state_names = acc.map(e => e.state);//get all registered names

//   if(state_names.includes(elem.state)){//if it is already there
//     const index = acc.find(e => e.state==elem.state);
//     acc[index] = {state: acc[index].state, count: acc[index].count+1};//increment it's count
//     return acc;
//   }else//otherwise
//     return [...acc, {state: elem.state, count: 1}];//create it
// }, []);

>>>>>>> aa0e082 (no message)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
<<<<<<< HEAD
=======
  item: {
    backgroundColor: '#DCDCDC',
    // backgroundColor: 'green',
    width: 360,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredView: {
    // backgroundColor: "#EE00EE",
    flex: 1,
    justifyContent: "center",
    opacity: 400,
    alignItems: "center",
  },
  modalView: {
    // backgroundColor: "#EC3B00",
    borderRadius: 20,
    marginTop: 6,
    width: '100%',
    height: 1000,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 8
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 9
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gg:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  knok:{
    // backgroundColor: '#DCDCDC', 
    backgroundColor: '#F9F6F4',
    marginTop: 16,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal:  10,
  },
  textTimmy:{
    fontSize: 15,
  },
>>>>>>> aa0e082 (no message)
});
