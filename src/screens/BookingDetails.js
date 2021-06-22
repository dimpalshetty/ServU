import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import styles from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Header, Card } from "react-native-elements";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SignUpButton from '../../src/components/button';



const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const BookingDetails = ({ route, navigation }) => {
    const { id } = route.params;

    return (

        <View style={{flex: 1, backgroundColor: 'white'}}>
        
        <Header
        containerStyle= {{ backgroundColor: 'white', }}
         leftComponent={ <TouchableOpacity onPress={()=>navigation.goBack() }><Icon name="chevron-back-circle-outline" size="small" style={{color: '#46369F',fontSize: RFPercentage(6),}}/></TouchableOpacity> }
         centerComponent={<Text style={styless.booking}>Booking ID {id}</Text>}/>



<ProgressSteps  marginBottom={10} borderWidth="2" completedProgressBarColor="#F37193" completedStepIconColor="#F37193" nextBtnDisabled={true} nextBtnDisabled= {true} isComplete={true} labelFontSize="12"  >
        <ProgressStep marginBottom="10" progressBarColor='#F37193' removeBtnRow={true} label="Booked">
            <View style={{ alignItems: 'center' }}>
                {/* <Text>This is the content within step 1!</Text> */}
            </View>
        </ProgressStep>
        <ProgressStep label="Confirmed">
            <View style={{ alignItems: 'center' }}>
                {/* <Text>This is the content within step 2!</Text> */}
            </View>
        </ProgressStep>
        <ProgressStep label="Completed">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>

    <Card  containerStyle= {{ height: '60%' }}>
  
 <Text>hi</Text>

 

</Card>


        <ScrollView>
              
            




       
        </ScrollView>
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