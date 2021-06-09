import React from 'react'
import { Text, View,  Dimensions, StyleSheet,TouchableOpacity } from 'react-native'




const Button = ({ text,color,bgcolor ,width}) => {
  return (<TouchableOpacity style={[styles.btnContainerStyle,bgcolor && {backgroundColor:bgcolor},width && {width}]}>
      <View >
        <Text style={[styles.btnTextStyle,color && {color}]}> {text} </Text>
      </View>
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  btnContainerStyle: {
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