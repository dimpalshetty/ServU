import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,

} from 'react-native';


import PrpleBtn from '../components/purplebutton';
import work from '../../assets/images/work.png';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




const ScreenContainer = ({ children }) => (
  <View style={styles.containers}>{children}</View>
);

export const LandingPage = ({ navigation }) => {

  return (
    <ScreenContainer>
      <View>





        <Image
          style={{
            width: width / 1.25,
            top: height / 7,
            height: height / 2,
            left: width / 9,
          }}
          source={work} />

        <Text style={styles.welcome}>ServU</Text>
        <Text style={styles.tagline}>Service At Your Doorstep!</Text>

      </View>







      <View style>

        <TouchableOpacity>

          <View style={styles.but}>
            <PrpleBtn text='Log In' title="Login" color='#46369F' style={styles.button} onPress={() => navigation.push("SignIn")} >

            </PrpleBtn>

          </View>
        </TouchableOpacity>

        <TouchableOpacity>

          <View style={styles.but1}>
            <PrpleBtn text='Sign Up' color='#ffffff' title="Login" style={styles.button} onPress={() => navigation.push("SignUpPage")} >

            </PrpleBtn>

          </View>
        </TouchableOpacity>




      </View>



    </ScreenContainer>
  );

};



const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  welcome: {
    fontSize: 90,

    fontFamily: 'Futura',
    left: width / 6,
    top: height / 15,
    color: '#46369F',


  },
  but: {

    backgroundColor: '#EAEAFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'red',
    alignItems: 'center',
    width: width / 2.3,
    height: height / 10,
    top: height / 6,
    left: width / 18,
  },

  button: {
    alignItems: 'center',
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    fontWeight: "500",
    top: 15,
  },
  but1: {

    backgroundColor: '#583EF2',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'red',
    alignItems: 'center',
    width: width / 2.3,
    height: height / 10,
    top: height / 15,
    left: width / 1.9,
  },

  tagline: {
    color: '#6E6BE8',
    left: width / 4,
    top: height / 17,
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 15

  }



});