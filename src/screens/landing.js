import React from "react";
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
  import styles from '../../styles';
  import PrpleBtn from '../components/purplebutton';
  import work from '../../assets/images/work.png';

  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
  );

  export const LandingPage= ({navigation}) => {
      return(
        <ScreenContainer>
        <View style={styles.container}>
        <View>

       
        
     

<Image 
        style={{width: width/1.25, 
        top: height/7,
        height: height/2
        }}
        source={work} />
        </View>

   


 
          
    
        
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