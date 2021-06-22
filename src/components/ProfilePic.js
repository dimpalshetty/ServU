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
import dimps from '../../assets/images/dimps.jpg';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ProfilePic= () => {
return(

    <TouchableOpacity style={styles.circle}>


<Image style= {{ height: 140,
        width: 140,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderColor: 'black', borderWidth:1,}}source={dimps}/>






    </TouchableOpacity>
  

        );
}


const styles = StyleSheet.create({

  
    
    circle: {
        height: 140,
        width: 140,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,

        backgroundColor: '#583ef2',
        justifyContent: 'center',
        alignItems: 'center',
    },

  

  
});


export default ProfilePic