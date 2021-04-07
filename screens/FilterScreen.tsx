import { StackScreenProps } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { DATA } from '../hooks/DATA';
import FilterBlokOk from '../components/FilterBlokOk'
import { RootStackParamList } from '../types';
import BlockOk from '../hooks/BlockOk'

function Item(
  { id, title, name, podrobn, number, /*numberF, humanF*/ }:
  {id: string, title: string, name: string, podrobn: string, number: any, /*numberF: any, humanF: any*/ }) {
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

// const result = DATA.filter(DATA => DATA.number > 11);

export function FFF() {
  const [borro, setBorro] = useState(0);
}

  const fdf = '0';

export default function FilterScreen(
  {
  navigation,
}: StackScreenProps<RootStackParamList, 'FilterSk'>) {
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
      <View style={{backgroundColor: '#fff', flex: 1, marginTop: 50, }}>
          <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}>
              <Text style={{color:'#fff'}}>NotFound</Text>
          </TouchableOpacity>
          <BlockOk/>
          <FlatList
        data={DATA}
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
      {/* <FilterBlokOk numberF = {fdf} humanF='10'/> */}
      </View>
  );
}



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
    backgroundColor: "#fff",
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
});
