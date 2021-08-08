import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';


import { Card } from "react-native-elements";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SignUpButton from '../../src/components/button';
import CustomHeader from "../components/header";



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height




export const BookingDetails = ({ route }) => {
    const { id } = route.params;

    return (

        <View style={{ backgroundColor: 'white', flexDirection: 'column', flex: 1 }}>

            <CustomHeader id={id} title="Booking ID" />





            <ProgressSteps marginBottom={10}  completedProgressBarColor='#F37193' completedStepIconColor='#F37193' nextBtnDisabled={true} nextBtnDisabled={true} isComplete={true} >
                <ProgressStep marginBottom='10' progressBarColor='#F37193' removeBtnRow={true} label='Booked'>
                    <View style={{ alignItems: 'center' }}>
                    </View>
                </ProgressStep>
                <ProgressStep label='Confirmed'>
                    <View style={{ alignItems: 'center' }}>
                    </View>
                </ProgressStep>
                <ProgressStep label='Completed'>
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>





            <Card containerStyle={{ height: '60%' }}>

                <Text style={{ fontSize: 18, color: '#46369f', fontWeight: '800' }}>Booking Detail </Text>
                <View style={{ flexDirection: 'column', paddingTop: 10, paddingLeft: 5 }}>

                    <View style={{ flexDirection: 'column', paddingTop: 4, paddingLeft: 3, }}>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Working time</Text>
                        <Text style={{ color: 'gray' }}>Monday-22 March</Text>
                        <Text style={{ color: 'gray' }}>12:00pm</Text></View>

                    <View style={{ flexDirection: 'column', paddingTop: 7, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Worker Phone Number</Text>
                        <Text style={{ color: 'gray' }}>1234567890</Text>
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 6, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Domestic Worker</Text>
                        <Text style={{ color: 'gray' }}>Janet</Text>
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 6, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Location</Text>
                        <Text style={{ color: 'gray' }}>Monday-22 March</Text>
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 6, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Working Hour</Text>
                        <Text style={{ color: 'gray' }}>3 hours - 10:30am to 12:00pm</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 6, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>Cost</Text>
                        <Text style={{ color: 'gray' }}>Rs 4000</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 6, paddingLeft: 3 }}><Text style={{ fontSize: 18, fontWeight: "600" }}>User Phone Number</Text>
                        <Text style={{ color: 'gray' }}>123456889</Text>
                    </View>


                </View>



            </Card>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <SignUpButton text='Cancel' color='#FFFFFF' bgcolor='#ff6961' width={width / 2.5} />
                <SignUpButton text='Book Again' color='#F7658B' bgcolor='#ffebf0' width={width / 2.5} />


            </View>





        </View>


    );
};


const styless = StyleSheet.create({


    navbarr: {

        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
        paddingTop: 5,






    },

    booking: {
        color: '#46369F',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '800',
        fontSize: 18,
        marginTop: 10,

    },

});


export default BookingDetails