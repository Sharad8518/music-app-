/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Home from './Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Screen/Search';
import Download from './Screen/Download';
import Favourite from './Screen/Favourite';
import PlayScreen from './Screen/PlayScreen';
import Myscreen from './Screen/Myscreen';




const Tab = createBottomTabNavigator();
const App =()=>{

  return (
    
   
   <NavigationContainer >
      <Tab.Navigator   screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle:{
                  backgroundColor:'#000',
                  height:60,
                  borderTopEndRadius:20,
                  borderTopStartRadius:20,
                  position:"absolute",
                  borderTopColor:"#000"
                },
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused ? 'home': 'home';
                  } else if (route.name === 'Search') {
                    iconName = focused ? 'search' : 'search';
                  }else if (route.name === 'PlayScreen') {
                    iconName = focused ? 'music' : 'music';
                  }else if (route.name === 'Favourite') {
                    iconName = focused ? 'heart' : 'heart';
                  }
                
                  // You can return any component that you like here!
                  return(
                     <Feather name={iconName} size={size} color={color} />
              
                  ) 
                },
                tabBarActiveTintColor: '#ECCC68',
                tabBarInactiveTintColor: 'gray',

              })}>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={Search}  options={{headerShown:false}}/>
        <Tab.Screen name="PlayScreen" component={PlayScreen}  options={{headerShown:false}}/>
        <Tab.Screen name="Favourite" component={Favourite}options={{headerShown:false}}/>
      
      </Tab.Navigator>
    </NavigationContainer>

  
    
  );
};

const styles = StyleSheet.create({
  header:{
    flex:1,
 
   backgroundColor:"#383434",
 
  },
  

});

export default App;
