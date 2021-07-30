import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';

import styles from "../../styles";

import CustomHeader from "../components/header";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);


export const Chats = () => {
    
  

    return (

        <View style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>

<CustomHeader title="Chats"/>

            



        </View>


    );
};


const styless = StyleSheet.create({


    navbarr: {

        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
        paddingTop: 5,






    },

    booking: {
        color: '#46369F',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '800',
        fontSize: 18,
        marginTop: 10,

    },

});


