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



import PrpleBtn from '../components/purplebutton';
import work from '../../assets/images/work.png';
import Icon from "react-native-vector-icons/Ionicons";
import Srch from "../components/Searchbar";
import Gridbtn from '../components/gridbuttons';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




const ScreenContainer = ({ children }) => (
    <View style={styles.containers}>{children}</View>
);

export const HomePage = ({ navigation }) => {

    return (
        <ScreenContainer>

            <View style={styles.navbar}>

                <View style={styles.textnav}>
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
                                    fontSize: 50,



                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', height: height / 12 }}>
                    <Srch ></Srch>
                </View>


            </View>

            <View style={styles.grid}>
               
                    <View style={styles.all}>

                        <Gridbtn text="Carpenter" icon="hammer-outline"  />

                    

                        <Gridbtn text="Cleaner" icon="md-flower"/>

                    
                    

                        <Gridbtn text="Mechanic" icon="md-build" />

                    </View>
                    <View style={styles.all}>

                        <Gridbtn text="Cook" icon="md-fast-food" />

                    

                        <Gridbtn text="Plumber" icon="md-water" />

                    
                    

                        <Gridbtn text="More" icon="md-color-wand" />

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
        flexDirection: 'column',
        flex: 1 / 3,
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
        flex: 2/3,
        
    }





});