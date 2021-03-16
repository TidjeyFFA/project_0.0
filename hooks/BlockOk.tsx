import React from 'react';
import { StyleSheet, TouchableOpacity,  Text, View} from 'react-native';


function TabTab() {
    return (
        <TouchableOpacity style={styles.knok}>
          <Text style={styles.textTimmy}>olya</Text>
        </TouchableOpacity>
    );
  }

export default function BlockOk({ path }: { path: string }) {
    return (
      <View style={{width: '90%', backgroundColor: '#000', }}>
      <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: "bold" }}>Подобрать игру</Text>
      <View style={styles.gg}>
      </View>
      <Text style={{fontSize: 20, fontWeight: "600", marginTop: 20, }}>Количество человек в группе</Text>
      <View style={styles.gg}>
          <TabTab />
          <TouchableOpacity style={styles.knok}
          >
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
          marginTop: 16,
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
        }
});
