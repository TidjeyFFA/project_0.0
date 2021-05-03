import { StackScreenProps } from '@react-navigation/stack';
import React, {useState, useEffect, } from 'react';
import { StyleSheet, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { DATA } from '../hooks/DATA';
import FilterBlokOk from '../components/FilterBlokOk'
import { RootStackParamList } from '../types';
import BlockOk from '../hooks/BlockOk'
import { createStore, } from 'redux'
import { connect, } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { searchChanged } from '../hooks/actions'
import { getStateFromPath } from '@react-navigation/core';
import { RootState } from '../hooks/reducers';
import { ButtHuman, ButtTime, ButtKategor } from '../store/index';



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
                     <Text> {kategore}  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                     <Text> до {min} мин </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={{fontSize: 20, }}>{podrobn}</Text>
                </View>
              </View>
            <View style={{width:'90%'}}>
            </View>
          </View>
      </Modal>
      </View>
    </View>
    
  );
}


export function FFF(props: number) {
  const [borro, setBorro] = useState(0);

}

  const fdf = '0';
function FilterScreen( 
  { navigation, searchChanged, movie, movieT, movogore, brah  }: StackScreenProps<RootStackParamList, 'FilterSk'>,
  
  ) {
    const props = {}
    // const { movie } = props
    // const { movie } = props;     
  console.log('thise props', props);
  // useEffect(() => {

  //   const backAction = () => navigation.replace('NotFound');
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();

  const ButtKategor13 = ({kateteButt, movie, movieT, movogore, brah }: any ) => {
    return(
      <TouchableOpacity
       style={(movogore == kateteButt) ? styles.knok3 : styles.knok} 
      onPress={() => {
        if(kateteButt==movogore) {
          searchChanged(movie, movieT, '', brah)
        } else {
        searchChanged(movie, movieT, kateteButt, brah)}
                }}>
          <Text style={movogore == kateteButt ? styles.textTimmy2 : styles.textTimmy}>{kateteButt}</Text>
      </TouchableOpacity>
    )
  }

  // }, 
  // []);
    
    const [fillHumanPerState, setfillHumanPerState] = useState(0);
    const [fillTimePerState, setfillTimePerState] = useState(0);
    const [nolik, setNolik] = useState(0);

    const [odelete, setOdelete] = useState(0);
  return (
      <View style={{backgroundColor: '#fff', flex: 1, marginTop: 50, }}>
          <FlatList
        data= {DATA.filter(DATA => DATA.human > movie && DATA.min > movieT && DATA.kategore == movogore)  }     
        ListHeaderComponent={
          <>
          <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{  height:40, width: 80, backgroundColor: '#000'}}>
              <Text style={{color:'#fff'}}>NotFound</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',}}>
          <BlockOk icone = {0} />
          <ButtKategor kateteButt={movogore}/>
          <ButtKategor kateteButt={'Универсальные'}/>
          </View>
          </> 
        }          
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
  );
}


const mapStateToProps = (state: RootState) => {
  return  { 
    // movie: store.getState 
    movie: state.search.movie,
    movieT: state.search.movieT,
    movogore: state.search.movogore,
    brah: state.search.brah
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    searchChanged: (numberHuman: number, numberTime: any, kategory: any, brah: any ) => dispatch( searchChanged( numberHuman, numberTime, kategory, brah) ),
  }
}
export default connect(mapStateToProps)(FilterScreen);



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
    width: '90%',
    flexDirection:'row',
    height: 94,
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemg: {
    backgroundColor: '#DCDCDC',
    // backgroundColor: 'green',
    width: 360,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimmy:{
    fontSize: 15,
    color:'#000'
  },
  textTimmy2:{
    fontSize: 15,
    color:'#fff'
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
  knok2:{
    backgroundColor: '#2B67F6', 
    marginTop: 10,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal:  10,
  },
  knok3:{
    backgroundColor: '#61CA85', 
    marginTop: 10,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal:  10,
  },
});
