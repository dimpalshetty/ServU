import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const DetailsCard = ({name,experience,image }) => {
    return (
        <View style={styles.box}>
            <View style={styles.box1}>
                <Image style={styles.square} source={image} />

                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.box1}>

                <Text style={styles.number}>{experience}</Text>
                <View >
                    <Icon name='chevron-forward' style={{ fontSize: 30 }}></Icon>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / 50,
        backgroundColor: '#E6E6FA',
        borderRadius: 12,
        elevation: 3,
        padding: 10,
        margin:15
    },
    square: {
        height: height / 15,
        width: width / 8,
        backgroundColor: '#FFB9C1',
        borderRadius: 12,
        marginRight:15
    },
    text: {
        fontSize: 18,
        color:'white'
    },
    number: {
        fontSize: 18,
        color:'white',
        fontWeight:'bold',
    },
    box1:{
        flexDirection:'row',
        alignItems:'center'
    }


})
export default DetailsCard