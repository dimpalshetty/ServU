import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';



const width = Dimensions.get('window').width

const Select =({parentCallback})=>{
    const [backgroundColor,setBackgroundColor]=useState("#6e6be8")
    const [backgroundColor2,setBackgroundColor2]=useState("grey")
    const [textColor,setTextColor]=useState("white")
    const [textColor2,setTextColor2]=useState("black")
    const [pressed]=useState(false)




    const changeColor=(event)=>{
        if (!pressed){
            setBackgroundColor2("grey")
            setBackgroundColor("#6e6be8")
            setTextColor2("black")
            setTextColor("white")
            parentCallback("user")
       }

    }
    const changeColor2=()=>{
        if (!pressed){
            setBackgroundColor("grey")
            setBackgroundColor2("#6e6be8")
            setTextColor("black")
            setTextColor2("white")
            parentCallback("serviceProvider")


        }
       
    }
    
        return (
            <View style={styles.navBar}>
                <TouchableOpacity style={{
                    backgroundColor:backgroundColor,
                    borderRadius: 15,
                    height: 60,
                    width: width / 2.8,
                    marginRight: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                    onPress={() => changeColor()}
                >
                    <View >
                        <Text style={{ color: textColor, fontSize: 15 }}>
                            User
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: backgroundColor2,
                    borderRadius: 15,
                    height: 60,
                    alignItems: "center",
                    width: width / 2.8,

                    justifyContent: "center",
                }}
                onPress={() => changeColor2()}
                >
                    <View >
                        <Text style={{ color: textColor2, fontSize: 15 }}>
                            Service Provider
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
 
}


const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        width: width / 1.18,
        marginVertical: 20,
        justifyContent: 'space-evenly'
    },
    btnContainerStyle: {
        backgroundColor: '#583ef2',
        borderRadius: 15,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    btnTextStyle: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});
export default Select;