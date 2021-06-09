import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import quote from '../../assets/images/quote.png';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Tests= ({text, texxt}) => {
return(


    <View style={styles.testbox}>
<Image style={{paddingTop: 7}}source={quote} />
<Text style={styles.textbox}>{text}</Text>
<Text style={styles.textboxx}>{texxt}
</Text>
</View>
//   <TouchableOpacity 
//   style={styles.button} >
//           <Text style=
//           {[styles.login,
//           color && {color}
//           ]} > {text} </Text>
//         </TouchableOpacity>

        );
}


const styles = StyleSheet.create({

  
    testbox: {
        backgroundColor: '#8f80ed',
        paddingLeft: 8,
        paddingTop: 2,
        width: width/1.1,
        height: height/4,
        marginBottom: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
      
    },

    textbox: {
        color: 'white',
        marginLeft: 20,
        width: width/ 1.6,
        marginTop: 7,
        fontStyle: 'italic',
        fontWeight:  "500",
        paddingTop: 5,
    },

    textboxx: {
       
        fontWeight:  "700",
        top: height/5,
        color: '#583EF2',
       right: width/3,
       paddingTop: 2,
    }
 
  

  
});


export default Tests