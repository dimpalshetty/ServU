import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView,

} from 'react-native';
import house from '../../assets/images/house.png'
import SignUpButton from '../../src/components/button';
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from 'react-native-elements';
import Select from '../../src/components/select';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",

    },
    Header: {
        top: 70,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 120
    },
    SignIn: {
        fontWeight: 'bold',
        fontSize: 30,
        alignContent: 'center',
        alignItems: 'center',
        color: '#6E6BE8'
    },

    Info: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        width: width / 1.35,
        color: '#BBBBD2',
        marginTop:5

    },
    body: {
        flexDirection: 'column',
        borderColor: '#BBBBD2',
        borderWidth: 2,
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        marginBottom: 50

    },

    input: {
        width: width / 1.25,
        alignItems: 'flex-start',
        justifyContent: "center",
        padding: 8,
    }

});
const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const SignInPage = ({ navigation }) => {

    return (
        <ScreenContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.Header}>

                    <Image
                        style={{
                            width: width / 3,
                            height: height / 6,
                            resizeMode: 'contain'
                        }}
                        source={house} />
                    <Text style={styles.SignIn}>Log In</Text>
                    <Text style={styles.Info}>Please enter the details to sign in to your account.</Text>

                </View>
                <View style={styles.body}>
                    <Select/>
                    <View style={styles.input}>

                        <Input
                            label="Email"
                            labelStyle={{ 'color': '#1F1F39' }}
                            placeholder="Your email number here"
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2'}}
                            textContentType="emailAddress"

                            leftIcon={
                                <Icon name="mail-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                        <Input
                            label="Password"
                            labelStyle={{ 'color': '#1F1F39', }}
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2',}}

                            placeholder="Your password here"
                            secureTextEntry={true}
                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

  
                    </View>
                    <SignUpButton text='LOGIN' color='#FFFF' bgcolor='#583ef2' width={width/1.35} />
                </View>
            </ScrollView>
        </ScreenContainer>
    );
};