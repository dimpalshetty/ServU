import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Header } from "react-native-elements";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const BookingDetails = ({ route, navigation }) => {
    const { id } = route.params;

    return (
        <ScrollView>

            <ScreenContainer style={{ justifyContent: 'center', alignContent: 'center' }}>

                <Header
                    leftComponent={  <Icon
                        name="chevron-back-circle-outline"
                        size="small"
                        onPress={()=>navigation.goBack()}
                        style={{
                            color: '#46369F',

                            fontSize: RFPercentage(6),



                        }}
                    />  }
                    centerComponent={<Text>{id}</Text>}
                   
                />





            </ScreenContainer>
        </ScrollView>


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
        fontWeight: '800',
        fontSize: 18,
        paddingRight: 20,

    },

});


export default BookingDetails