import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Bookbox = ({ image, text, text1, id }) => {
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" ,marginVertical:10,paddingHorizontal:10}}>
      <TouchableOpacity
        style={styles.bookno}
        onPress={() => navigation.push("BookingDetails", { id: id })}
      >
        <View style={styles.boxbox}>
          <Image
            style={{
              height: 75,
              width: 75,
              marginLeft: 10,
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 20,
            }}
            source={image}
          />
          <Text style={styles.booking}>
            {" "}
            You Have Booked {text} For The Task Of {text1}. The Booking ID is{" "}
            {id}{" "}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bookno: {
    width: width / 1.1,
    height: height / 7,
    justifyContent: "space-between",

    alignContent: "center",
    top: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#78789D",
  },

  boxbox: {
    flexDirection: "row",
    marginRight: 20,
    width: width / 1.1,
    height: height / 7,
    alignItems: "center",
  },
  booking: {
    fontSize: 18,
    color: "white",
    fontWeight: "300",
    flexShrink: 1,
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
  },
});

export default Bookbox;
