import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    image: {
      flex: 1,
      justifyContent: 'center',
      height: null,
      width: null,
    },  

    but: {
      elevation: 2,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
      color: '#F4F3FC',
      alignItems: 'center',
    },
  
    button: {
      alignItems: 'center',
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      color: '#5D5AD9',
      fontWeight: "500",
      top: 15,
    },
  
    butt: {
      fontFamily: "Montserrat",
      color: '#3573CF',
      fontWeight: "500",
      fontSize: 18,
    },
  
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: "700",
      fontFamily: "Montserrat",
      marginTop: -10,
      paddingLeft: 15,
    },
  
    texts: {
      color: 'white',
      fontSize: 16,
      fontWeight: "400",
      paddingTop: 15,
      paddingLeft: 14,
      paddingBottom: 60,
      marginBottom: -15,
    },
  
    text: {
      color: '#97D5FE',
      fontSize: 76,
      fontWeight: "700",
  
      height: 300,
      lineHeight: 90,
      fontFamily: 'Futura',
      paddingLeft: 60,
      paddingTop: 90,
      paddingRight: 0,
    },
    containers: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
      
    },
  
     header: {
      flex: 2,
      justifyContent: 'center',

    },
    footer: {
      
      backgroundColor: '#3573CF',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    container: {
      flex: 1,
    
    },
   
    image2:{
      width:'100%',
      marginLeft: '-20',

    },
    bg:{
      flex: 1,
    },
    images: {
      flex: 2,
      width: '100%',
      height: '100%',
      resizeMode: "stretch",
      justifyContent: "center"
    },

    Signtext:{
      color: "white",
      fontSize: 36,
      fontWeight: "600",
      fontFamily: 'Montserrat',
      width: 177,
      height:390,
      left: 45,
      top: 90,
      

    },

    inputBoxa: {
      flex:0, 
      justifyContent: 'center', alignItems:'center',
      top: -90,
     
    },
    inputBoxb: {
      flex:0, 
      justifyContent: 'center', alignItems:'center',
      top: -80,
  

    },
    signin: {
      top: -50,
      left: 40,
    },

    signintext: {
      color: "#4285F4",
      fontFamily: "Montserrat",
      fontSize: 31,
      fontWeight: "700",
      lineHeight: 37,
    },

    
    arrow: {
      left: 260,
      top: -95,
    },
    forgotpassword: {
      top: -105,
      left: 40,
      color: '#A49D9D',
      fontWeight: "500",
      

    },

    google: {

      borderRadius:25,
      paddingBottom: 20,
      paddingTop: 25,
      alignItems:'center',
      paddingLeft: 70,
      paddingRight: 70,
      backgroundColor: '#FFFFFF',
      shadowColor: 'black',
      borderColor: '#97D5FE',
      borderWidth: 1,
      shadowOpacity: 0.3,
      width: 30,
      elevation: 8,
      shadowRadius: 8 ,
      shadowOffset : { width: 3, height: 13},
      top: -70,
      left: 40,


    },

    facebook: {

      borderRadius:25,
      paddingBottom: 23,
      paddingTop: 25,
      alignItems:'center',
      paddingLeft: 70,
      paddingRight: 70,
      backgroundColor: '#FFFFFF',
      shadowColor: 'black',
      borderColor: '#97D5FE',
      borderWidth: 1,
      shadowOpacity: 0.3,
      width: 30,
      elevation: 8,
      shadowRadius: 8 ,
      shadowOffset : { width: 3, height: 13},
      top: -150,
      left: 200,
    }
, 
donthave:{

  top: 3,
  left: 4,
  color: '#4285F4',
  fontWeight: "700",

    },

    donthaveacc:{

      top: -100,
      alignItems: "center",
     
    },

    grey: {
      color: "#A49D9D",
      fontWeight: "500",

    },

    
   

   
  });