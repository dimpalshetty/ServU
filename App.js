
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LandingPage} from './src/screens/landing';
import {HomePage} from './src/screens/HomePage';
import {SignUpPage} from './src/screens/SignUp';




const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>

    <AuthStack.Screen name="HomePage" component={HomePage} options={{ headerShown:false }}/>
    <AuthStack.Screen name="SignupPage" component={SignUpPage} options={{ headerShown:false }}/>

      <AuthStack.Screen name="LandingPage" component={LandingPage} options={{ headerShown:false }}/>

    </AuthStack.Navigator>
  </NavigationContainer>

)