import React, {useState } from "react";
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
import DropdownScreen from '../../src/components/button';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
];




export const Signinform = ({ navigation }) => {
    

  return (

    <ScrollView
    showsVerticalScrollIndicator={false}
>

    <View style={styles.Header}>


        <Text style={styles.Info}>Please give more information about the work you provide!</Text>

    </View>
    <View style={styles.body}>
   
        <View style={styles.input}>
            <Input
                // value={name}
                // onChangeText={setName}
                label="Job"
                placeholder="Your job here"
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
                // label="Phone"
                // value={phone}
                // onChangeText={setPhone}
                label="location"
                labelStyle={{ 'color': '#1F1F39' }}
                placeholder="Your location here"
                inputContainerStyle={{ 'borderBottomColor': '#BBBBD2' }}

                leftIcon={
                    <Icon name="phone-portrait-outline"
                        size={18}
                        color={'#6e6be8'}

                    ></Icon>
                }
            />
             {/* <DropdownScreen></DropdownScreen> */}

            <Input
                // value={password}
                // onChangeText={setPassword}
                label="Experience"
                labelStyle={{ 'color': '#1F1F39', }}
                inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', }}

                placeholder="Number of year of experiences"
                secureTextEntry={true}
                leftIcon={
                    <Icon name="lock-closed-outline"
                        size={18}
                        color={'#6e6be8'}

                    ></Icon>
                }
            />
            <Input
                // value={email}
                // onChangeText={setEmail}
                label="Price"
                labelStyle={{ 'color': '#1F1F39', }}
                inputContainerStyle={{ 'borderBottomColor': '#BBBBD2', }}

                placeholder="Price"
                leftIcon={
                    <Icon name="lock-closed-outline"
                        size={18}
                        color={'#6e6be8'}

                    ></Icon>
                }
            />



        </View>
        <SignUpButton text='Sign Up' color='#FFFF' bgcolor='#583ef2' width={width / 1.35} onPress={() => navigation.navigate('HomePage')} />
    </View>
</ScrollView>
   
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