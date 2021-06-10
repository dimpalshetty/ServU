import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import quote from '../../assets/images/quote.png';
import house from '../../assets/images/house.png';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ProfilePic= () => {
return(

    <TouchableOpacity style={styles.circle}>


<Image source={house}/>






    </TouchableOpacity>
  

        );
}


const styles = StyleSheet.create({

  
    
    circle: {
        height: 130,
        width: 130,
        borderRadius: 65,
        top: -70,
        right: width / 2,
        left: width / 3,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

  

  
});


export default ProfilePic