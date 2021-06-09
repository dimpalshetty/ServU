import React from 'react'
import { Text, View,  Dimensions, StyleSheet, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";



const width = Dimensions.get('window').width


const InputText = ({ text,placeholder,type }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}> {text} </Text>
        <View style={styles.inputBox}>
        <Icon style={{paddingHorizontal:5, marginLeft:8}} name="person-outline"></Icon>
        <TextInput style={styles.TextInput}placeholder={placeholder}/>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.5,
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
    borderColor:'#46369F',
      borderBottomWidth:0.5,
      width:width/1.35,
  },
  inputBox:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  }
})

export default InputText