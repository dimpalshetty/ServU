import React from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";

import Bookbox from "../../src/components/Bookbox";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Head from "../../src/components/header";
import firebase from "../../firebase";
import "firebase/firestore";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const user = firebase.auth().currentUser;
if (user !== null) {
  var wEmail = user.email;
  console.log(wEmail);
}
let documents;
const ScreenContainer = ({ children }) => <View>{children}</View>;
firebase
  .firestore()
  .collection("bookings")
  .where("wEmail", "==", wEmail)
  .get()
  .then((querySnapshot) => {
    documents = querySnapshot.docs.map((doc) => doc.data());
    console.log(documents);
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

export const Booking = ({ navigation }) => {
  return (
    <ScrollView>
      <ScreenContainer
        style={{ justifyContent: "center", alignContent: "center" }}
      >
        <View style={{ flexDirection: "column" }}>
          <View>
            <Head title="Bookings"></Head>
            {/* <TouchableOpacity
              style={{ padding: 22, paddingTop: 20, flex: 2 / 3 }}
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="chevron-back-circle-outline"
                size="small"
                style={{
                  color: "white",
                  fontSize: 50,
                }}
              />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: "column" }}>
            {documents.map((users, key) => {
              return (
                <Bookbox
                  image={require("../../assets/images/profile.jpg")}
                  keu={key}
                  text={users.uName}
                  text1="Cleaning"
                  id="#123455"
                />
              );
            })}
          </View>
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

const styless = StyleSheet.create({
  navbarr: {
    backgroundColor: "#6E6BE8",
    height: height / 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
  },
});

export default Booking;
