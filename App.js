import React from 'react';

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
StyleSheet,
} from 'react-native';

import {Home} from './screens'


const App = () => {

  const theme = {
    ...DefaultTheme,
    color:{
      ...DefaultTheme.colors,
      border: "transparent"
    }
  }

  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
