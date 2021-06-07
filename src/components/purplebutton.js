import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';


const PrpleBtn= ({text,color}) => {
return(
  <TouchableOpacity 
  style={styles.button} >
          <Text style=
          {[styles.login,
          color && {color}
          ]} > {text} </Text>
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

export default PrpleBtn;