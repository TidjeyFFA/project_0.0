import { StackScreenProps } from '@react-navigation/stack';
import React, {useState, useEffect, } from 'react';
import { StyleSheet, Dimensions, Modal, FlatList, Text,  BackHandler,  TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { DATA } from '../hooks/DATA';
import FilterBlokOk from '../components/FilterBlokOk'
import { RootStackParamList } from '../types';
import BlockOk from '../hooks/BlockOk'
import { createStore, } from 'redux'
import { connect, } from 'react-redux';
import { searchChanged } from '../hooks/actions'
import { getStateFromPath } from '@react-navigation/core';
import { RootState } from '../hooks/reducers';
import { ButtHuman, ButtTime, ButtKategor } from '../store/index';
import { id_massplus, arrayLikePlus, arrayLikeMinus } from '../hooks/actions';

import { MaterialCommunityIcons, Entypo,  AntDesign } from '@expo/vector-icons'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
let deviceHeightHalf = deviceHeight/2

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
    const BottomLike =  ( arrayLike.some(function(e: any){return e.id == id }) ) ? 
      
      <TouchableOpacity style={{backgroundColor: '#FF000000'}} onPress={()=> {
        arrayLikeMinus(id,) ,
        setCheckLike(false)
        }}>
        <AntDesign name="heart" size={30} color="#FF8C39" />
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
        <AntDesign name="hearto" size={30} color="black" />
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
        
        id_masspus(
          id,
          name,
          detailed,
          number,  
          human,
          kategore,
          min,
          mindo,)
        // id_masspus( id,  name )
        }
      }
      style={[
        styles.item3,
      ]}
    >
      <View style={{ width: '90%', flexDirection:'row', justifyContent: 'space-between' ,  backgroundColor: '#EE16D300' }}>
     
          
      <View style={{ backgroundColor: '#00000000'}}>
      </View>
      </View>
      <View style={{width:'88%', backgroundColor: '#FF000000'}}>
        
        <Text style={{fontSize: 28, fontWeight:'bold', marginTop: 5, marginBottom: 5 }}>{name}</Text>
      {/* <View style={{ flexDirection:'row',  backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>
       <Text style={styles.title}>{title}</Text>
      </View>                    */}
    <View style={{ flexDirection:'row',  backgroundColor: '#FF000000' }}>
      
      <Text style={{  fontSize: 15,  color: '#000000',  }}>{detailed}</Text>
    </View>
  
  
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
                  backgroundColor: 'green', 
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



export function FFF(props: number) {
  const [borro, setBorro] = useState(0);

}

  const fdf = '0';
function FilterScreen( 
  { navigation, arrayLike, searchChanged, movie, movieT, movogore, brah , 
    id_massplus,
    arrayLikePlus,
    arrayLikeMinus, }
  : StackScreenProps<RootStackParamList, 'FilterSk'>,
  ) {
    const props = {}
    // const { movie } = props
    // const { movie } = props;     

  // console.log('thise props', props);
  
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

  let movieTTT = () => {if(movie>1) {return(movie)} else {return(0)} }

  return (
      <View style={{backgroundColor: '#fff', flex: 1, /* marginTop: 50, */ }}>
          <FlatList
        data= {DATA.filter(DATA => 
          DATA.human > movie 
          && 
          DATA.min > movieT 
          && 
          DATA.kategore == movogore  || movogore == ''
          )  }     
        ListHeaderComponent={
          // DATA.some(function(e: any){return e.kategore == movogore }) 
          <View style={{width: '100%', alignItems: 'center'}}>
          {/* <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{  marginTop: 50, height:40, width: 80, backgroundColor: '#000'}}>
              <Text style={{color:'#fff'}}>NotFound</Text>
          </TouchableOpacity> */}
          <View style={{flexDirection:'row', width: '90%',  alignItems: 'center',  marginTop: 50, backgroundColor: '#FF000000'}}>
            <BlockOk icone = {0} />
            <ButtKategor kateteButt={movogore} popolo={1}/>
            <ButtKategor kateteButt={'Универсальные'} popolo={2} />
          </View>
          </View> 
        }          
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
  );
}


const mapStateToProps = (state: RootState) => {
  return  { 
    // movie: store.getState 
    movie: state.search.movie,
    movieT: state.search.movieT,
    movogore: state.search.movogore,
    brah: state.search.brah,
    likeked: state.likeds.mass,
    arrayLike: state.likeds.arrayLike,
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    id_massplus: (
      likeked: any,
      names: any,
      detailed: any,
      number: any,  
      human: any,
      kategore: any,
      min: any,
      mindo?: any,
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
    arrayLikeMinus: ( id: any) => dispatch( arrayLikeMinus( id)),
    searchChanged: (numberHuman: number, numberTime: any, kategory: any, brah: any ) => dispatch( searchChanged( numberHuman, numberTime, kategory,) ),
  }
}
export default connect(mapStateToProps, dispatchStateToProps)(FilterScreen);



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
  item3: {
    backgroundColor: '#DCDCDC',
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
});
