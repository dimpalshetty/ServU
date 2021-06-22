import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ProfilePic from './ProfilePic';
const users = [
    {
        name1: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



const ProfileCard = ({ name }) => {


    return (


        <Card>
            {
                <View >

                    <ProfilePic />
                    <Text style={styles.name}>{name}</Text>
                </View>
            }
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }



})
export default ProfileCard