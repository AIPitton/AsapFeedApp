import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Constants from 'expo-constants'
import Create from './Screens/Create'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleDetails from './Screens/ArticleDetails';
import ArticleEdit from './Screens/ArticleEdit';

const Stack = createStackNavigator()
const myStyles = {
  title: "ASAP FEED APP",
  headerTintColor:"black",
  headerStyle: {
    backgroundColor:"#F6E200"
  }
}
function App() {
  return (
    <View style={styles.container}>
    <Stack.Navigator>
      <Stack.Screen name = "Home" component= {Home}
      options = {myStyles}
      />
      <Stack.Screen name = "Create" component= {Create}
      options = {{...myStyles, title:"ASAP FEED APP"}}
      />
      <Stack.Screen name = "Details" component= {ArticleDetails}
      options = {{...myStyles, title:"ASAP FEED APP"}}
      />
      <Stack.Screen name = "Edit" component= {ArticleEdit}
      options = {{...myStyles, title:"Edit"}}
      />
    </Stack.Navigator>
    </View>
  );
}
export default() => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E200',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    color:"black"
  },
});
