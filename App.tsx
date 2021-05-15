import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// import store from './store';

// import reducers from './hooks/reducers'
// import ReduxThunk from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

// const store = createStore(reducers, applyMiddleware(ReduxThunk))

//         <Provider store={store}>
// </Provider>
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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
