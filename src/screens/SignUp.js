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
    TextInput,

} from 'react-native';
import house from '../../assets/images/house.png'
import InputText from '../../src/components/input';


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
    SignUp: {
        fontWeight: 'bold',
        fontSize: 30,
        alignContent: 'center',
        alignItems: 'center'
    },

    Info: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        width: width / 1.35,
        color: 'grey'

    },
    body: {
        flexDirection: 'column',
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
        height: height / 2

    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    PassInput: {
        borderBottomWidth: 1,
        width: width / 1.35,
    },
    password: {
        width: width / 1.25,
        alignItems: 'flex-start',
        justifyContent: "center",
        padding: 8,
    }

});
const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const SignUpPage = ({ navigation }) => {

    return (
        <ScreenContainer>
            <View style={styles.Header}>

                <Image
                    style={{
                        width: width / 3,
                        height: height / 6,
                        resizeMode: 'contain'
                    }}
                    source={house} />
                <Text style={styles.SignUp}>Sign up</Text>
                <Text style={styles.Info}>Please enter the details to sign up and create an account.</Text>

            </View>
            <View style={styles.body}>
                <InputText text='Your Name'
                    placeholder='Your name here'
                />
                <InputText text='Phone Number'
                    placeholder='Your phone number here'

                />
                <View style={styles.password}>
                    <Text style={styles.title}>Password</Text>
                    <TextInput secureTextEntry={true} placeholder='Retype your Password here' style={styles.PassInput} />
                </View>
                <View style={styles.password}>
                    <Text style={styles.title}>Confirm Password</Text>
                    <TextInput secureTextEntry={true} placeholder='Retype your Password here' style={styles.PassInput} />
                </View>
            </View>

        </ScreenContainer>
    );
};