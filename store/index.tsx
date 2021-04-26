// import { createStore, compose, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore,  } from 'redux-persist';
// import  {AsyncStorage}  from 'react-native';
// // import redusers from '../redusers';

// const store = createStore(
//     {},
//     compose(
//         applyMiddleware(thunk),
        
//     )
// )

// persistStore(store,{ storage: AsyncStorage, })

// export default store;
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { connect, } from 'react-redux'
import { searchChanged } from '../hooks/actions'
import { RootState } from '../hooks/reducers';

let gord = 0; 
let gort = 0; 
// const [gordd, setGordd] = useState(0);
export let fillHumanPer: number = 0;
export let fillTimePer = 0;
export let pistos = 1;

// const mapStateToProps = function(state: number) {
//   return {
//     profile: state 
//   }
// }
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    _fillHuman: 0,
    _fillTime: 0,
  },
  reducers: {
    incremented: state => {
      
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      gord=state.value
      // setTimeout(handler: () => {gord=state.value}, timeout: 10)

    },
    redfillHuman: state => {state._fillHuman},
    decremented: state => {
      state.value -= 1
      gort=state.value
    },
    fillHuman8: state => {
      state._fillHuman = 8
      {searchChanged(state._fillHuman)}
      fillHumanPer=state._fillHuman
      pistos += 1
    },
    fillHuman16: state => {
      state._fillHuman =16
      fillHumanPer=state._fillHuman
    },
    fillHuman32: state => {
      state._fillHuman =32
      fillHumanPer=state._fillHuman
    },
    fillHuman64: state => {
      state._fillHuman =64
      fillHumanPer=state._fillHuman
    },
    fillHuman128: state => {
      state._fillHuman =128
      fillHumanPer=state._fillHuman
    },
    fillHuman256: state => {
      state._fillHuman =256
      fillHumanPer=state._fillHuman
    },
    fillHuman512: state => {
      state._fillHuman =512
      fillHumanPer=state._fillHuman
    },


    
    fillTime10: state => {
      state._fillTime =10
      fillTimePer=state._fillTime
    },
    fillTime30: state => {
      state._fillTime =30
      fillTimePer=state._fillTime
    },
    fillTime60: state => {
      state._fillTime =60
      fillTimePer=state._fillTime
    },
    fillTime120: state => {
      state._fillTime =120
      fillTimePer=state._fillTime
    },
    fillTime180: state => {
      state._fillTime =180
      fillTimePer=state._fillTime
    },
  }
})

// initialState
// counterSlice
export default counterSlice.caseReducers

// export counterSlice {initialState._fillHuman}
export const { 
  incremented, 
  decremented,  
  fillHuman8,
  fillHuman16,
  fillHuman32,
  fillHuman64,
  fillHuman128,
  fillHuman256,
  fillHuman512,

  fillTime10,
  fillTime30,
  fillTime60,
  fillTime120,
  fillTime180,

}= counterSlice.actions
let battonHumm = 0
const ButtHuman1 = ({numberBatt, searchChanged, movie, movieT }:any ) => {
const [asasas, setasasas] = useState(0);
const [fdfdfd, setfdfdfd] = useState(0);
 const backgroundColorr = movie == numberBatt ? styles.knok2 : styles.knok;
  return(
    <TouchableOpacity
     style={backgroundColorr}
    //  style={styles.knok}
    onPress={() => {
      battonHumm = numberBatt
      // setfdfdfd(fillHumanPer)
      setasasas(numberBatt) 
      searchChanged(numberBatt, movieT)
      /*
      if(numberBatt==8) {
        store.dispatch( fillHuman8())
        searchChanged(8)
        setfdfdfd(8)
        searchChanged(8)
        setasasas(8)
      } else {
        if(numberBatt==16) {
          store.dispatch( fillHuman16())
      setfdfdfd(16)
      searchChanged(16)

        } else {
          if(numberBatt==32) {
            store.dispatch( fillHuman32())
            setfdfdfd(32)
            searchChanged(32)
          } else {
            if(numberBatt==64) {
              store.dispatch( fillHuman64())
              setfdfdfd(64)
              searchChanged(64)
            } else {
              if(numberBatt==128) {
                store.dispatch( fillHuman128())
                setfdfdfd(128)
                searchChanged(128)
              } else {
                if(numberBatt==256) {
                  store.dispatch( fillHuman256())
                  setfdfdfd(256)
                  searchChanged(256)
                } else {
                  if(numberBatt==512) {
                    store.dispatch( fillHuman512())
                    setfdfdfd(512)
                    searchChanged(512)
                  }}}}}}} */
      }}>
        <Text style={styles.textTimmy}>до {numberBatt}</Text>
    </TouchableOpacity>
  )
}




const ButtTime1 = ({timeBatt, searchChanged, movie, movieT}: any ) => {
    return(
      <TouchableOpacity
       style={movieT == timeBatt ? styles.knok2 : styles.knok} 
      onPress={() => {
          
      searchChanged(movie, timeBatt)

        // if(timeBatt==10) {
        //   store.dispatch( fillTime10())
        // } else {
        //   if(timeBatt==30) {
        //     store.dispatch( fillTime30())
        //   } else {
        //     if(timeBatt==60) {
        //       store.dispatch( fillTime60())
        //     } else {
        //       if(timeBatt==120) {
        //         store.dispatch( fillTime120())
        //       } else {
        //         if(timeBatt==180) {
        //           store.dispatch( fillTime180())
        //         }}}}}
                // }
                }}>
          <Text style={styles.textTimmy}>до {timeBatt}</Text>
      </TouchableOpacity>
    )
  }
  
  
const mapStateToProps = (state: RootState) => {
  return  { 
    movie: state.search.movie,
    movieT: state.search.movieT
  }
}
const dispatchStateToProps = (dispatch: any) => {
  return  { 
    searchChanged: (numberHuman: number, numberTime: any ) => dispatch( searchChanged( numberHuman, numberTime ) ),
  }
}


export const ButtHuman = connect(mapStateToProps, dispatchStateToProps )(ButtHuman1 )
export const ButtTime = connect(mapStateToProps, dispatchStateToProps )(ButtTime1 )
// const mapStateToProps = (state: RootState) => {
//   return  { 
//     movie: state.search.movie
//   }
// }
// const dispatchStateToProps = (dispatch: any) => {
//   return  { 
//     searchChanged: (numberHuman: number) => dispatch( searchChanged(numberHuman) ),
//   }
// }


// export const ButtHuman = connect(mapStateToProps, dispatchStateToProps )(ButtHuman1)

      // setghghghgh(prevCount => prevCount = gord)
      
      // store.dispatch( fillHuman8())
    
export function Vivod() {
const [ghghgh, setghghghgh] = useState(0);

  return(
    <View>
    <TouchableOpacity  style={{height: 60, width: 60}}
      onPress={() => {
        setghghghgh(prevCount => prevCount = gord)
        
        store.dispatch(incremented())
      
      }}>
   <Text style={{color:'#000'}}>{ghghgh}</Text>
   {/* <Text style={{color:'#000'}}>{gort}</Text> */}
   </TouchableOpacity>
   </View>
  )
}


// export default connect(mapStateToProps)(FilterScreen);


export const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}


// export default function vivod() {
//   return (
//   <View><Text>ncfd</Text></View>
//   );
// }

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
    backgroundColor: '#FF0000', 
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
})

