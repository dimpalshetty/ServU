import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const users = [
  {
    name1: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Specialization = ({ title, image, bgcolor }) => {
  return (
    <View>
      <View style={[styles.box, bgcolor && { backgroundColor: bgcolor }]}>
        <Image
          source={image}
          style={{
            alignSelf: "center",
            height: 70,
            width: 70,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            paddingTop: 15,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 20,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    width: width / 3,
    height: height / 5,
    marginRight: 15,
  },
});
export default Specialization;
