import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,

} from 'react-native';


import work from '../../assets/images/work.png';
import CustomButton from '../../src/components/button';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height





export const LandingPage = ({ navigation }) => {

  return (
      <View style={{ flex: 1,flexDirection:"column",justifyContent:'center',alignItems:'center' }}>
        <View style={{ flex: 1,flexDirection:"column",justifyContent:'center',alignItems:'center' }}>
          <Image
            style={{
              width: width / 1.25,
              height: height / 2,
            }}
            source={work} />

          <Text style={styles.welcome}>ServU</Text>
          <Text style={styles.tagline}>Service At Your Doorstep!</Text>

        </View>

        <View style={{flexDirection:'row',flex:1/4,justifyContent:'space-evenly',width:width}}>
          <CustomButton text='Login' color='#ffff' bgcolor='#BBBBD2' width={width / 2.5} />
          <CustomButton text='Sign Up' color='#FFFF' bgcolor='#583ef2' width={width / 2.5} />

        </View>
      </View>
  );

};



const styles = StyleSheet.create({


  welcome: {
    fontSize: 90,

    fontFamily: 'Futura',
    color: '#46369F',


  },


  tagline: {
    color: '#6E6BE8',
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 15

  }



});