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
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as firebase from 'firebase';
import {loggingOut} from '../../API/firebaseMethods';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const Profile = ({ navigation }) => {

    let currentUserUID = firebase.auth().currentUser.uid;
  const [Name, setName] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('users')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.Name)
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.replace('LandingPage');
  };


    return (
        <ScrollView>

            <ScreenContainer style={{ justifyContent: 'center', alignContent: 'center' ,padding:5}}>


                <View style={{ flexDirection: 'column' }}>

                    <View style={styless.navbarr}>




                        <TouchableOpacity style={{ padding: 20, paddingTop: 20, flex: 1 / 3 }} onPress={() => navigation.goBack()}>

                            <Icon
                                name='chevron-back-circle-outline'
                                size="small"
                                style={{
                                    color: 'white',
                                    fontSize: RFPercentage(6),



                                }}
                            />
                        </TouchableOpacity>



                        <View style={{ alignContent: 'center', alignItems: 'center', flex: 2 / 3, paddingLeft: width / 15, paddingTop: 25, }}>
                            <Text style={{ color: 'white', fontSize: 30, }}>Profile</Text>


                        </View>


                    </View>
                    <View  style={{
                            top: -70,
                            right: width / 2,
                            left: width / 3,
                        }}>
                        <ProfilePic />
                    </View>




                </View>

                <View style={{ flexDirection: 'column', width: width, top: -80, justifyContent: 'center', }}>
                    <View style={styles.input}>
                        <Input

                            label="Name"
                            placeholder="Your name here"
                            labelStyle={{ 'color': '#1F1F39', padding: 5, }}
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', height: height / 25, marginTop: 5, }}
                            leftIcon={
                                <Icon name="person-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        <Input
                            label="Phone"
                            labelStyle={{ 'color': '#1F1F39', paddingVertical: 5, }}
                            placeholder="Your phone number here"
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', height: height / 25, paddingTop: 2, paddingBottom: 2, marginTop: 5, }}

                            leftIcon={
                                <Icon name="phone-portrait-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        <Input

                            label="Email"
                            placeholder="Your Email here"
                            labelStyle={{ 'color': '#1F1F39', paddingVertical: 5, }}
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', height: height / 25, paddingTop: 2, paddingBottom: 2, marginTop: 5, }}
                            leftIcon={
                                <Icon name="mail-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                        <Input
                            label="Change Password"
                            labelStyle={{ 'color': '#1F1F39', paddingVertical: 5, }}

                            placeholder="Your Current Password Here"
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', height: height / 25, paddingTop: 2, paddingBottom: 2, marginTop: 5, }}
                            secureTextEntry={true}

                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                    </View>
                    <View style={{ alignItems: 'center', top: -15 }}>
                        <SignUpButton text='Confirm' color='#583EF2' bgcolor='#EAEAFF' width={width / 1.1} />
                    </View>
                    <View style={{ alignItems: 'center', top: 20 }}>
                        <SignUpButton text='SAVE' color='#FFFF' bgcolor='#583ef2' width={width / 1.1} />
                    </View>
                    <View style={{ alignItems: 'center', top: 20 }}>
                        <SignUpButton text='LOG OUT' color='#FFFF' bgcolor='#FF6961' width={width / 1.1} onPress={handlePress} />
                    </View>
                </View>

            </ScreenContainer>
        </ScrollView>


    );
};


const styless = StyleSheet.create({

    navbarr: {
        backgroundColor: '#6E6BE8',
        height: height / 3.7,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        alignContent: 'center',
        position: 'relative',





    },

    input: {
        width: width / 2,
        alignItems: 'flex-start',
        justifyContent: "center",
        padding: 10,
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