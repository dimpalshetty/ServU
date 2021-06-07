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
  import styles from '../../styles';
  import PrpleBtn from '../components/purplebutton';
  import worker from '../../assets/images/worker.png';

  const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
  );

  export const LandingPage= ({navigation}) => {
      return(
        <ScreenContainer>
        <View style={styles.container}>
        <View>

       
        
        <TouchableOpacity
   style={{
       borderWidth:0,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:410,
       top: 45,
       height:410,
       backgroundColor:'#EAEAFF',
       opacity: 5,
       borderRadius:130,
     }}
 >

<Image 
        style={{width: 500, 
        top: 25,
        height: 500
        }}
        source={worker} />

 </TouchableOpacity>
 
          
        
        
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
        
        </View>
    

    </ScreenContainer>
      );
  };