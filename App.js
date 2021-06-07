
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LandingPage} from './src/screens/landing';



const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="LandingPage" component={LandingPage}/>
      {/* <AuthStack.Screen name="SignIn" component={SignIn}/> */}
      {/*<AuthStack.Screen name="CreateAccount" component={CreateAccount}/> */}
    </AuthStack.Navigator>
  </NavigationContainer>

)
