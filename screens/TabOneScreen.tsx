import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import { StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView, Dimensions, RefreshControl} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Entypo,  AntDesign } from '@expo/vector-icons'

import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';
import { 
  DATA, 
  // DATAexcel 
} from '../hooks/DATA'
import { id_massplus, arrayLikePlus, arrayLikeMinus,  } from '../hooks/actions';
import { RootState } from '../hooks/reducers';
import { connect, } from 'react-redux'
import { useLinkProps } from '@react-navigation/native';
import { ButtHuman, ButtTime, ButtKategor, ButtKategorForOnescreen } from '../store/index';


let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height
let deviceHeightHalf = deviceHeight/2

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
  { id, title, name, detailed, number, human, min, mindo, kategore }:
  {id: string, title: string, name: string, detailed: string, number: any, human: any, min: any, mindo: any, kategore: any }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={{alignItems:'center', width:'96%'}}>
    <TouchableOpacity
      onPress={
        () => {
        setModalVisible(true)
        id_massplus(
          id,
          name,
          detailed,
          number,  
          human,
          kategore,
          min,
          mindo,)
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
                  <Text style={{fontSize: 20, }}>{detailed}</Text>
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
      
      // id_massplus(id, name)
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
        <TouchableOpacity onPress={ ()=> setBigDetailed(false)} style={{backgroundColor: '#FF000000', width: 80, height: 30, justifyContent: 'center'}}>
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
      <TouchableOpacity onPress={ ()=> setBigDetailed(true)} style={{backgroundColor: '#FF000000', width: 80, height: 30, justifyContent: 'center'}}>
        <Text style={{color: 'blue'}}>
          скрыть...
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
          
          <Text style={{fontSize: 20, fontWeight:'bold', marginTop: 5 }}>{name}</Text>
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
         <ScrollView style={{flex: 1, height: '100%'}} >
          <View  style={{flex: 1, backgroundColor: '#FF000000', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
       
         <TouchableOpacity  
            onPress={() => setModalVisible(!modalVisible)} 
            style={{
              flex:1, 
              width: '100%',
              height: deviceHeightHalf, 
              backgroundColor: '#00000030',
            }}><Text></Text>
</TouchableOpacity>
<View style={{backgroundColor:'#00000030', width: '100%'}}>
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
            </View>
          </ScrollView>
        </Modal>
        </View>
      </View>
      
    );
}

export function ItemRecent({ 
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
      
      
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setModalVisible(false)
  }
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
      styles.item,
    ]}
  >
    <View style={{   backgroundColor: '#FF000000'}}>
      
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
    <View style={{ backgroundColor: '#FF000000'}}>
    <Entypo name="chevron-thin-right" size={24} color="black" />
        {/* {BottomLike} */}
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
         <ScrollView style={{flex: 1, height: '100%'}} refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />} >
          <View  style={{flex: 1, backgroundColor: '#FF000000', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
       
         <TouchableOpacity  
            onPress={() => setModalVisible(!modalVisible)} 
            style={{
              flex:1, 
              width: '100%',
              height: deviceHeightHalf, 
              backgroundColor: '#00000030',
            }}><Text></Text>
</TouchableOpacity>
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

// это для ,,недавние"
function getRecentBlocks(blocks: Array<any>): Array<any> {
  const recentBlocks = []

  if (blocks.length > 0) 
    recentBlocks.push(blocks[0])
  
  if (blocks.length > 1) 
    recentBlocks.push(blocks[1])

  return recentBlocks
}

function datareduxFun(dataredux: Array<any>): Array<any> {
  const dataredux2 = []
  
  dataredux2.push(dataredux)
  return dataredux2
}

// это для ,,популярные"
function getOneBlockOK(blocks: Array<any>): Array<any> {
  
  let recentBlocks = []

    recentBlocks.push(blocks[1])

  return recentBlocks
}
function getOneBlockNO(blocks: Array<any>): Array<any> {

  return blocks
}


// а это хз
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
  dataredux,
  id_massplus,
  arrayLikePlus,
  arrayLikeMinus,
  arrayLike,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  let DATATA
  // let massive = data.some(o => o.id === 2)
  const Massive = ({id}:any) => {
    if (datareduxFun(dataredux).some(arr => arr.id === id)) {
      return true;
    }
    return false;
  }
  let DADADATA = dataredux
  // const [ getAt, setGetAt] = useState([]);
  // setGetAt( likeked )
  let Gagaga = dataredux[0]
  const [showOrHideSTATE, setShowOrHideSTATE] = useState(true);

  const showOrHide = (showOrHideSTATE) ? 
    <TouchableOpacity onPress={()=>setShowOrHideSTATE(false)} style={{ marginRight: 25, flexDirection:'row' , alignItems: 'flex-end', }}>
      <Text>
        Все {dataredux.length}
      </Text>
    </TouchableOpacity> :
    <TouchableOpacity onPress={()=>setShowOrHideSTATE(true)} style={{ marginRight: 25, flexDirection:'row' , alignItems: 'flex-end', }}>
      <Text>
        Скрыть
      </Text>
    </TouchableOpacity>
    let DaTa: any = []
    // setTimeout(()=> { 
    //   DaTa = DATAexcel
    // }, 5) 
  return (
    //      {likeked.slice( 0, 2 )}     getRecentBlocks(likeked).some(function(e: any){return e.id == DATA.id })
    //       DATA.filter(DATA => getRecentBlocks(likeked).some(function(e: any){return e.id == DATA.id }) )
    // DATA.filter(DATA => getRecentBlocks(likeked).some(function(e: any){return e.id == DATA.id }) )
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
          <View  style={{marginBottom: 30}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft:45}}>Популярные</Text>
              {showOrHide}
            </View> 
       <FlatList
        data={(showOrHideSTATE)?getOneBlockOK(dataredux):getOneBlockNO(dataredux)}
        // style={{alignItems:'center'}}     scrollEnabled= {false}  , backgroundColor: '#FF000030'
        ListFooterComponent={
          <View style={{alignItems: 'center'}}>
            <View style={{width: '100%'}}>
              <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft:45}}>Категории</Text>
            </View>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Универсальные'} iimages={1}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Знакомства'} iimages={2}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Эмоциональная разгрузка'} iimages={3}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Командообразование'} iimages={4}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Тактильные'}  iimages={5}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Интерактивные'}   iimages={6}/>
            <ButtKategorForOnescreen navigation= {navigation }  kateteButt={'Психологические'}  iimages={7}/>
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

        }
        renderItem={({ item }: any) => (
          <ItemRecent
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
    dataredux: state.dataRedux.dataredux,

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
    backgroundColor: '#F9F6F4',
    // backgroundColor: 'green',
    width: '90%',
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 94,
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal:  20,
    // justifyContent: 'center',
  },
  item2: {
    backgroundColor: '#F9F6F4',
    // backgroundColor: 'green',
    width: 360,
    flexDirection:'row',
    height: 94,
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item3: {
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
    width:'100%',
    justifyContent: "center",
    opacity: 400,
    alignItems: "center",
  },
  modalView: {
    // backgroundColor: "#EC3B00",
    borderTopStartRadius : 20,
    borderTopEndRadius : 20,
    // marginTop: deviceHeightHalf,
    width: '100%',
    minHeight : deviceHeightHalf,
    alignItems: "center",
    // alignItems: "flex-end",
    justifyContent: 'flex-start',
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
