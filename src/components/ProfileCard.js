import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ProfilePic from './ProfilePic';
import { RFPercentage } from "react-native-responsive-fontsize";

const users = [
    {
        name1: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



const ProfileCard = ({ name,experience,location }) => {


    return (

        <View>

            <Card containerStyle={{
                padding:0,
                margin:0,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderTopRightRadius: 50,
            }}>
                {<View style={{flexDirection:'row'}}>
                    <View>
                        <ProfilePic />
                    </View>
                    <View style={{ flex: 1, height: height / 5.2, width: width / 2,alignItems:'flex-start',justifyContent:'space-evenly',paddingVertical:20,padding:20}}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.experience}>⌚ Experience: {experience}</Text>
                        <Text style={styles.location}>📍 Location: {location}</Text>
                    </View>
                </View>
                }
            </Card>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name:{
        fontWeight:'bold',
        fontSize:RFPercentage(3)
     },
     experience:{
        fontWeight:'bold',
         fontSize:RFPercentage(2.3),
         color:'#6e6be8'
     },
     location:{
        fontWeight:'bold',
        fontSize:RFPercentage(2.1),
        color:'#6e6be8'
     }



})
export default ProfileCard