import { StackScreenProps } from '@react-navigation/stack';
import React, {useState, useEffect, } from 'react';
import { StyleSheet, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { DATA } from '../hooks/DATA';
import FilterBlokOk from '../components/FilterBlokOk'
import { RootStackParamList } from '../types';
import BlockOk from '../hooks/BlockOk'
import { createStore, } from 'redux'
import { connect, } from 'react-redux'
// import {  mapStateToProps } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import  store, { counterSlice }  from '../store/index'
import { searchChanged } from '../hooks/actions'

import {incremented,  } from '../store/index'
import  {Vivod, fillHumanPer, fillTimePer, pistos }  from '../store/index'
import   { store }  from '../store/index'
// import getStorage from 'redux-persist/es/storage/getStorage';
import { getStateFromPath } from '@react-navigation/core';
import { RootState } from '../hooks/reducers';
// import getStorage from 'redux-persist/es/storage/getStorage';
// counterSlice.actions
function Item(
  { id, title, name, podrobn, number, human, min, }:
  {id: string, title: string, name: string, podrobn: string, number: any, human: any, min: any,  }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={{alignItems:'center', width:'90%'}}>
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={[
        styles.item,
      ]}
    >
      <View style={{width:'80%', backgroundColor: '#FF000000'}}>
        
      <View style={{ flexDirection:'row',  backgroundColor: '#EE16D300' }}>
        <Text style={{fontSize: 20,}}>{name}</Text>
      </View>
      <View style={{ flexDirection:'row', backgroundColor:'#FF000000' }}>
                  <TouchableOpacity style={styles.buttonFil2}>
                     <MaterialCommunityIcons name="human-male" size={14} color="black" />
                     <Text style={{fontSize:15,}}> до {human} чел </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFil2}>
                     <Text> до {min} мин </Text>
                  </TouchableOpacity>
                </View>
      {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 20, }}>{podrobn}</Text>
      </View> */}
      {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>
      </View> */}
      </View>
      <View style={{backgroundColor: '#FF000000'}}>
        <MaterialCommunityIcons name="human-male" size={14} color="black" />
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
                
              <TouchableOpacity style={styles.button}>
                     <Text>{min}</Text>
                  </TouchableOpacity>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={{fontSize: 32, fontWeight: 'bold' }}>{name}</Text>
                </View>
                <View style={{ flexDirection:'row',  }}>
                  <TouchableOpacity style={styles.button}>
                     <MaterialCommunityIcons name="human-male" size={14} color="black" />
                     <Text> до {human} чел </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                     <Text> до {min} мин </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={{fontSize: 20, }}>{podrobn}</Text>
                </View>
                {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                <Text style={styles.title}>{title}</Text>
                </View> */}
              </View>
            <View style={{width:'90%'}}>
                {/* <BlockOk path="lololol" /> */}
            </View>
          </View>
      </Modal>
      </View>
    </View>
    
  );
}

// const result = DATA.filter(DATA => DATA.number > 11);

export function FFF(props: number) {
  const [borro, setBorro] = useState(0);

}

  const fdf = '0';
//  { navigation,  }: StackScreenProps<RootStackParamList, 'FilterSk'>,
function FilterScreen( 
  { navigation, movie, movieT }: StackScreenProps<RootStackParamList, 'FilterSk'>,
  
  ) {
    const props = {}
    // const { movie } = props
    // const { movie } = props;     
  console.log('thise props', props);
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Погодитека!!!", "Вы хотите выйти??", [
        {
          text: "Отмена",
          onPress: () => null,
          style: "cancel"
        },
        { text: "ДА", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();

    // const mapStateToProps = ( {state}:{state: number} ) => ({ fillHumanPer: state._fillHuman })

  }, []);
    
    // export connect(mapStateToProps)(_fillHuman);
    const [fillHumanPerState, setfillHumanPerState] = useState(0);
    const [fillTimePerState, setfillTimePerState] = useState(0);
    const [nolik, setNolik] = useState(0);

    const [odelete, setOdelete] = useState(0);
    // const arrarr= ()=>{if(pistos>0){setfillHumanPerState(fillHumanPer)}};
    // componentDidUpdate(fillHumanPer){}
  return (
      <View style={{backgroundColor: '#fff', flex: 1, marginTop: 50, }}>
          <FlatList
// {DATA}       mapStateToProps     mapStateToProps     fillHumanPerState
        data= {DATA.filter(DATA => DATA.human > movie && DATA.min > movieT)  }     
        ListHeaderComponent={
          <>
          
          <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}>
              <Text style={{color:'#fff'}}>NotFound</Text>
          </TouchableOpacity>
          
    <TouchableOpacity onPress={() => incremented()} style={{backgroundColor: '#000', height: 70}}>
    <Text>  </Text> 
    </TouchableOpacity>
    {/* store.dispatch(incremented())                 props*/}
            <Vivod/>
          <BlockOk/>
          <Text>{fillTimePer}</Text>
          {/* <Text>{props.state}</Text> */}
          <TouchableOpacity onPress={
            () => {
              // console.log(store.getState())
              // console.log('props: ', props)
              console.log('movie: ', movie)
              // console.log('movie: ', searh.movie)
              // console.log(store.getState())


              setfillHumanPerState(fillHumanPer)
              setfillTimePerState(fillTimePer)
          }} style={{backgroundColor: '#000', height: 70}}>
            <Text style={{color:'#fff'}}>{fillHumanPerState}  fillHumanPerState</Text>
            <Text style={{color:'#fff'}}>{fillTimePerState}  fillTimePerState</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={
            () => {
              console.log('movie: ', movie)
              console.log('movieT: ', movieT)
              // console.log('store: ', store.getState())
              // console.log('store: ', movie )

              // setOdelete(movie)
          }} style={{backgroundColor: '#00022230', height: 70}}>
            <Text style={{color:'#000'}}>{odelete}  odelete</Text>
            <Text style={{color:'#000'}}>{}  odelete</Text>
          </TouchableOpacity>
          </>
        }          
        renderItem={({ item }) => (
          <Item
            human={item.human}
            min={item.min}
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

// store.subscribe
// function mapStateToProps(  state : any ) {
//   return  { movie: state.search.movie }
// }
const mapStateToProps = (state: RootState) => {
  return  { 
    // movie: store.getState 
    movie: state.search.movie,
    movieT: state.search.movieT
  }
}
export default connect(mapStateToProps)(FilterScreen);
// export default connect(mapStateToProps)(TodoApp)     search.payload      () => console.log(store.getState())
//     const mapStateToProps = state => {
//       return {
//         _fillHuman: initialState._fillHuman
//       }
//     }
// function mapStateToProps(state: State) {
//   return {
//       visible: !(state.login && state.password),
//   };}
// export default (FilterScreen)
// const mapStateToProps = function(state) {
//   return {
//     profile: state.user.profile,
//     loggedIn: state.auth.loggedIn
//   }
// } connect(mapStateToProps)               

// const mapStateToProps = (state: number) => { console.log(state); return { props: state.valueOf } }
// export (FilterScreen);
//      connect(mapStateToProps )     FFF    FilterScreen
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
  buttonFil2:{
    // backgroundColor: '#DCDCDC', 
    backgroundColor: '#31EE1600',
    flexDirection:'row',
    marginTop: 16,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 4,
    // paddingHorizontal:  10,
  },
  buttonFil:{
    // backgroundColor: '#DCDCDC', 
    backgroundColor: '#F9F6F4',
    flexDirection:'row',
    marginTop: 16,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 47,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal:  10,
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
    width:'100%',
    justifyContent: "center",
    opacity: 400,
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
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
  button:{
    // backgroundColor: '#DCDCDC', 
    backgroundColor: '#F9F6F4',
    flexDirection:'row',
    marginTop: 16,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal:  10,
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
