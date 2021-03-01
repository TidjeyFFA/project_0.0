import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={{
          width: '80%',
          // height: 100,
          backgroundColor: '#0D1B3D',
          borderRadius: 24,
          alignItems: "center",
          }}>
            
            <Image style={{width: 287, height: 197, margin: 20,}}
              source={require('../img/F.png')}
            />
            <Text style={{color: '#fff', fontSize: 28, textAlign: "center", marginBottom: 20,}}>Найди свою первую {'\n'} игру сегодня</Text>
            
              <TouchableOpacity style={{
                backgroundColor: '#2B67F6',
                width: 287,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 86,
                marginBottom: 20,
                }}>
               <Text style={{fontSize: 17, color: '#fff'}}>Иду искать!</Text>
              </TouchableOpacity>
       </View>
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
});
