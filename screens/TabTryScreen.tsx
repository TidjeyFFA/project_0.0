import { StackScreenProps } from '@react-navigation/stack';
import React, { useState,Component } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
// import BlockOk from '../hooks/BlockOk';
import BlockFk from '../hooks/BlockOk';
// import DATA from '../hooks/DATA';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { DATAexcel } from '../hooks/DATA'
import { 
  StyleSheet, 
  Modal, 
  Alert, 
  Pressable, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  TouchableOpacityBase, 
  TextInput,
} from 'react-native';
// import { 
//   AsyncStorage, 
// } from 'react -native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import  DATAMass from '../hooks/DATA';

import { Text, View } from '../components/Themed'; 

// DATAMass
import { StatusBar } from 'react-native'

// class AsyncStorageExample extends Component {
//    state = {
//       'name': ''
//    }
//    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   
//    setName = (value: any) => {
//       AsyncStorage.setItem('name', value);
//       this.setState({ 'name': value });
//    }
//    render() {
//       return (
//          <View style = {styles.container}>
//             <TextInput style = {styles.textInput} autoCapitalize = 'none'
//             onChangeText = {this.setName}/>
//             <Text>
//                {this.state.name}
//             </Text>
//          </View>
//       )
//    }
// }
// export  AsyncStorageExample


// let experement = 0
// const result = DATA.filter(DATA => DATA.number > 11);    default

export default function TabTryScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

// let FUCK = 0
// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key1')
//     jsonValue != null ? FUCK = JSON.parse(jsonValue) : 0;
//   } catch(e) {
//     // error reading value
//   }
// }

const [experement, setExperement] = useState(0);

// setExperement(FUCK)
const storeData = async (  ) => {
  try {
      const jsonarrayLike = JSON.stringify(  experement  )
      await AsyncStorage.setItem('storage_Key1', jsonarrayLike)
    console.log('array seved ')
  } catch (e) {
    console.log('error saving array')
    // saving error
  }
  console.log('Done')

}

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>NotFound</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('FilterSk')} style={{backgroundColor: '#000'}}><Text style={{color:'#fff'}}>FilterSk</Text></TouchableOpacity>
      */}
      <Image style={{
        width: 287, 
        height: 197, 
        margin: 20, 
        marginRight: 20, 
        marginLeft: 20,
      }}
        source={require('../img/F.png')}
      />
      
      <View style={styles.modalView}>
      <Text style={{
        fontSize:38, 
        alignItems:'center', 
        textAlign:'center', 
        fontWeight:'bold', 
        }}>Набор{"\n"}игротехника</Text>
    <View style={styles.centeredView}>
      <View style={{flexDirection:'row', }}></View>
    <TouchableOpacity
        style={{
          borderRadius: 63,
          // paddingHorizontal: 180,
          // paddingVertical: 10,
          width:170,
          height:78,
          alignItems:'center',
          justifyContent:'center',
          // elevation: 2
          backgroundColor:'#FF8C39',
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        <Text style={{fontSize:32, fontWeight: 'bold', color: '#fff'}}>300 P</Text>
      </TouchableOpacity>
      <View style={{}}>
        <View style={{flexDirection:'row',}}>
          <Image source={require('../img/Check.png')}
          />
          <Text style={{fontSize:17, marginTop: 5  }}>Механика для разработки игры</Text>
        </View>
        <View style={{flexDirection:'row',}}>
          <Image source={require('../img/Check.png')}
          />
          <Text style={{fontSize:17, marginTop: 5 }}>5 компонентов игры</Text>
        </View>
        <View style={{flexDirection:'row',}}>
          <Image source={require('../img/Check.png')}
          />
          <Text style={{fontSize:17, marginTop: 5  }}>Составление своих игр</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
        setExperement(experement+1)
        storeData
        // DATAexcel
        }  }
        style={{backgroundColor: '#FF000030', height:50, width: 50}}><Text>{experement}</Text></TouchableOpacity>
      <BlockFk icone={1} navigation= {navigation } />
      {/* <BlockFk styllee='0'/> */}
    </View>
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

const styles = StyleSheet.create({
  //  container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     marginTop: 50
  //  },
  //  textInput: {
  //     margin: 5,
  //     height: 100,
  //     borderWidth: 1,
  //     backgroundColor: '#7685ed'
  //  },
  container: {
    flex: 1,
    // marginTop: 50,
    backgroundColor: '#0D1B3D',
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
    flex: 1,
    // justifyContent: "center",
    opacity: 400,
    alignItems: "center",
  },
  modalView: {
    // backgroundColor: "#EC3B00",
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 6,
    width: '100%',
    height: 500,
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
    borderRadius: 30,
    // paddingHorizontal: 180,
    // paddingVertical: 10,
    width:327,
    marginTop: 24,
    marginBottom: 24,
    height:56,
    alignItems:'center',
    justifyContent:'center',
    // elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#2B5CEE",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontSize:17,
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
