import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { connect, } from 'react-redux'
import { searchChanged } from '../hooks/actions'
import { RootState } from '../hooks/reducers';


let battonHumm = 0


const ButtHuman1 = ({numberBatt, searchChanged, movie, movieT, movogore, brah}:any ) => {
const [asasas, setasasas] = useState(0);
const [fdfdfd, setfdfdfd] = useState(0);
 const backgroundColorr = movie == numberBatt ? styles.knok2 : styles.knok;
  return(
    <TouchableOpacity
     style={backgroundColorr}
    //  style={styles.knok}
    onPress={() => {
      if(numberBatt==movie) {
        searchChanged(0, movieT, movogore, brah)
      } else {
      searchChanged(numberBatt, movieT, movogore, brah)}
      }}>
        <Text style={movie == numberBatt ? styles.textTimmy2 : styles.textTimmy}>до {numberBatt}</Text>
    </TouchableOpacity>
  )
}




const ButtTime1 = ({timeBatt, searchChanged, movie, movieT, movogore, brah}: any ) => {
    return(
      <TouchableOpacity
       style={movieT == timeBatt ? styles.knok2 : styles.knok} 
      onPress={() => {
        if(timeBatt==movieT) {
          searchChanged(movie, 0, movogore, brah)
        } else {
        searchChanged(movie, timeBatt, movogore, brah)}
                }}>
          <Text style={movieT == timeBatt ? styles.textTimmy2 : styles.textTimmy}>до {timeBatt}</Text>
      </TouchableOpacity>
    )
  }

  
const ButtKategor1 = ({kateteButt, searchChanged, movie, movieT, movogore, brah, popolo }: any ) => {
  return(
    ((movogore==''||movogore=='Универсальные')&&popolo==1)?
    <View></View>
    :
    <TouchableOpacity
     style={(popolo==1)? styles.knok3 : (movogore == kateteButt) ? styles.knok2 : styles.knok} 
    onPress={() => {
      if(popolo==1) {} else { 
      if(kateteButt==movogore) {
        searchChanged(movie, movieT, '', brah)
      } else if(popolo==0 || popolo==2) {
      searchChanged(movie, movieT, kateteButt, brah)
    }
              }}}>
        <Text style={movogore == kateteButt ? styles.textTimmy2 : styles.textTimmy}>{kateteButt}</Text>
    </TouchableOpacity>
  )
}

function ImageKategore(iimages: any) {
  
if(iimages==1) {
  return(
  require('../img/imageChubr/universal.png')
)} else if(iimages==2) {
  return(
  require('../img/imageChubr/dating.png')
)} else if( iimages==3 ) {
  return(
require('../img/imageChubr/emotionalrelief.png')
)} else if( iimages==4 ) {
  return(
  require('../img/imageChubr/teambuilding.png')
)} else if(  iimages==5 ) {
  return(
  require('../img/imageChubr/tactile.png')
)} else if( iimages==6 ) {
  return(
  require('../img/imageChubr/interactive.png')
)} else if( iimages==7 ) {
  return(
  require('../img/imageChubr/psychological.png')
)} else {
  return(
  
 require('../img/F.png')
)}
 

  // return()
  
 
  
  
}
const ButtKategorForOnescreen1 = ({ navigation, kateteButt, iimages, searchChanged, movie, movieT, movogore, brah, popolo }: any ) => {
//  const yyyyy 
  // const iimage = (iimages==1)?
  //             : (iimages==2)?<Image style={{width: 287, height: 197,  marginRight: 10, marginLeft: 10,}}
  //             source={yyyyy}
  //          />:<Image style={{width: 287, height: 197,  marginRight: 10, marginLeft: 10,}}
  //          source={require('../img/F.png')}
  //       />
  return(
    <TouchableOpacity
      style={{
        backgroundColor: '#F9F6F4',
        // backgroundColor: 'green',
        width: '85%',
        // flexDirection:'row',
        // height: 94,
        marginTop:20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        searchChanged(movie, movieT, kateteButt, brah)
        navigation.navigate('FilterSk')
      }
      
    }>
                <Image style={{width: 287, height: 197,  marginRight: 10, marginLeft: 10,}}
                 source={ImageKategore(iimages)}
              />
        <Text style={{
    fontSize: 28,
    width: '85%',
    color:'#000',
    marginBottom: 15.,
    // fontWeight:'bold',
    }}>{kateteButt}</Text>
    </TouchableOpacity>
  )
}


  // movogore
  
const mapStateToProps = (state: RootState) => {
  return  { 
    movie: state.search.movie,
    movieT: state.search.movieT,
    movogore: state.search.movogore,
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    searchChanged: (numberHuman: number, numberTime: any, kategory: any, brah: any ) => dispatch( searchChanged( numberHuman, numberTime, kategory, brah) ),
  }
}


export const ButtHuman = connect(mapStateToProps, dispatchStateToProps )(ButtHuman1 )
export const ButtTime = connect(mapStateToProps, dispatchStateToProps )(ButtTime1 )
export const ButtKategor = connect(mapStateToProps, dispatchStateToProps )(ButtKategor1 )
export const ButtKategorForOnescreen = connect(mapStateToProps, dispatchStateToProps )(ButtKategorForOnescreen1 )
    
const styles = StyleSheet.create({
    
  knok:{
    backgroundColor: '#F9F6F4', 
    marginTop: 5,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal:  8,
  },
  knok2:{
    backgroundColor: '#2B67F6', 
    marginTop: 5,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal:  8,
  },
  knok3:{
    // flex: 3,
    backgroundColor: '#2B67F6', 
    marginTop: 5,
    marginBottom: 5,
    marginRight: 8,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal:  8,
  },
  textTimmy:{
    fontSize: 15,
    color:'#000',
    // marginBottom: 5,
  },
  textTimmy2:{
    fontSize: 15,
    color:'#fff'
  }
})

