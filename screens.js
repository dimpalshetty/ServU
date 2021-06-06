import React from "react";
import {
    Text,
    ImageBackground,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Button,
  
  } from 'react-native';
  import styles from './styles';
  import PrpleBtn from './components/purplebutton';
  import worker from './images/worker.png';

  const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
  );

  export const LandingPage= ({navigation}) => {
      return(
        <ScreenContainer>
        <View style={styles.container}>
        <Image source={worker} /> 
        
        {/* <TouchableOpacity
   style={{
       borderWidth:0,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:400,
       top: 40,
       height:400,
       backgroundColor:'#F4F3FE',
       opacity: 5,
       borderRadius:230,
     }}
 >




 </TouchableOpacity>
 <Image source={worker} />  */}
          
        
        
{/*          
           <View style={styles.but}>
           <PrpleBtn title="Create An Account" style={styles.button} onPress={() => navigation.push("SignIn")} > 
     
  </PrpleBtn>
  </View> */}
  {/* <View>
           <PrpleBtn text="Login To Existing Account" onPress={() => navigation.push("SignIn")}/>
           </View>
           */}
          </View>
        
        
    

    </ScreenContainer>
      );
  };