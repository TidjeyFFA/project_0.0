import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import axios from 'axios';
import { connect, } from 'react-redux'
import { dataRedux } from './hooks/actions'
import { RootState } from './hooks/reducers';

// import {DATAexcel} from './hooks/DATA'
// import store from './store';

// import reducers from './hooks/reducers'
// import ReduxThunk from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

// const store = createStore(reducers, applyMiddleware(ReduxThunk))

//         <Provider store={store}>
// </Provider>         


async function GetData2(dataRedux:any) {
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
    console.log('hhhhhhhhh', columns )
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
  dataRedux(data)
  // Return array
  return data

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


export const getData = connect( mapStateToProps, dispatchStateToProps )( GetData2 )

  
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // const getData = async ()=> {
  //   {DATAexcel}
  // }
  useEffect(()=> {
    GetData2()
    console.log('data 3333333333333333')
  })
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <Navigation/>
          <StatusBar />
      </SafeAreaProvider>
    );
  }
}
