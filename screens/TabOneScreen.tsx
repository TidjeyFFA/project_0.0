import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import { StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { DATA } from '../hooks/DATA'
import { id_massplus, arrayLikePlus, arrayLikeMinus } from '../hooks/actions';
import { RootState } from '../hooks/reducers';
import { connect, } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import { useLinkProps } from '@react-navigation/native';

// const DATA = [        id_masspus
//   {
//     id: '586etga0f-3da1-471f-bd96-145571e29d72',
//     name: 'игра',
//     podrobn: 'картофель не любит есть своих сородичей',
//     title: 'Third Item',
//     number: 20,
//     human: 20,
//     min: 20,
//   },
//   {
//     id: '586fgjfgn0f-3da1-471f-bd96-145jde29d72',
//     name: 'драконор',
//     podrobn: 'драконы очень любят картошку, но картофельподает на них в суд',
//     title: 'Third Item',
//     number: 10,
//     human: 20,
//     min: 20,
//   },
//   {
//     id: '58sgbgbsgb0f-3da1-471f-bd96-145wbregbr2',
//     name: 'bulbik',
//     podrobn: 'buldik rghder ghbdr gbe rgb ',
//     title: 'Tafrem',
//     number: 15,
//     human: 20,
//     min: 20,
//   },
// ];


function Item(
  { id, title, name, podrobn, number, human, min, mindo }:
  {id: string, title: string, name: string, podrobn: string, number: any, human: any, min: any, mindo: any }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={{alignItems:'center', width:'96%'}}>
    <TouchableOpacity
      onPress={
        () => {
        setModalVisible(true)
        id_massplus(id, name)
        }
      }
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
                     <Text> от {min} - {mindo} мин </Text>
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
        {/* <MaterialCommunityIcons name="human-male" size={14} color="black" /> */}
        <AntDesign name="hearto" size={24} color="black" />
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


function Item3(
  { id, name,}:
  {id: string, name: string,}) {
  return (
    <Text 
    onPress={
      () => {
      
      id_massplus(id, name)
      // id_massplus( id,  name )
      }
    } style={{margin: 50}}>{name} {id} </Text>
  )}

  
export function Itemm({ 
    id, 
    title, 
    name, 
    detailed, 
    number, 
    human, 
    min, 
    id_masspus, 
    kategore, 
    mindo, 
    arrayLikePlus, 
    arrayLikeMinus, 
    arrayLike 
}:{
    id: string,
    title: string, 
    name: string, 
    detailed: string, 
    number: any, 
    human: any, 
    min: any,  
    id_masspus: any, 
    kategore: any, 
    mindo: any, 
    arrayLikePlus: any, 
    arrayLikeMinus: any, 
    arrayLike: any
  }) {
  const [checkLike, setCheckLike] = useState(arrayLike.some(function(e: any){return e.id == id }) );
    const BottomLike =  ( arrayLike.some(function(e: any){return e.id == id }) || checkLike ) ? 
      
      <TouchableOpacity style={{backgroundColor: '#FF000000'}} onPress={()=> {
        arrayLikeMinus(id,) ,
        setCheckLike(false)
        }}>
        <AntDesign name="heart" size={24} color="black" />
      </TouchableOpacity>
         : 
      <TouchableOpacity style={{backgroundColor: '#FF000000'}} onPress={()=> {
        arrayLikePlus(
        id,
        name,
        detailed,
        number,  
        human,
        kategore,
        min,
        mindo,
        ) ,
        setCheckLike(true)
        }}>
        <AntDesign name="hearto" size={24} color="black" />
        {/* <MaterialCommunityIcons name="human-male" size={14} color="black" /> */}
      </TouchableOpacity>
        
    
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={{alignItems:'center', width:'96%'}}>
    <TouchableOpacity
      onPress={
        () => {
        setModalVisible(true),
        
        id_masspus(id, name)
        // id_masspus( id,  name )
        }
      }
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
      </View>
      <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>
      </View>                    */}
      </View>
      <View style={{ backgroundColor: '#00000000'}}>
          {BottomLike}
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
                  <Text style={{fontSize: 20, }}>{detailed}</Text>
                </View>
                <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                  <Text style={styles.title}>{title}</Text>
                </View> 
              </View>
            {/* <View style={{width:'90%'}}>
                <BlockOk path="lololol" />
            </View> */}
          </View>
      </Modal>
      </View>
    </View>
    
  );
}

function getRecentBlocks(blocks: Array<any>): Array<any> {
  const recentBlocks = []

  if (blocks.length > 0) 
    recentBlocks.push(blocks[0])
  
  if (blocks.length > 1) 
    recentBlocks.push(blocks[1])

  return recentBlocks
}


function pervuyu() {
  return(
    <Text style={{color: '#ff8c39', fontSize: 28,}}>первую</Text>
  )
}
function Dadasa( {likeked}: any ) {
  return likeked
}
// function check()
export function TabOneScreen1({
  navigation,
  likeked,
  mass,
  id_massplus,
  arrayLikePlus,
  arrayLikeMinus,
  arrayLike,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  let DATATA
  console.log('fghuedhgbefdbghef' , )
  // let massive = data.some(o => o.id === 2)
  const Massive = ({id}:any) => {
    if (DATA.some(arr => arr.id === id)) {
      return true;
    }
    return false;
  }
  let DADADATA = likeked
  // const [ getAt, setGetAt] = useState([]);
  // setGetAt( likeked )
  return (
    //      {likeked.slice( 0, 2 )}    
    <View style={styles.container}>

      <FlatList
        data={getRecentBlocks(likeked)}
        // style={{alignItems:'center'}}   likeked  scrollEnabled= {false}  , backgroundColor: '#FF000030'
        ListHeaderComponent={
          <View style={{width:'100%',
            // backgroundColor: '#FF000020', 
            alignItems: 'center', 
            }}>
          <View style={{ width:'100%',  alignItems: 'center', }}>
        <View style={{paddingTop: 60}}></View>
        <View style={{
            // height: 100,
            width: '90%',
            // minWidth:350,
            backgroundColor: '#0D1B3D',
            borderRadius: 24,
            alignItems: "center",
            padding: 10,
            }}>
              
              <Image style={{width: 287, height: 197,  marginRight: 10, marginLeft: 10,}}
                source={require('../img/F.png')}
              />
              <View style={{flexDirection:'row',marginBottom: 0, backgroundColor: '#ff000000'}}>
                <Text style={{color: '#fff', fontSize: 28, }}>Найди свою </Text>
                <Text style={{color: '#ff8c39', fontSize: 28, }}>перевую</Text>
              </View>   
              <Text style={{color: '#fff', fontSize: 28, textAlign: "center", marginBottom: 20,}}>игру сегодня</Text>
              
                <TouchableOpacity onPress={() => navigation.navigate('FilterSk')} style={{
                  backgroundColor: '#2B67F6',
                  // width: 287,
                  width: '90%',
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
        </View>
        </View>}
        ListFooterComponent={
          <View  >
            <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft:45}}>Популярные</Text>
        <FlatList
        data={DATA}
        // style={{alignItems:'center'}}     scrollEnabled= {false}  , backgroundColor: '#FF000030'
        renderItem={({ item }) => (
          <Itemm
            arrayLike={arrayLike}
            arrayLikeMinus={arrayLikeMinus}
            arrayLikePlus={arrayLikePlus}
            id_masspus={id_massplus}
            number={item.number}
            id={item.id}
            min={item.min}
            human={item.human}
            title={item.title}
            name={item.name}
            detailed={item.detailed}
            kategore={item.kategore}
            mindo={item.mindo}
          />
        )}
        keyExtractor={item => item.id}
      />
          </View>

        }
        renderItem={({ item }: any) => (
          <Itemm
            arrayLike={arrayLike}
            arrayLikeMinus={arrayLikeMinus}
            arrayLikePlus={arrayLikePlus}
            id_masspus={id_massplus}
            number={item.number}
            id={item.id}
            min={item.min}
            human={item.human}
            title={item.title}
            name={item.name}
            detailed={item.detailed}
            kategore={item.kategore}
            mindo={item.mindo}
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
    // movie: state.search.movie,
    // movieT: state.search.movieT,
    // movogore: state.search.movogore,
    // brah: state.search.brah
    likeked: state.likeds.mass,
    arrayLike: state.likeds.arrayLike,

  }
}

const dispatchStateToProps = (dispatch: any) => {
  return  { 
    id_massplus: (
      likeked: any,
      names: any, 
      ) => dispatch( id_massplus( 
      likeked,
      names,  
      ) ),
    arrayLikePlus: (
    id: any,
    name: any,
   podrobn: any,
   number: any,
   human: any,
   kategore: any,
   min: any,
   mindo: any,
    ) => dispatch( arrayLikePlus(
      id,
      name,
      podrobn,
      number,
      human,
      kategore,
      min,
      mindo,
    )),
    arrayLikeMinus: ( id: any) => dispatch( arrayLikeMinus( id))
  }
}

export const TabOneScreen = connect(mapStateToProps, dispatchStateToProps)(TabOneScreen1);
export const Dadadasa = connect(mapStateToProps)( Dadasa );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red',
    height: '100%',
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
    width: '90%',
    flexDirection:'row',
    height: 94,
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    backgroundColor: '#DCDCDC',
    // backgroundColor: 'green',
    width: 360,
    flexDirection:'row',
    height: 94,
    marginTop:20,
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
});
