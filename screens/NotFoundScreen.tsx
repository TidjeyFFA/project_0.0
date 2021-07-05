import { StackScreenProps } from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Alert, StatusBar,} from 'react-native';
import { connect } from 'react-redux';
import { dataRedux } from '../hooks/actions';
import { RootState } from '../hooks/reducers';

import { RootStackParamList } from '../types';

const getGamesDataTableAsObject = async () => {
  
  // Initialize empty array
  let data: any = [];

  // Get a response from google docs
  const response = await axios.get("https://docs.google.com/spreadsheets/d/1tdSmdFhnd_PIR3JP7uD5n65C5mV3roA534pX7KmYO5w/export?format=tsv&id=1tdSmdFhnd_PIR3JP7uD5n65C5mV3roA534pX7KmYO5w&gid=0")

  // Get all the rows from table
  const rows = response.data.split("\n")

  // Get all the data titles from the second row
  const titles = rows[1].split("\t")

  // Parse all the rows starting from the 3rd
  for (let i=2; i < rows.length; i++) {

    // Current row
    const row = rows[i]

    // Get data from the row              /\s+/
    const columns = row.split("\t")
    // Stop when empty row detected
    if (columns[1] != "") {

      // Create empty object
      let item = {}

      // Fill object with data from the columns
      // Use data titles from the second row as keys to the appropriate column
      titles.forEach((label: string, index: number) => item = {...item, [label]: columns[index]})

      // Add item to the array
      data = [...data, item]
    } else break
  }

  // Return array
  return data
}

const NotFoundScreen = ({
  navigation,
  dataRedux
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {

  useEffect(()=> {
    getGamesDataTableAsObject().then(data => {
      dataRedux(data)
    })
  })
  
  return (
    <View style={styles.container}>
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
            <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Root')}>
              <Text style={{fontSize:17, color: '#fff'}}>Продолжить</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ 
          justifyContent: 'center',
          width: '100%',
          marginTop: 50,
          // height:'36%',
          // backgroundColor: 'green',
          alignItems: 'center',
          }}>
            <Image 
            style={{  width: 290, height: 180  }}
            source={require('../img/G.png')}
            />
        </View>
        <View style={{ alignItems:'center'}}>
        </View>
      </View>
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
    // likeked: state.likeds.mass,
    // arrayLike: state.likeds.arrayLike,
    // dataredux: state.dataRedux.dataredux,

  }
}

const dispatchStateToProps = (dispatch: any) => {
  return  { 
    dataRedux: (data:any ) => dispatch( dataRedux( data) ),
  }
}

export default connect( mapStateToProps, dispatchStateToProps )( NotFoundScreen );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
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
    marginTop: 60,
    marginRight: 2,
    marginLeft: 5,
    justifyContent: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 102,
    backgroundColor: '#2B67F6',
    // backgroundColor: 'green',
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
