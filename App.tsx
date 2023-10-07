import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen1 from './src/Components/Screen1'
import Screen2 from './src/Components/Screen2'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='S1'>
      <Stack.Screen name="S1" component={Screen1} 
      options={{
        headerShown:false
      }}/>
      <Stack.Screen name="S2" component={Screen2}
      options={{
        headerShown:false
      }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
    
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff',
    justifyContent:'center'
  }
})