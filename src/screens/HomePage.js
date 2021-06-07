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
import Ionicons from 'react-native-vector-icons/Ionicons';


import PrpleBtn from '../components/purplebutton';
import work from '../../assets/images/work.png';
import Icon from "react-native-vector-icons/Ionicons";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
);

export const HomePage = ({ navigation }) => {

    return (
        <ScreenContainer>

            <View style={styles.navbar}>
                <View style={styles.navtext}>
                    <Text style={styles.navigate}>Hi,</Text>
                    <Text style={styles.navigatesec}>Need some help today?</Text>

                </View>
                <View style={styles.profile}>
                    <TouchableOpacity>

                        <Icon 
                        name='md-person-circle-outline'
                        size="small"
                            style={{
                                color: 'white',
                                 fontSize:50,
                                
                                

                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>




        </ScreenContainer>
    );

};



const styles = StyleSheet.create({

    navbar: {
        backgroundColor: '#583EF2',
        height: height / 2.5,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        flex: 1/3,
    },

    navigate: {
        color: 'white',
        fontSize: 30,
        left: width / 12,
        top: height / 17,
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

    profile:{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: height/5,
        width: width/4,
    },

  



});