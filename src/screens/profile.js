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
import SignUpButton from '../../src/components/button';
import ProfilePic from '../../src/components/ProfilePic';
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from 'react-native-elements';
import styles from "../../styles";
import ion from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const Profile = ({ navigation }) => {

    return (

        <ScreenContainer style={{ justifyContent: 'center', alignContent: 'center' }}>


            <View style={{ flexDirection: 'column' }}>

                <View style={styless.navbarr}>




                    <TouchableOpacity style={{ padding: 20, paddingTop: 30, flex: 1 / 3 }}>

                        <Icon
                            name='chevron-back-circle-outline'
                            size="small"
                            style={{
                                color: 'white',
                                fontSize: 50,



                            }}
                        />
                    </TouchableOpacity>



                    <View style={{ alignContent: 'center', alignItems: 'center', flex: 2 / 3, paddingLeft: width / 15, paddingTop: 37, }}>
                        <Text style={{ color: 'white', fontSize: 30, }}>Profile</Text>


                    </View>


                </View>

                <ProfilePic >
                   
                </ProfilePic>












            </View>


        </ScreenContainer>


    );
};


const styless = StyleSheet.create({

    navbarr: {
        backgroundColor: '#6E6BE8',
        height: height / 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',





    },

    back: {
        padding: 10,
        left: width / 2,
    },

    prof: {
        flexDirection: 'row',
        backgroundColor: 'black',

    },

    circle: {
        height: 130,
        width: 130,
        borderRadius: 65,
        top: -70,
        right: width / 2,
        left: width / 3,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },



    navigate: {
        color: 'black',
        fontSize: 40,



    },

    contentContainer: {
        paddingVertical: 20,
    },

    navigatesec: {
        color: 'white',
        left: width / 12,
        top: height / 19,
        fontSize: 20,
    },
    navtext: {
        flex: 2 / 3,
        left: width / 12,
        backgroundColor: 'black',
        alignItems: 'center',
    },


});


export default Profile