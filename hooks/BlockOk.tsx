import React, {useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import { StyleSheet, Pressable, TouchableOpacity, Modal, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FilterSk from '../screens/FilterScreen'
import FFF from '../screens/FilterScreen'
import { ButtHuman, fillHumanPer, ButtTime, fillTimePer, } from '../store/index'
  


    function TebTeb({ path, time}: { path: any, time: any }) {
      
 const [filterButt, setFilterButt] = useState(0);
 
//  fillKategor = filterButt;
        return (
            <TouchableOpacity 
            onPress={() => {
              setFilterButt((current) => current = time);
            }}
             style={styles.knok}>
              <Text style={styles.textTimmy}>до {path} ч.</Text>
            </TouchableOpacity>
        );
      }

function Ragds({stylle}:{stylle: any}) {
  
  // const [modalVisible, setModalVisible] = useState(false);
    if (stylle=='fk'){
      return(
    <Text style={styles.textStyle}>Оформить предзааказ</Text>
)
    } else {
      return(
        <Text style={styles.textStyle}>предзааказ</Text>
  )
    }
  };

export default function BlockFk() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
    <TouchableOpacity
    style={[styles.button, styles.buttonOpen]}
    onPress={() => setModalVisible(true)}
  ><Text style={styles.textStyle}>Оформить предзааказ</Text>
  </TouchableOpacity>
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <ScrollView>
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
        <View style={{width:'90%'}}>
          
       <View style={{width: '90%', backgroundColor: '#000', }}>
       <View style={styles.container}>
       <Text style={{fontSize: 32, fontWeight: "bold" }}>Подобрать игру</Text>
       {/* <Text>{borroo}</Text> */}
       <Text style={{fontSize: 20, fontWeight: "600", marginTop: 0, }}>Количество человек в группе</Text>
       <View style={styles.gg}>
        
           <ButtHuman numberBatt={8} />
         {/* extraData={selectedId} */}
        
           <ButtHuman numberBatt={16} />
           {/* <TabTab path={16} number={2}/> */}
           <ButtHuman numberBatt={32} />
           <ButtHuman numberBatt={64} />
           {/* <TabTab path={32} number={3}/>
           <TabTab path={64} number={4}/> */}
       </View>
       <View style={styles.gg}>
           <ButtHuman numberBatt={128} />
           <ButtHuman numberBatt={256} />
           <ButtHuman numberBatt={512} />
           <ButtHuman numberBatt={1} />
           {/* <TabTab path={128} number={5} />
           <TabTab path={256} number={6}/>
           <TabTab path={512} number={7}/> */}
       </View>
       <Text style={{fontSize: 20, fontWeight: "600",  marginTop: 10,  }}>Время на игру</Text>
       <View style={styles.gg}>
           <ButtTime timeBatt={10}/>
           <ButtTime timeBatt={30}/>
           <ButtTime timeBatt={60}/>
           {/* <TobTob path={30} time={30}/>
           <TebTeb path={1} time={60}/> */}
       </View> 
       <View style={styles.gg}>
           <ButtTime timeBatt={120}/>
           <ButtTime timeBatt={180}/>
           {/* <TebTeb path={2} time={120}/>
           <TebTeb path={3} time={180}/> */}
       </View>
       {/* TebTeb */}
       <Text style={{fontSize: 20, fontWeight: "600", marginTop: 10,  }}>Категория</Text>
       <View style={styles.gg}>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Универсальные</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Знакомства</Text>
           </TouchableOpacity>
       </View>
       <View style={styles.gg}>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Эмоциональная разгрузка</Text>
           </TouchableOpacity>
       </View>
       <View style={styles.gg}>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Командообразование</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Тактильные</Text>
           </TouchableOpacity>
       </View>
       <View style={styles.gg}>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Интерактивные</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.knok}>
             <Text style={styles.textTimmy}>Психологические</Text>
           </TouchableOpacity>
       </View>
       {/* <ButtFillOne/> */}
       {/* <BattFil/> */}
     </View>
     </View>
     </View>
      </View>
    </ScrollView>
  </Modal>
</>
)};


const styles = StyleSheet.create({
    container: {
          // justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 8,
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
          marginTop: 10,
          marginBottom: 5,
          marginRight: 8,
          borderRadius: 65,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal:  10,
        },
        textTimmy:{
          fontSize: 15,
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
        modalView: {
          backgroundColor: "#fff",
          // backgroundColor: "#EC3B00",
          // borderRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: 6,
          width: '100%',
          height: '100%',
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
        textStyle: {
          fontSize:17,
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
});
