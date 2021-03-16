<<<<<<< HEAD
import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{
          width: '80%',
          // height: 100,
          backgroundColor: '#0D1B3D',
          borderRadius: 24,
          alignItems: "center",
          }}>
            
            <Image style={{width: 287, height: 197, margin: 20,}}
              source={require('../img/F.png')}
            />
            <Text style={{color: '#fff', fontSize: 28, textAlign: "center", marginBottom: 20,}}>Найди свою первую {'\n'} игру сегодня</Text>
            
              <TouchableOpacity style={{
                backgroundColor: '#2B67F6',
                width: 287,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 86,
                marginBottom: 20,
                }}>
               <Text style={{fontSize: 17, color: '#fff'}}>Иду искать!</Text>
              </TouchableOpacity>
       </View>
=======
import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import { StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';

const DATA = [
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
    human: 20,
    min: 20,
  },
  {
    id: '58sgbgbsgb0f-3da1-471f-bd96-145wbregbr2',
    name: 'bulbik',
    podrobn: 'buldik rghder ghbdr gbe rgb ',
    title: 'Tafrem',
    number: 15,
    human: 20,
    min: 20,
  },
];



function Item(
  { id, title, name, podrobn, number, human, min, }:
  {id: string, title: string, name: string, podrobn: string, number: any, human: any, min: any,  }) {
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
              <View style={{ width:'90%'}}>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={{fontSize: 32, fontWeight: 'bold' }}>{name}</Text>
                </View>
                <View style={{ flexDirection:'row',  }}>
                  <TouchableOpacity style={styles.button}>
                     <Text> до {human} чел </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                     <Text> до {min} мин </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={{fontSize: 20, }}>{podrobn}</Text>
                </View>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                <Text style={styles.title}>{title}</Text>
                </View>
              </View>
            <View style={{width:'90%'}}>
                {/* <BlockOk path="lololol" /> */}
            </View>
          </View>
      </Modal>
    </View>
    
  );
}
export default function TabOneScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
        <View style={{paddingTop: 100}}></View>
        <View style={{
            // height: 100,
            backgroundColor: '#0D1B3D',
            borderRadius: 24,
            alignItems: "center",
            padding: 20,
            }}>
              
              <Image style={{width: 287, height: 197, margin: 20, marginRight: 20, marginLeft: 20,}}
                source={require('../img/F.png')}
              />
              <Text style={{color: '#fff', fontSize: 28, textAlign: "center", marginBottom: 20,}}>Найди свою первую {'\n'} игру сегодня</Text>
              
                <TouchableOpacity onPress={() => navigation.replace('FilterSk')} style={{
                  backgroundColor: '#2B67F6',
                  width: 287,
                  height: 56,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 86,
                  marginBottom: 20,
                  }}>
                    <Text style={{fontSize: 17, color: '#fff'}}>Иду искать!</Text>
                </TouchableOpacity>
        </View>
        <View style={{
          alignItems: 'flex-start',
          width: '74%',
          marginTop: 36,
        }}>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Недавние</Text>
        </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            number={item.number}
            id={item.id}
            min={item.min}
            human={item.human}
            title={item.title}
            name={item.name}
            podrobn={item.podrobn}
          />
        )}
        keyExtractor={item => item.id}
      />
>>>>>>> aa0e082 (no message)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center',
  },
=======
    // backgroundColor:'red',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
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
>>>>>>> aa0e082 (no message)
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
    marginTop:20,
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
>>>>>>> aa0e082 (no message)
});
