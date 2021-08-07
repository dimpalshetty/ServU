import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  StatusBar,
  FlatList,
  Animated,
  ScrollView,
  ScrollViewBase,
} from "react-native";

import PrpleBtn from "../components/purplebutton";
import work from "../../assets/images/work.png";
import Icon from "react-native-vector-icons/Ionicons";
import Srch from "../components/Searchbar";
import Gridbtn from "../components/gridbuttons";
import Slider from "../components/slider";
import Tests from "../components/testimonialbox";

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ScreenContainer = ({ children }) => (
  <View style={styles.containers}>{children}</View>
);

export const HomePage = ({ navigation }) => {
  return (
    <ScrollView alwaysBounceVertical={true}>
      <ScreenContainer>
        <View style={styles.navbar}>
          <View style={styles.textnav}>
            <View style={styles.navtext}>
              <Text style={styles.navigate}>Hi,</Text>
              <Text style={styles.navigatesec}>Need some help today?</Text>
            </View>
            <View style={styles.profile}>
              <TouchableOpacity onPress={() => navigation.push("Profile")}>
                <Icon
                  name="md-person-circle-outline"
                  size="small"
                  style={{
                    color: "white",
                    fontSize: 50,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center", height: height / 12 }}>
            <Srch></Srch>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View style={styles.grid}>
            <View style={styles.all}>
              <Gridbtn text="Carpenter" icon="hammer-outline" />

              <Gridbtn text="Cleaner" icon="md-flower" />

              <Gridbtn text="Mechanic" icon="md-build" />
            </View>
            <View style={styles.all}>
              <Gridbtn text="Cook" icon="md-fast-food" />

              <Gridbtn text="Plumber" icon="md-water" />

              <Gridbtn text="More" icon="md-color-wand" />
            </View>
          </View>

          <View style={{ height: height / 2, width: width }}>
            <View
              style={{
                backgroundColor: "black",
                flexDirection: "row",
                top: height / 10,
                height: height / 3,

                left: width / 25,
                marginRight: 30,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slider></Slider>
            </View>
          </View>

          <View style={styles.testimonial}>
            <Text style={styles.texttest}>TESTIMONIALS</Text>

            <Tests
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more."
              texxt="-DIMPAL SHETTY"
            ></Tests>
            <Tests
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more."
              texxt="-DIMPAL SHETTY"
            ></Tests>
            <Tests
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more."
              texxt="-DIMPAL SHETTY"
            ></Tests>
          </View>
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#6E6BE8",
    height: height / 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: "column",
  },

  testbox: {
    backgroundColor: "#b09cc8",
    width: width / 1.1,
    height: height / 4,
    marginBottom: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },

  testimonial: {
    alignItems: "center",
    alignContent: "space-between",
    flexDirection: "column",
  },

  texttest: {
    fontSize: 30,
    color: "#583EF2",
    fontWeight: "700",
  },
  all: {
    borderRadius: 20,
    borderColor: "#EAEAFF",
    color: "red",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  textnav: {
    flexDirection: "row",
  },

  navigate: {
    color: "white",
    fontSize: 30,
    left: width / 12,
    top: height / 17,
  },

  contentContainer: {
    paddingVertical: 20,
  },

  navigatesec: {
    color: "white",
    left: width / 12,
    top: height / 19,
    fontSize: 20,
  },
  navtext: {
    flexDirection: "column",
    flex: 2,
  },
  containers: {
    flex: 1,
  },

  but: {
    backgroundColor: "#EAEAFF",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "red",
    alignItems: "center",
    width: width / 2.3,
    height: height / 10,
    top: height / 6,
    left: width / 18,
  },

  button: {
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    color: "red",
    fontWeight: "500",
    top: 15,
  },

  profile: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: height / 5,
    width: width / 4,
  },

  grid: {
    top: height / 17,
    flexDirection: "column",
    flex: 2 / 3,
  },
});
