import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Header, Card } from "react-native-elements";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SignUpButton from '../../src/components/button';
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/header";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);


export const Notifications = () => {
    
  

    return (

        <View style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>

<CustomHeader title="Notifications"/>

            



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


export default CustomHeader