import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
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

  
const ButtKategor1 = ({kateteButt, searchChanged, movie, movieT, movogore, brah }: any ) => {
  return(
    <TouchableOpacity
     style={(movogore == kateteButt) ? styles.knok2 : styles.knok} 
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
    
const styles = StyleSheet.create({
    
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
  textTimmy:{
    fontSize: 15,
    color:'#000'
  },
  textTimmy2:{
    fontSize: 15,
    color:'#fff'
  }
})

