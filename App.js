
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LandingPage} from './src/screens/landing';
import {HomePage} from './src/screens/HomePage';
import {SignUpPage } from './src/screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>

    <AuthStack.Screen name="HomePage" component={HomeStack} options={{ headerShown:false }}/>
    <AuthStack.Screen name="SignupPage" component={SignUpPage} options={{ headerShown:false }}/>

      <AuthStack.Screen name="LandingPage" component={LandingPage} options={{ headerShown:false }}/>

    </AuthStack.Navigator>
  </NavigationContainer>

)

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Profile" component={SignUpPage} />
      <Tab.Screen name="hi" component={SignUpPage} />
      <Tab.Screen name="hey" component={SignUpPage} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
}