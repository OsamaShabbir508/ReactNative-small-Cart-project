import React from 'react';
import {View, Text} from 'react-native';
import MyTabs from './src/navigation/BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/reducer';


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </Provider>
  );
};
export default App;
