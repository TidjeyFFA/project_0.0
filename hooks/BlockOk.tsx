import React, {useState} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import { StyleSheet, Pressable, TouchableOpacity, Modal, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FilterSk from '../screens/FilterScreen'
import FFF from '../screens/FilterScreen'
import {BattFil} from '../hooks/DATA'
// import FFF from '../hooks/DATA'

//       https://snack.expo.io/@tidjey/a7248e


let fillHuman = 0; 
let fillTime = 0;
let fillKategor = '';
// const [selectedId, setSelectedId] = useState(null);
// () => setBorro(0)
 
function TabTab({ path, number}: { path: any , number: any}) {
  // const backgroundColor = TabTab.number === selectedId ? "#6e3b6e" : "#f9c2ff";
  
 const [filterButt, setFilterButt] = useState(0);


 fillHuman = filterButt;
  // const [borro, setBorro] = useState(0);
    return (
        <TouchableOpacity 
        onPress={() => {
          setFilterButt((current) => current = path);
        }}
         style={styles.knok} 
         >
          <Text style={styles.textTimmy}>до {path}</Text>
        </TouchableOpacity>
    ); 
  } 
  
  function TobTob({ path, time}: { path: any, time: any }) {
    
 const [filterButt, setFilterButt] = useState(0);
 
 fillTime = filterButt;
      return (
          <TouchableOpacity 
          onPress={() => {
            setFilterButt((current) => current = time);
          }}
           style={styles.knok}>
            <Text style={styles.textTimmy}>до {path} мин</Text>
          </TouchableOpacity>
      );
    }
    function TebTeb({ path, time}: { path: any, time: any }) {
      
 const [filterButt, setFilterButt] = useState(0);
 fillTime = filterButt;
 
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

// export default function BlockOk({ path }: { path: string }) {
//     return (
//       <View style={{width: '90%', backgroundColor: '#000', }}>
//       <View style={styles.container}>
//       <Text style={{fontSize: 32, fontWeight: "bold" }}>Подобрать игру</Text>
//       <View style={styles.gg}>
//       </View>
//       <Text style={{fontSize: 20, fontWeight: "600", marginTop: 10, }}>Количество человек в группе</Text>
//       <View style={styles.gg}>
//           <TabTab path='8'/>
//           <TabTab path='16'/>
//           <TabTab path='32'/>
//           <TabTab path='64'/>
//       </View>
//       <View style={styles.gg}>
//           <TabTab path='128'/>
//           <TabTab path='256'/>
//           <TabTab path='512'/>
//       </View>
//       <Text style={{fontSize: 20, fontWeight: "600",  marginTop: 10,  }}>Время на игру</Text>
//       <View style={styles.gg}>
//           <TobTob path='10'/>
//           <TobTob path='30'/>
//           <TebTeb path='1'/>
//       </View>
//       <View style={styles.gg}>
//           <TebTeb path='2'/>
//           <TebTeb path='3+'/>
//       </View>
//       <Text style={{fontSize: 20, fontWeight: "600", marginTop: 10,  }}>Категория</Text>
//       <View style={styles.gg}>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Универсальные</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Знакомства</Text>
//           </TouchableOpacity>
//       </View>
//       <View style={styles.gg}>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Эмоциональная разгрузка</Text>
//           </TouchableOpacity>
//       </View>
//       <View style={styles.gg}>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Командообразование</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Тактильные</Text>
//           </TouchableOpacity>
//       </View>
//       <View style={styles.gg}>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Интерактивные</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.knok}>
//             <Text style={styles.textTimmy}>Психологические</Text>
//           </TouchableOpacity>
//       </View>
//     </View>
//     </View>
//     )};
  
{/* <TouchableOpacity
style={[styles.button, styles.buttonOpen]}
onPress={() => setModalVisible(true)}
>
<Text style={styles.textStyle}>Оформить предзааказ</Text>
</TouchableOpacity>     */}
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

// class ButtFillOne extends React.Component {
//   render() {
//     return(
//       <TouchableOpacity onPress={() => navigation.replace('NotFound')} style={{backgroundColor: '#000'}}>
//       <Text style={{color:'#fff'}}>NotFound</Text>
//   </TouchableOpacity>
//       <TouchableOpacity
//       onPress={() =>
//       this.props.navigation.navigate('FilterSk')
//       }
//       />
//     )
//   }
// }

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
       <View style={styles.gg}>
       </View>
       <Text>{fillHuman}</Text>  
       {/* <Text>{borroo}</Text> */}
       <Text style={{fontSize: 20, fontWeight: "600", marginTop: 0, }}>Количество человек в группе</Text>
       <View style={styles.gg}>
         
           <TabTab path={8} number={1} 
        // extraData={selectedId}
        />
           <TabTab path={16} number={2}/>
           <TabTab path={32} number={3}/>
           <TabTab path={64} number={4}/>
       </View>
       <View style={styles.gg}>
           <TabTab path={128} number={5} />
           <TabTab path={256} number={6}/>
           <TabTab path={512} number={7}/>
       </View>
       <Text style={{fontSize: 20, fontWeight: "600",  marginTop: 10,  }}>Время на игру</Text>
       <Text>{fillTime}</Text>  
       <View style={styles.gg}>
           <TobTob path={10} time={10}/>
           <TobTob path={30} time={30}/>
           <TebTeb path={1} time={60}/>
       </View> 
       <View style={styles.gg}>
           <TebTeb path={2} time={120}/>
           <TebTeb path={3} time={180}/>
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
