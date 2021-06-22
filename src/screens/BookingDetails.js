import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';
import house from '../../assets/images/house.png';
import dimps from '../../assets/images/dimps.jpg';
import SignUpButton from '../../src/components/button';
import Bookbox from '../../src/components/Bookbox';
import ProfilePic from '../../src/components/ProfilePic';
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from 'react-native-elements';
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const BookingDetails = ({ route, navigation }) => {
   const {Id} = route.params;

    return (
        <ScrollView>

            <ScreenContainer style={{ justifyContent: 'center', alignContent: 'center' }}>


                <View style={styless.navbarr}>




                    <TouchableOpacity style={{ padding: 22, paddingTop: 20, flex: 2 / 3 }} onPress={() => navigation.goBack()}>

                        <Icon
                            name='chevron-back-circle-outline'
                            size="small"
                            style={{
                                color: '#46369F',
                                fontSize: 50,



                            }}
                        />
                    </TouchableOpacity>



                    <View style={{ alignContent: 'center', alignItems: 'center', flex: 2 / 3, paddingLeft: width / 15, paddingTop: 30, }}>
                        <Text style={styless.booking}>id is: {Id } </Text>


                    </View>


                </View>


            </ScreenContainer>
        </ScrollView>


    );
};


const styless = StyleSheet.create({


    navbarr: {
     
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',
        paddingTop: 5,
      





    },

    booking: {
        color: '#46369F',
         fontSize: 20, 
         alignContent: 'center',
         justifyContent: 'center',
         left: width/50, 

    }, 

});


export default BookingDetails