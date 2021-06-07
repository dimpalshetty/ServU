
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LandingPage} from './src/screens/landing';
import {SignUpPage} from './src/screens/SignUp';




const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
    <AuthStack.Screen name="SignupPage" component={SignUpPage} options={{ headerShown:false }}/>

      <AuthStack.Screen name="LandingPage" component={LandingPage} options={{ headerShown:false }}/>
      {/* <AuthStack.Screen name="SignIn" component={SignIn}/> */}
      {/*<AuthStack.Screen name="CreateAccount" component={CreateAccount}/> */}
    </AuthStack.Navigator>
  </NavigationContainer>

)
