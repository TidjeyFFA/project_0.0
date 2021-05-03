import React, { useState } from "react";
import { StyleSheet, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { connect, } from 'react-redux'
import { RootState } from '../hooks/reducers';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DATA } from '../hooks/DATA';
import { searchChanged, bruhRedux } from '../hooks/actions';
import { id_masspus } from '../hooks/actions';
import { AntDesign } from '@expo/vector-icons'; 


let horse = 1
let goblin = 0

function TabTwoScreen1({ bruh }: any) {
  
  const [goblinn, setGoblin] = useState(0);

 if(goblinn>0) {
    return (
      <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => {
            bruhRedux( horse )
            setGoblin(0)
          }
        }>
          <Text style={{marginTop:50}}>AAAAAAAA</Text>
      </TouchableOpacity>
        <>
        <Image style={{}}
          source={require('../img/menuPusto.png')}
        />
        <Text style={{fontSize: 20,}}>Добавь первую любимую игру</Text>
        </>
      </View>
      //   .filter(DATA ) => DATA.human > movie && DATA.min > movieT && DATA.kategore == movogore
    );} else { return (
      <View style={styles.container}>
      <FlatList
      data= {DATA} 
      style={{width: '100%', alignContent: 'center'}}    
      ListHeaderComponent={
      <TouchableOpacity 
      style={{ alignContent: 'center', flex: 1, backgroundColor:'#00003030'}}
        onPress={
          () => {
          bruhRedux( goblin )
          setGoblin(1)
          }
        }>
          <Text style={{marginTop:50, textAlign: 'center'}}>AAAAAAAA</Text>
      </TouchableOpacity>}          
      renderItem={({ item }) => (
        <Item
          kategore={item.kategore}
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
    </View>
    );}
}

const mapStateToProps = (state: RootState) => {
  return  { 
    // movie: store.getState 
    // movie: state.search.movie,
    // movieT: state.search.movieT,
    // movogore: state.search.movogore,
    // brah: state.search.brah
    // likeked: state.search.likeked
    bruh: state.search.bruh
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    // id_mass: (likeked: any) => 
    bruhRedux: (bruhh: any) => 
    // dispatch( id_masspus( likeked ) ),
    dispatch( bruhRedux( bruhh ) ),
  }
}

export const TabTwoScreen2 = connect(mapStateToProps, dispatchStateToProps)(TabTwoScreen1);

export default function TabTwoScreen() {
  return(
    <>
      {/* <TouchableOpacity></TouchableOpacity> */}
      <TabTwoScreen2/>
    </>
  )
}


function Item(
  { id, title, name, podrobn, number, human, min, kategore, }: any) {
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
      <View style={{ flexDirection:'row', backgroundColor:'#FF000000' }}>
                  <TouchableOpacity style={styles.buttonFil2}>
                     <MaterialCommunityIcons name="human-male" size={14} color="black" />
                     <Text style={{fontSize:15,}}> до {human} чел </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFil2}>
                     <Text> до {min} мин </Text>
                  </TouchableOpacity>
                </View>
        
      <View style={{ flexDirection:'row',  backgroundColor: '#EE16D300' }}>
        <Text style={{fontSize: 20,}}>{name}</Text>
      </View>
      <Text style={{flexWrap: 'wrap'}}>  {podrobn} </Text>
      {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
        <Text style={{fontSize: 20, }}>{podrobn}</Text>
      </View> */}
      {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>          backgroundColor: '#fff', FF000000
      </View> */}
      </View>
      <TouchableOpacity style={{height: 30, width: 30, alignItems: 'center', justifyContent: 'center'}}>
      <AntDesign name="hearto" size={18} color="black" />
      </TouchableOpacity>
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
                     <Text> {kategore}  </Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF000030'
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
  item: {
    backgroundColor: '#DCDCDC',
    // backgroundColor: 'green',
    width: '90%',
    flexDirection:'row',
    // height: 94,
    marginTop:20,
    marginBottom:20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    // backgroundColor: "#EE00EE",
    flex: 1,
    justifyContent: "center",
    // opacity: 400,
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 250,
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
    backgroundColor: '#DCDCDC', 
    // backgroundColor: '#F9F6F4',
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
