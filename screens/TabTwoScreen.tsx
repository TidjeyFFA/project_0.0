import React, { useState } from "react";
import { StyleSheet, Pressable, Alert, Modal, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
    opacity: 1, width:'100%', 
    height: 60, /*backgroundColor:'#000'*/}}>
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
                <Text style={{fontSize: 32, fontWeight: "bold" }}>Подобрать игру</Text>
                <View style={styles.gg}>
                </View>
                <Text style={{fontSize: 20, fontWeight: "600", marginTop: 20, }}>Количество человек в группе</Text>
                <View style={styles.gg}>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 32</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 64</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gg}>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 128</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 256</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 512</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 20, fontWeight: "600",  marginTop: 20,  }}>Время на игру</Text>
                <View style={styles.gg}>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 10 мин</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 30 мин</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 1 часа</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gg}>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 2 xfcjd</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.knok}>
                      <Text style={styles.textTimmy}>до 3+ часа</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 20, fontWeight: "600", marginTop: 20,  }}>Категория</Text>
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
          </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  centeredView: {
    // backgroundColor: "#EE00EE",
    flex: 1,
    justifyContent: "center",
    opacity: 400,
    alignItems: "center",
  },
  modalView: {
    // backgroundColor: "#EC3B00",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
