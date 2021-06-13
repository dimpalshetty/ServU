import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import dimps from '../../assets/images/dimps.jpg';


const Bookbox= ({image, text}) => {
return(
  
  <TouchableOpacity>
  <View style={{flexDirection: 'row'}}>
  <Image style={{height: 25, width: 50,}} source= {image.Image}  />
  <Text> {text} </Text>

  



  </View>
</TouchableOpacity>
        );
}


const styles = StyleSheet.create({

  
    button: {
      alignItems: 'center',
      fontSize: 18,
      textAlign: 'center',
      color: 'red',
      fontWeight: "500",
      top: 15,
    },

    login:{
      color: '#46369F',
      fontWeight: "800",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
    }
 
  

  
});

export default Bookbox;