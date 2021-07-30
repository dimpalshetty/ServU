import React from 'react'
import { Text, View,   StyleSheet,TouchableOpacity } from 'react-native'




const Button = ({ text,color,bgcolor ,width, onPress}) => {
  return (<TouchableOpacity onPress={onPress} style={[styles.btnContainerStyle,bgcolor && {backgroundColor:bgcolor},width && {width}]}>
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
    fontSize: 18,
    fontWeight: "700",
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})

export default Button