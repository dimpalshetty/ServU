import React from "react";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,

} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import firebase from '../../firebase';
import 'firebase/firestore';
import DetailsCard from '../../src/components/DetailsCard';




const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",

    },
    navbarr: {
        backgroundColor: '#6E6BE8',
        height: height / 3.7,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        width: width

    },
    navTitle: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:20

    }

});
const user=firebase.auth().currentUser;
if(user!==null){
    var uid=user.uid
    console.log(uid);
}
var docRef = firebase.firestore().collection("serviceProvider").doc(uid);

export const SelectWorker = ({ navigation }) => {
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log("name:",doc.data().name)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>


            <View style={styles.navbarr}>
                <View style={styles.navTitle}>
                    <TouchableOpacity >

                        <Icon
                            name='chevron-back-circle-outline'
                            size="small"
                            style={{
                                color: 'white',
                                fontSize: 38,

                            }}
                        />
                    </TouchableOpacity>
                    <View> 
                        <Text style={{ color: 'white', fontSize: 30,  }}>Need help?</Text><Text style={{ color: 'white', fontSize: 30,  }}>Book a Maid</Text>
                        </View>
                    <TouchableOpacity >

                        <Icon
                            name='filter-outline'

                            size="small"
                            style={{
                                color: 'white',
                                fontSize: 30,

                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <DetailsCard
                name='Jake Peralta'
                experience='5'
                image={require('../../assets/images/profile.jpg')}
                price='200'
                unit='Day'
                />

        </ScrollView>

    );
};