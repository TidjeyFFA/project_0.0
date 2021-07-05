import React, { useState } from "react";
import { StyleSheet, Dimensions, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { connect, } from 'react-redux'
import { RootState } from '../hooks/reducers';
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { DATA } from '../hooks/DATA';
import { searchChanged, bruhRedux } from '../hooks/actions';
import { id_massplus, arrayLikePlus, arrayLikeMinus  } from '../hooks/actions';
import { AntDesign } from '@expo/vector-icons'; 
// import { Itemm } from './TabOneScreen'


let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
let deviceHeightHalf = deviceHeight/2


let horse = 1
let goblin = 0

function TabTwoScreen1({ 
  arrayLike, 
  arrayLikePlus,
  arrayLikeMinus, }: any) {
  
  const [goblinn, setGoblin] = useState(0);

 if(arrayLike.length == 0) {
    return (
      <View style={styles.container}>
        <>
        <View style={styles.centeredViewBEZ }>
        <Image style={{ height: 255, width: 153}}
          source={require('../img/menuPusto.png')}
        />
        </View>
        <Text style={{fontSize: 20,}}>Добавь первую любимую игру</Text>
        </>
      </View>
      //   .filter(DATA ) => DATA.human > movie && DATA.min > movieT && DATA.kategore == movogore
    );} else { return (
      <View style={styles.container}>
      <FlatList
      data= {arrayLike} 
      style={{width: '100%', alignContent: 'center'}}    
      // ListHeaderComponent={}          
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
    // bruh: state.search.bruh
    arrayLike: state.likeds.arrayLike
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    // id_mass: (likeked: any) => 
    // bruhRedux: (bruhh: any) => dispatch( bruhRedux( bruhh ) ),
    // dispatch( id_masspus( likeked ) ),
    id_massplus: (
      likeked: any,
      names: any, 
     detailed: any,
     number: any,
     human: any,
     kategore: any,
     min: any,
     mindo: any,
      ) => dispatch( id_massplus( 
        likeked,
        names,
        detailed,
        number,
        human,
        kategore,
        min,
        mindo,
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


export const TabTwoScreen = connect(mapStateToProps, dispatchStateToProps)(TabTwoScreen1);

export function TabTwoScreen2() {
  return(
    <>
      {/* <TouchableOpacity></TouchableOpacity> */}
      <TabTwoScreen2/>
    </>
  )
}


 function Itemm({ 
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
  const BottomLike =  ( arrayLike.some(function(e: any){return e.id == id }) ) ? 
    
    <TouchableOpacity style={{backgroundColor: '#FF000000'}} onPress={()=> {
      arrayLikeMinus(id,) ,
      setCheckLike(false)
      }}>
      <AntDesign name="heart" size={24} color="#FF8C39" />
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
    
  const [bigDetailed, setBigDetailed] = useState(true);

      const BigDetailed = (bigDetailed) ? 
      <>
    <View style={{ flexDirection:'row',  backgroundColor: '#FF000000' }}>
      
      <Text numberOfLines={5} style={{  fontSize: 15,  color: '#000000',  }}>{detailed}</Text>
    </View>
    <TouchableOpacity onPress={ ()=> setBigDetailed(false)}>
      <Text style={{color: 'blue'}}>
        далее...
      </Text>
    </TouchableOpacity>
    </>
    : 
    <>
  <View style={{ flexDirection:'row',  backgroundColor: '#FF000000' }}>
    
    <Text style={{  fontSize: 15,  color: '#000000',  }}>{detailed}</Text>
  </View>
  <TouchableOpacity onPress={ ()=> setBigDetailed(true)}>
    <Text style={{color: 'blue'}}>
      далее...
    </Text>
  </TouchableOpacity>
  </>

  
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
    <View style={{ width: '90%', flexDirection:'row', justifyContent: 'space-between' ,  backgroundColor: '#EE16D300' }}>
      <TouchableOpacity style={{
        backgroundColor: '#61CA85', 
        borderRadius: 15, 
        paddingHorizontal:  4, 
        paddingVertical:  6, 
  }}><Text style={{color: '#fff'}}> {kategore} </Text></TouchableOpacity>
    <View style={{ backgroundColor: '#00000000'}}>
        {BottomLike}
    </View>
    </View>
    <View style={{width:'88%', backgroundColor: '#FF000000'}}>
      
      <Text style={{fontSize: 20, fontWeight:'bold', marginTop: 5, color: '#000' }}>{name}</Text>
      <View style={{ flexDirection:'row', backgroundColor:'#FF000000' }}>
          <TouchableOpacity style={styles.buttonFil2}>
              <MaterialCommunityIcons name="human-male" size={14} color="black" />
              <Text style={{fontSize:15,color: '#000'}}> до {human} чел </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFil2}>
              <Text style={{color: '#000'}}> до {min} мин </Text>
          </TouchableOpacity>
      </View>
    {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
     <Text style={styles.title}>{title}</Text>
    </View>                    */}
    {BigDetailed}


    </View>
    
  </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}
          // style={{ alignItems: "flex-end", backgroundColor: '#FF000030'}}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
         <ScrollView style={{flex: 1, height: '100%'}}>
          <View  style={{flex: 1, backgroundColor: '#FF000000', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
       
         <TouchableOpacity  
            onPress={() => setModalVisible(!modalVisible)} 
            style={{
              flex:1, 
              width: '100%',
              height: deviceHeightHalf, 
              backgroundColor: '#FF000000',
            }}><Text></Text></TouchableOpacity>
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
                <View style={{  width:'90%'}}>
  
                  <View style={{ alignItems: "flex-start", justifyContent: 'space-between', flexDirection: 'row', /*backgroundColor: '#FF000030'*/}}>
                   <TouchableOpacity style={{
                    backgroundColor: '#61CA85', 
                    borderRadius: 15, 
                    paddingHorizontal:  4, 
                    paddingVertical:  6, 
                   }}>
                    <Text style={{color: '#fff'}}> {kategore} </Text>

                  </TouchableOpacity>
                   {BottomLike}

                  </View>
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
                  <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' , marginBottom: 100}}>
                    <Text style={{fontSize: 20, }}>{detailed}</Text>
                  </View>
                  {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
                    <Text style={styles.title}>{title}</Text>
                  </View>  */}
                </View>
              {/* <View style={{width:'90%'}}>
                  <BlockOk path="lololol" />
              </View> */}
            </View>

            </View>
          </ScrollView>
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
    // backgroundColor: '#FF000030'
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
    backgroundColor: '#F9F6F4',
    // backgroundColor: 'green',
    width: '90%',
    // flexDirection:'row',
    // height: 94,
    marginTop:20,
    marginBottom:20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
    paddingVertical: 20,
    // paddingHorizontal:  10,
  },
  centeredView: {
    // backgroundColor: "#EE00EE",
    flex: 1,
    justifyContent: "center",
    // opacity: 400,
    alignItems: "center",
  },
  centeredViewBEZ: {
    // backgroundColor: "#EE00EE",
    justifyContent: "center",
    // opacity: 400,
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 20,
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
