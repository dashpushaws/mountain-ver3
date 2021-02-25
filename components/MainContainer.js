import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'
import Class from './Class'
import DomesticMtn from './DomesticMtn'
import ForeignMtn from './ForeignMtn'
import Detail from './Detail'
import Like from './Like'



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}
const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Class" component={Class} options={{title:"Class", headerTitleAlign:"center"}}  />
      <ListStack.Screen name="DomesticMtn" component={DomesticMtn} options={{title:"DomesticMtn", headerTitleAlign:"center"}} />
      <ListStack.Screen name="ForeignMtn" component={ForeignMtn} options={{title:"ForeignMtn", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const LikeStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="Like" component={Like} options={{title:"Like", headerTitleAlign:"center"}} />
    </ListStack.Navigator>
  )
}

export default function Main() {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen} />
            <Tab.Screen name="Like" component={LikeStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home': 
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Like':
        iconName = focused
          ? 'star'
          : 'star-outline'; 
        break;
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const tabBarOptions= {
  activeTintColor: '#66ffff',
  inactiveTintColor: 'black',
}

