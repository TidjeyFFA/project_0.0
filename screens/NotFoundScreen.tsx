import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';

import { RootStackParamList } from '../types';
export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={{}}>
      <View style={{
        flexDirection:'row', }}>
        <Text style={styles.tx}>Начни </Text>
        <Text style={{
          textAlign: 'left',
          color:'#ff8c39',
          fontSize: 38,
          fontWeight:'bold',
          }}>играть </Text>
          <Text style={styles.tx}> с </Text>
      </View>
      <Text style={styles.tx}>детьми в одно{"\n"}нажатие</Text>
      </View>
      <Text style={{fontSize: 17}}>Вы сможете быстро подобрать игру по{"\n"}времени и количесву детей на{"\n"}мероприятие</Text>
      <View style={{backgroundColor:'#fff', width: '100%',}}>
        <View style={{alignItems: 'center',}}>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center' }}>
          <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.replace('Root')}>
           <Text style={{fontSize:17, color: '#fff'}}>Продолжить</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center',}}>
          <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.emptyCartView}>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{
        justifyContent: 'center',
        width: 350,
        alignItems: 'center',
        }}>
          <Image style={{ height: 190, width: 300,}}
          source={require('../img/G.png')}
          />
      </View>
      <View style={{ alignItems:'center'}}>
=======
      <View style={{
        // backgroundColor: 'red', 
        width:'90%'
        }}>
        <View style={{}}>
          <View style={{
            flexDirection:'row', 
            height: 45,
            }}>
            <Text style={styles.tx}>Начни </Text>
            <Text style={{
              textAlign: 'left',
              color:'#ff8c39',
              fontSize: 38,
              fontWeight:'bold',
              }}>играть </Text>
              <Text style={styles.tx}>с </Text>
          </View>
          <View style={{
            height: 45,
            }}>
           <Text style={styles.tx}>детьми в одно</Text>
          </View>
          <View style={{
            height: 45,
            }}>
          <Text style={styles.tx}>нажатие</Text>
          </View>
        </View>
            {/* <Image style={{}}
            source={require('../img/gameAndChildren.png')}
            /> */}
        <Text style={{fontSize: 17, marginTop: 30,}}>Вы сможете быстро подобрать игру по{"\n"}времени и количесву детей на{"\n"}мероприятие</Text>
        <View style={{width: '100%',}}>
          <View style={{alignItems: 'center',}}>
          </View>
          <View style={{justifyContent:'center',  }}>
            <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.replace('Root')}>
              <Text style={{fontSize:17, color: '#fff'}}>Продолжить</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center',}}>
            <View style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.emptyCartView}>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#green',
          alignItems: 'center',
          }}>
            <Image style={{ height: 250, width: '100%',}}
            source={require('../img/G.png')}
            />
        </View>
        <View style={{ alignItems:'center'}}>
        </View>
>>>>>>> aa0e082 (no message)
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
=======
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> aa0e082 (no message)
    padding: 20,
  },
  emptyCartView: {
    flex: 1,
    marginTop: 20,
  },
  tx: {
    textAlign: 'left',
    color:'#000',
    fontSize: 38,
    fontWeight:'bold',
  },
  roundedButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 3,
<<<<<<< HEAD
    marginTop: 50,
    marginRight: 2,
    justifyContent: 'center',
    marginLeft: 5,
=======
    marginTop: 80,
    marginRight: 2,
    marginLeft: 5,
    justifyContent: 'center',
>>>>>>> aa0e082 (no message)
    paddingVertical: 10,
    paddingHorizontal: 102,
    backgroundColor: '#2B67F6',
    borderRadius: 800,
    shadowColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
