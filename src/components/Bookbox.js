import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Bookbox = ({ image, text, text1 }) => {
  return (
    
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.bookno}>
        <View style={styles.boxbox}>
          <Image style={{ height: 75, width: 75, marginLeft: 5,  marginTop: 10, marginBottom: 10, borderRadius: 20, }} source={image} />
          <Text style={styles.booking}> You Have Booked {text} For The Task Of {text1}  </Text>





        </View>
      </TouchableOpacity>
    </View>
    
  );
}


const styles = StyleSheet.create({

  bookno: {

    width: width / 1.1,
    height: height / 7,
    justifyContent: 'space-between',

    alignContent: 'center',
    top: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#78789D',



  },

  boxbox: {
    flexDirection: 'row',
    marginRight: 20,
    width: width / 1.1,
    height: height / 7,
    alignItems: 'center',
  



  },
  booking: {
    fontSize: 18,
    color: 'white',
    fontWeight: "300",
    flexShrink: 1,
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    }




});

export default Bookbox;