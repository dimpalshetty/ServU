import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Stars from "react-native-stars";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const DetailsCard = ({ name, experience, image, price, unit ,email}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("WorkerProfile", {
          name: name,
          experience: experience,
          wEmail:email,
        })
      }
    >
      <View style={styles.box}>
        <View style={styles.box1}>
          <Image style={styles.square} source={image} />
          <View style={styles.details}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.number}>Experience: {experience} years</Text>
            <View style={{ marginVertical: 10 }}>
              <Stars
                display={3.67}
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
                halfStar={
                  <Icon name={"star-half"} style={[styles.myStarStyle]} />
                }
              />
            </View>
            <Text style={styles.price}>
              {"\u20B9"}
              {price}/{unit}
            </Text>
          </View>
        </View>

        <View style={styles.box1}>
          <Icon name="chevron-forward" style={{ fontSize: 30 }}></Icon>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: height / 5,
    backgroundColor: "#E6E6FA",
    borderRadius: 12,
    elevation: 3,
    padding: 10,
    margin: 15,
  },
  square: {
    height: height / 7,
    width: width / 5,
    backgroundColor: "#FFB9C1",
    borderRadius: 12,
    marginRight: 15,
  },
  text: {
    color: "#46369F",
    fontWeight: "bold",
    fontSize: 20,
  },
  number: {
    fontSize: 16,
    color: "#46369F",
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    height: height / 6,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  myStarStyle: {
    fontSize: 25,
    color: "#ffb457",
    backgroundColor: "transparent",
    textShadowColor: "black",
  },
  myEmptyStarStyle: {
    color: "white",
  },
  price: {
    fontWeight: "bold",
    color: "#F76588",
    fontSize: 20,
  },
});
export default DetailsCard;
