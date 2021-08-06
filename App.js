
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingPage } from './src/screens/landing';
import { HomePage } from './src/screens/HomePage';
import { Profile } from './src/screens/profile';
import { SignUpPage } from './src/screens/SignUp';
import { Booking } from './src/screens/Booking';
import { SelectWorker } from './src/screens/SelectWorker';
import { WorkerProfile } from './src/screens/WorkerProfile';
import { SignInPage } from './src/screens/SignIn';
import { BookingDetails } from './src/screens/BookingDetails';
import { Notifications } from './src/screens/Notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';




const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      
      <AuthStack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }} />
      <AuthStack.Screen name="SelectWorker" component={SelectWorker} options={{ headerShown: false }} />
      <AuthStack.Screen name="WorkerProfile" component={WorkerProfile} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
      <AuthStack.Screen name="HomePage" component={HomeStack} options={{ headerShown: false }} />
      <AuthStack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
      <AuthStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <AuthStack.Screen name="BookingDetails" component={BookingDetails} options={{ headerShown: false }} />
      <AuthStack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />








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
        } else if (route.name === 'Booking') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline';
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
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Chat" component={LandingPage} />
      <Tab.Screen name="Notifications" component={Notifications} />

      {/* <Tab.Screen name="Settings" component={Settings} /> */}
      
    </Tab.Navigator>
    
  );
}