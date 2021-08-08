import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import firebase from "../../firebase";
import house from "../../assets/images/house.png";
import SignUpButton from "../../src/components/button";
import ProfilePic from "../../src/components/ProfilePic";
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import "firebase/firestore";
import tick from "../../assets/images/tick.png";
import { Header } from "react-native-elements";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const Success = ({ navigation,id }) => {
  console.log("id=",{id})
  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: "#6e6be8",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 100,
        }}
        centerComponent={{
          text: "Booked!",
          style: { color: "#fff", fontSize: 30 },
        }}
      />

      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          marginTop: 120,
        }}
      >
        <Icon
          style={{ justifyContent: "center", alignContent: "center" }}
          name="checkmark-done-circle-outline"
          size={150}
          color={"#6e6be8"}
        ></Icon>
      </View>
      <View style={{ alignItems: "center" }}>
        <SignUpButton
          text="View Details "
          color="white"
          bgcolor="#6e6be8"
          width={width / 1.35}
          onPress={() => navigation.push("BookingDetails", { id: id })}
        ></SignUpButton>
      </View>
      <View style={{ alignItems: "center" }}>
        <SignUpButton
          text="Go To Homepage "
          color="white"
          bgcolor="#6e6be8"
          width={width / 1.35}
          onPress={() => navigation.navigate("HomePage")}
        ></SignUpButton>
      </View>
    </View>
  );
};

export default Success;
