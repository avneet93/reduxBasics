import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
// import {configureStore} from '@reduxjs/toolkit'
// import reducers from './redux/reducers';
import MainStack from './src/navigation/MainStack';
import store from './src/redux/store';

// const store = configureStore({
//   reducer: reducers
// })
const {dispatch} = store;
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
