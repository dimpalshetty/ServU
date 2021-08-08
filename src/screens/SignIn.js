import React, { useCallback, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import house from "../../assets/images/house.png";
import SignUpButton from "../../src/components/button";
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";
import Select from "../../src/components/select";
import firebase from "../../firebase";
import "firebase/firestore";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const SignInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("users");
  const db = firebase.firestore();
  const callback = useCallback((type) => {
    console.log(type);

    setUserType(type);
  }, []);

  const signIn = async () => {
    if (userType == "users") {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.trim(), password);
        db.collection("users")
          .where("email", "==", email)
          .get()
          .then(() => {
            navigation.navigate("HomePage");
          })
          .catch(() => {
            setError("Email doesn't exist.");
          });
      } catch (err) {
        setError(err.message);
      }
    } else if (userType == "serviceProvider") {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.trim(), password);
        db.collection("serviceProvider")
          .where("email", "==", email)
          .get()
          .then(() => {
            navigation.navigate("Booking");
          })
          .catch(() => {
            setError("Email doesn't exist.");
          });
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Header}>
        <Image
          style={{
            width: width / 3,
            height: height / 6,
            resizeMode: "contain",
          }}
          source={house}
        />
        <Text style={styles.SignIn}>Log In</Text>
        <Text style={styles.Info}>
          Please enter the details to sign in to your account.
        </Text>
      </View>
      <View style={styles.body}>
        <Select parentCallback={callback} />
        <View style={styles.input}>
          <Input
            value={email}
            onChangeText={setEmail}
            label="Email"
            labelStyle={{ color: "#1F1F39" }}
            placeholder="Your email number here"
            inputContainerStyle={{ borderBottomColor: "#BBBBD2" }}
            textContentType="emailAddress"
            leftIcon={
              <Icon name="mail-outline" size={18} color={"#6e6be8"}></Icon>
            }
          />

          <Input
            value={password}
            onChangeText={setPassword}
            label="Password"
            labelStyle={{ color: "#1F1F39" }}
            inputContainerStyle={{ borderBottomColor: "#BBBBD2" }}
            placeholder="Your password here"
            secureTextEntry={true}
            leftIcon={
              <Icon
                name="lock-closed-outline"
                size={18}
                color={"#6e6be8"}
              ></Icon>
            }
          />
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
        </View>
        <SignUpButton
          text="LOGIN"
          color="#FFFF"
          bgcolor="#583ef2"
          width={width / 1.35}
          onPress={() => signIn()}
        />
      </View>
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
  Header: {
    top: 70,
    alignContent: "center",
    alignItems: "center",
    marginBottom: 120,
  },
  SignIn: {
    fontWeight: "bold",
    fontSize: 30,
    alignContent: "center",
    alignItems: "center",
    color: "#6E6BE8",
  },

  Info: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    width: width / 1.35,
    color: "#BBBBD2",
    marginTop: 5,
  },
  body: {
    flexDirection: "column",
    borderColor: "#BBBBD2",
    borderWidth: 2,
    padding: 5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginBottom: 50,
  },

  input: {
    width: width / 1.25,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 8,
  },
});
