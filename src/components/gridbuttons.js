import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Gridbtn = ({ text, icon }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button}
    onPress={() =>
      navigation.navigate("SelectWorker", {
        work: text,
      })
    }
    >
      <Icon
        name={icon}
        size="small"
        style={{
          fontSize: 40,
          color: "#636BE8",
        }}
      />
      <Text style={styles.taskdes}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    textAlign: "center",
    color: "red",
    fontWeight: "500",
    top: 4,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#583EF2",
    borderWidth: 1.5,
    width: width / 3.7,
    height: height / 6,
  },

  taskdes: {
    marginTop: 2,
    color: "#583EF2",
    fontSize: 16,
  },
});

export default Gridbtn;
