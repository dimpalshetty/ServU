import React from 'react'
import { Text, View,  Dimensions, StyleSheet,TouchableOpacity } from 'react-native'


const width = Dimensions.get('window').width


const Button = ({ text,color }) => {
  return (<TouchableOpacity style={[styles.btnContainerStyle]}>
      <View >
        <Text style={[styles.btnTextStyle,color && {color}]}> {text} </Text>
      </View>
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
      width:width/1.35,
      backgroundColor :'#583ef2',
    borderRadius:15,
    height:56,
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10
  },
  btnTextStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})

export default Button