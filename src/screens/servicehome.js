import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';
import CustomHeader from '../components/header';
import Icon from "react-native-vector-icons/Ionicons";
import Box  from '../components/servicebookbox';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




export const Servicehome = ({ navigation }) => {
    


    


   

    return (

        <View style={{flexDirection: "column"}}>
        <View style={styles.navbar}>

                    <View style={styles.textnav}>
                        <View style={styles.navtext}>
                            <Text style={styles.navigate}>Hello,</Text>
                           

                        </View>
                        <View style={styles.profile}>
                            <TouchableOpacity onPress={()=>navigation.push("Profile")}>

                                <Icon
                                    name='md-person-circle-outline'
                                    size="small"
                                    style={{
                                        color: 'white',
                                        fontSize: 50,



                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                   


                    </View>


                    <Box image ={require('../../assets/images/profile.jpg')} text='Jake Peralta' text1='Cleaning' id='#123455' /> 
                    </View>
    );
};

const styles = StyleSheet.create({

    navbar: {
        backgroundColor: '#6E6BE8',
        width: width,
        height: height / 6,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'column',
    
    },

    testbox: {
        backgroundColor: '#b09cc8',
        width: width/1.1,
        height: height/4,
        marginBottom: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
      
    },

    testimonial:{
       
        alignItems: 'center',
alignContent: 'space-between',
flexDirection: 'column',
    },


    texttest: {

        fontSize: 30,
        color: '#583EF2',
        fontWeight: "700",
    },
    all: {


        borderRadius: 20,
        borderColor: '#EAEAFF',
        color: 'red',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,


    },





    textnav: {
        flexDirection: 'row',

    },

    navigate: {
        color: 'white',
        fontSize: 30,
        left: width / 12,
        top: height / 17,
    },

    contentContainer: {
        paddingVertical: 20
    },

    navigatesec: {
        color: 'white',
        left: width / 12,
        top: height / 19,
        fontSize: 20,
    },
    navtext: {
        flexDirection: 'column',
        flex: 2,
    },
    containers: {
        flex: 1,


    },


    but: {

        backgroundColor: '#EAEAFF',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: 'red',
        alignItems: 'center',
        width: width / 2.3,
        height: height / 10,
        top: height / 6,
        left: width / 18,
    },

    button: {
        alignItems: 'center',
        fontSize: 18,
        textAlign: 'center',
        color: 'red',
        fontWeight: "500",
        top: 15,
    },

    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: height / 5,
        width: width / 4,
    },

    grid: {
        top: height / 17,
        flexDirection: 'column',
        flex: 2 / 3,

    }





});