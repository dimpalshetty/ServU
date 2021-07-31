import React from "react";
import { SearchBar } from 'react-native-elements';
import {
    Text,
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,

} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Srch extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <SearchBar inputStyle={{backgroundColor: 'white'}}
      containerStyle={{backgroundColor: 'white', borderWidth: 0, borderColor:'white', borderBottomLeftRadius:15,  borderBottomRightRadius:15, borderTopRightRadius:15, width: width/1.1, height:height/14 }}
      inputContainerStyle= {{backgroundColor: 'white', borderColor:'white', height: height/20}}
      placeholder={'Find it here'}
      lighttheme= {true}
      searchIcon={{color:'#583EF2'}}
      leftIconContainerStyle= {{color: 'blue'}}
  
      
      />
    );
  }
}

const styles = StyleSheet.create({

  
   searchbar:{
       backgroundColor: 'white',
       width: 20,
   },

   
 
  

  
});