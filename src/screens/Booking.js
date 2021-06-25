import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';

import Bookbox from '../../src/components/Bookbox';
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);



export const Booking = ({ navigation, props }) => {
    
    

    return (
<ScrollView>
        
        <ScreenContainer style={{ justifyContent: 'center', alignContent: 'center' }}>


            <View style={{ flexDirection: 'column' }}>

                <View style={styless.navbarr}>




                    <TouchableOpacity style={{ padding: 22, paddingTop: 20, flex: 2 / 3 }} onPress={()=>navigation.goBack() }>

                        <Icon
                            name='chevron-back-circle-outline'
                            size="small"
                            style={{
                                color: 'white',
                                fontSize: 50,



                            }}
                        />
                    </TouchableOpacity>



                    <View style={{ alignContent: 'center', alignItems: 'center', flex: 2 / 3, paddingLeft: width / 15, paddingTop: 25, }}>
                        <Text style={{ color: 'white', fontSize: 30, }}>Bookings</Text>


                    </View>


                </View>

                <View style={{flexDirection: 'column'}}>

                <Bookbox image ={require('../../assets/images/profile.jpg')} text='Jake Peralta' text1='Cleaning' id='#123455' />

                </View>













            </View>

          

        </ScreenContainer>
        </ScrollView>


    );
};


const styless = StyleSheet.create({

    navbarr: {
        backgroundColor: '#6E6BE8',
        height: height / 5,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',





    },

    


});


export default Booking