import React from "react";
import {
    Text,
    StyleSheet,
    useState, 
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
import { registration } from '../../API/firebaseMethods';


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

export const SignUpPage = ({ navigation }) => {
 const [Name, setName] = useState('');
        const [Phone, setPhone] = useState('');
        const [Email, setEmail] = useState('');
        const [Password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        const emptyState = () => {
            setName('');
            setPhone('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          };   
          
          
          const handlePress = () => {
            if (!Name) {
              Alert.alert('Name is required');
            } else if (!email) {
              Alert.alert('Email field is required.');
            } else if (!password) {
              Alert.alert('Password field is required.');
            } else if (!confirmPassword) {
              setPassword('');
              Alert.alert('Confirm password field is required.');
            } else if (password !== confirmPassword) {
              Alert.alert('Password does not match!');
            } else {
              registration(
                Name,
                email,
                Phone,
                password,
              );
              navigation.navigate('Loading');
              emptyState();
            }
          };      
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
                    <Select/>
                    <View style={styles.input}>
                        <Input
                            value={Name}
                            onChangeText={(name) => setName(name)}
                            label="Name"
                            placeholder="Your name here"
                            labelStyle={{ 'color': '#1F1F39' }}
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2'}}
                            leftIcon={
                                <Icon name="person-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                         <Input
                           value={Email}
                            onChangeText={(email) => setEmail(email)}
                            label="Email"
                            labelStyle={{ 'color': '#1F1F39' }}
                            placeholder="Your mail here"
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2'}}

                            leftIcon={
                                <Icon name="phone-portrait-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                        <Input
                        value={Phone}
                            onChangeText={(phone) => setPhone(phone)}
                            label="Phone"
                            labelStyle={{ 'color': '#1F1F39' }}
                            placeholder="Your phone number here"
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2'}}

                            leftIcon={
                                <Icon name="phone-portrait-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />

                        <Input
                            value={Password}
                         onChangeText={(password) => setPassword(password)}
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

                        <Input
                        onChangeText={(password2) => setConfirmPassword(password2)}
          
                            label="Confirm Password"
                            labelStyle={{ 'color': '#1F1F39' }}

                            placeholder="Retype password here"
                            inputContainerStyle={{'borderBottomColor':'#BBBBD2'}}
                            secureTextEntry={true}
                            
                            leftIcon={
                                <Icon name="lock-closed-outline"
                                    size={18}
                                    color={'#6e6be8'}

                                ></Icon>
                            }
                        />
                    </View>
                    <SignUpButton text='Sign Up' color='#FFFF' bgcolor='#583ef2' width={width/1.35} onPress={handlePress} />
                </View>
            </ScrollView>
        </ScreenContainer>
    );
};