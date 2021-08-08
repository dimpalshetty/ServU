import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
  TextInput,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ProfileCard from "../components/ProfileCard";
import Specialization from "../components/Specialization";
import Stars from "react-native-stars";
import DateTimePicker from "@react-native-community/datetimepicker";
import BookNowButton from "../../src/components/button";
import firebase from "../../firebase";
import "firebase/firestore";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const user = firebase.auth().currentUser;
if (user !== null) {
  var uid = user.uid;
  console.log(uid);
}

export const WorkerProfile = ({ route, navigation }) => {
  const { name, experience, work, wEmail } = route.params;
  const today = new Date();
  const [date, setdate] = useState(new Date(today));
  const [mode, setMode] = useState("date");
  const [show1, setShow1] = useState(false);
  const [wName, setwName] = useState("");
  const [wPhone, setwPhone] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [uName, setuName] = useState("");
  const [uPhone, setuPhone] = useState("");
  const [uEmail, setuEmail] = useState("");

  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        setuName(doc.data().name);
        setuPhone(doc.data().phone);
        setuEmail(doc.data().email);
        console.log("Document data:", uName);
      } else {
        console.log("No such user document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  firebase
    .firestore()
    .collection("serviceProvider")
    .where("email", "==", wEmail)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setwName(doc.data().name);
        setwPhone(doc.data().phone);
        setPrice(doc.data().price);
        setLocation(doc.data().location);
        setService(doc.data().service);
        console.log(wPhone);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  const createBooking = async () => {
    await firebase.firestore().collection("bookings").add({
      wName: wName,
      wPhone: wPhone,
      uName: uName,
      uPhone: uPhone,
      wEmail: wEmail,
      uEmail: uEmail,
      price: price,
      location: location,
      service: service,
      date:date
    });
  };

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow1(Platform.OS === "ios");
    setdate(currentDate);
  };

  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View
      style={{ paddingHorizontal: "2%", backgroundColor: "white", flex: 1 }}
    >
      <Header
        containerStyle={{
          backgroundColor: "white",
          height: "15%",
        }}
        leftComponent={
          <TouchableOpacity>
            <Icon
              name="chevron-back-circle-outline"
              size="small"
              style={{
                color: "#B8B8D2",
                fontSize: RFPercentage(6),
              }}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "Profile",
          style: {
            color: "#46369F",
            fontSize: RFPercentage(4),
            fontWeight: "bold",
          },
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 13 }}
      >
        <ProfileCard name={name} experience={experience} location="Mangalore" />
        <Text style={styles.subTitle}>Specialized in:</Text>
        <ScrollView
          horizontal={true}
          style={{ flexDirection: "row" }}
          showsHorizontalScrollIndicator={false}
        >
          <Specialization
            title="Maid"
            bgcolor="#78789D"
            image={require("../../assets/Icons/cleaning.png")}
          />
          <Specialization
            title="Groceries"
            bgcolor="#F7658B"
            image={require("../../assets/Icons/cleaning.png")}
          />
          <Specialization
            title="Maid"
            bgcolor="#78789D"
            image={require("../../assets/Icons/cleaning.png")}
          />
          <Specialization
            title="Maid"
            bgcolor="#78789D"
            image={require("../../assets/Icons/cleaning.png")}
          />
          <Specialization
            title="Maid"
            bgcolor="#78789D"
            image={require("../../assets/Icons/cleaning.png")}
          />
        </ScrollView>
        <Text style={styles.subTitle}>Rating:</Text>

        <View
          style={{
            marginVertical: 10,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Stars
            default={3.5}
            count={5}
            half={true}
            starSize={200}
            fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
            emptyStar={
              <Icon
                name={"star-outline"}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={<Icon name={"star-half"} style={[styles.myStarStyle]} />}
          />
        </View>
        <View>
          <Text style={styles.subTitle}>Schedule:</Text>

          <TouchableOpacity
            onPress={showDatepicker1}
            style={{
              width: width / 2,
              backgroundColor: "#B8B8D2",
              alignItems: "center",
              padding: 20,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              borderTopRightRadius: 25,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Icon
              name="calendar-outline"
              size="small"
              style={{
                color: "white",
                fontSize: RFPercentage(4),
              }}
            />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {date.toISOString().slice(0, 10)}
            </Text>
          </TouchableOpacity>

          {show1 && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange1}
            />
          )}
        </View>
        <View
          style={{ widthL: width, alignItems: "center", marginVertical: 20 }}
        >
          <BookNowButton
            onPress={() => createBooking()}
            text="BOOK NOW"
            color="#FFFF"
            bgcolor="#583ef2"
            width={width / 1.35}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    color: "#46369F",
    fontSize: 23,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
  },
  myStarStyle: {
    fontSize: 25,
    color: "#ffb457",
    backgroundColor: "transparent",
    textShadowColor: "black",
  },
  myEmptyStarStyle: {
    color: "grey",
  },
});
