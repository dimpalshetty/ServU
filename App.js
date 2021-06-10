
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LandingPage} from './src/screens/landing';
import {HomePage} from './src/screens/HomePage';
import {Profile} from './src/screens/profile';
import {SignUpPage } from './src/screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
    <AuthStack.Screen name="Profile" component={Profile} options={{ headerShown:false }}/>
    <AuthStack.Screen name="HomePage" component={HomeStack} options={{ headerShown:false }}/>
    

    <AuthStack.Screen name="LandingPage" component={LandingPage} options={{ headerShown:false }}/>

    <AuthStack.Screen name="SignupPage" component={SignUpPage} options={{ headerShown:false }}/>
   


    </AuthStack.Navigator>
  </NavigationContainer>

)

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Hi') {
          iconName = focused ? 'chatbubble' : 'chatbubble-outline';
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#583EF2',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Profile" component={SignUpPage} />
      <Tab.Screen name="Hi" component={LandingPage} />
  
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
}