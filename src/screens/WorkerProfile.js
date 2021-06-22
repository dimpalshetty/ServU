import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,

} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ProfileCard from "../components/ProfileCard";






const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({


});


export const WorkerProfile = ({ route }) => {

    const { name } = route.params;

    return (
        <View style={{ paddingHorizontal: "2%", backgroundColor: 'white', flex: 1 }}>
            <Header containerStyle={{
                backgroundColor: 'white',
                height: '15%'
            }}
                leftComponent={
                    <TouchableOpacity>
                        <Icon
                            name='chevron-back-circle-outline'
                            size="small"
                            style={{
                                color: '#B8B8D2',
                                fontSize: RFPercentage(6),

                            }}
                        />
                    </TouchableOpacity>}
                centerComponent={{ text: 'Profile', style: { color: '#46369F', fontSize: RFPercentage(4), fontWeight: 'bold' } }} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ProfileCard name={name} />
            </ScrollView>
        </View>
    );
};