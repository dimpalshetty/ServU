import React, { useCallback, useState } from "react";
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
import firebase from '../../firebase';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const SignUpPage = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userType, setUserType] = useState('users');

    const callback = useCallback((type) => {
        console.log(type)

        setUserType(type);
    }, []);


    


    const signUp = async () => {
        if (userType == "users") {

            try {
                firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
                    .then((result) => {
                        firebase.firestore().collection("users")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                name,
                                email,
                                phone,
                                userType
                            })
                        console.log(result)

                    }
                    )
                navigation.navigate('SignInPage');
            } catch (err) {
                setError(err.message);
            }
        }
        else if (userType == "serviceProvider") {

            try {
                firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
                    .then((result) => {
                        firebase.firestore().collection("serviceProvider")
                            .doc(firebase.auth().currentUser.uid)
                            .set({
                                name,
                                email,
                                phone,
                                userType
                            })
                        console.log(result)

                    }
                    )
                navigation.navigate('SignInPage');
            } catch (err) {
                setError(err.message);
            }
        }
    }

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
                    <Text style={styles.SignUp}>Sign Up</Text>
                    <Text style={styles.Info}>Please enter the details to sign up and create an account.</Text>

                </View>
                <View style={styles.body}>
                    <Select
                        parentCallback={callback}

                    />

                    <View style={styles.input}>
                        <Input
                            value={name}
                            onChangeText={setName}
                            label="Name"
                            placeholder="Your name here"
                            labelStyle={{ 'color': '#1F1F39' }}
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2' }}
                            leftIcon={
                                <Icon name="person-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        <Input
                            label="Phone"
                            value={phone}
                            onChangeText={setPhone}
                            labelStyle={{ 'color': '#1F1F39' }}
                            placeholder="Your phone number here"
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2' }}

                            leftIcon={
                                <Icon name="phone-portrait-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                        <Input
                            value={password}
                            onChangeText={setPassword}
                            label="Password"
                            labelStyle={{ 'color': '#1F1F39', }}
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', }}

                            placeholder="Your password here"
                            secureTextEntry={true}
                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        <Input
                            value={email}
                            onChangeText={setEmail}
                            label="Email"
                            labelStyle={{ 'color': '#1F1F39', }}
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', }}

                            placeholder="Your password here"
                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                        <Input
                            label="Confirm Password"
                            labelStyle={{ 'color': '#1F1F39' }}

                            placeholder="Retype password here"
                            inputContainerStyle={{ 'borderBottomColor': '#BBBBD2' }}
                            secureTextEntry={true}

                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        {
                            error ? <Text style={{ color: 'red' }}>Error</Text> : null
                        }

                    </View>
                    <SignUpButton text='Sign Up' color='#FFFF' bgcolor='#583ef2' width={width / 1.35} onPress={() => signUp()} />
                </View>
            </ScrollView>
        </ScreenContainer>
    );
};

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
        alignItems: 'center',
        color: '#6E6BE8'
    },

    Info: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        width: width / 1.35,
        color: '#BBBBD2',
        marginTop: 5

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