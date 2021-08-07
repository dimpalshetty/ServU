import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "../../firebase";
import "firebase/firestore";
import DetailsCard from "../../src/components/DetailsCard";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
let documents;

const user = firebase.auth().currentUser;
if (user !== null) {
  var uid = user.uid;
}
var docRef = firebase.firestore().collection("serviceProvider");
docRef.get().then((querySnapshot) => {
  documents = querySnapshot.docs.map((doc) => doc.data());
});
export const SelectWorker = ({ route, navigation }) => {
  const { work } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.navbarr}>
        <View style={styles.navTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-back-circle-outline"
              size="small"
              style={{
                color: "white",
                fontSize: 38,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "white", fontSize: 30 }}>Need help?</Text>
            <Text style={{ color: "white", fontSize: 30 }}>Book a Maid</Text>
          </View>
          <TouchableOpacity>
            <Icon
              name="filter-outline"
              size="small"
              style={{
                color: "white",
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {documents.map((users, key) => {
        return (
          <DetailsCard
            key={key}
            name={users.name}
            experience="5"
            image={require("../../assets/images/profile.jpg")}
            price="200"
            unit="Day"
            work={work}
            email={users.email}
          />
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  navbarr: {
    backgroundColor: "#6E6BE8",
    height: height / 3.7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    width: width,
  },
  navTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
