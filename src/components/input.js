import React from 'react'
import { Text, View,  Dimensions, StyleSheet, TextInput } from 'react-native'


const width = Dimensions.get('window').width


const InputText = ({ text,placeholder,type }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}> {text} </Text>
        <TextInput style={styles.TextInput}placeholder={placeholder}/>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.25,
    height:70,
    alignItems:'flex-start',
    justifyContent:"center",
    padding:8
},
  title: {
    color: 'black',
    fontWeight:'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  TextInput:{
      borderBottomWidth:1,
      width:width/1.35,
  }
})

export default InputText