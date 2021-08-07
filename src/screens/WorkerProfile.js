import React, {useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import ProfileCard from "../components/ProfileCard";
import Specialization from "../components/Specialization";
import Stars from 'react-native-stars';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export const WorkerProfile = ({ route, navigation }) => {
  const { name, experience } = route.params;

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 13 }}>
        <ProfileCard name={name} experience={experience} location="Mangalore" />
        <Text style={styles.subTitle}>Specialized in:</Text>
        <ScrollView
          horizontal={true}
          style={{ flexDirection: 'row' }}
          showsHorizontalScrollIndicator={false}
        >
          <Specialization
            title='Maid'
            bgcolor='#78789D'
            image={require('../../assets/Icons/cleaning.png')} />
          <Specialization
            title='Groceries'
            bgcolor='#F7658B'
            image={require('../../assets/Icons/cleaning.png')} />
          <Specialization
            title='Maid'
            bgcolor='#78789D'
            image={require('../../assets/Icons/cleaning.png')} />
          <Specialization
            title='Maid'
            bgcolor='#78789D'
            image={require('../../assets/Icons/cleaning.png')} />
          <Specialization
            title='Maid'
            bgcolor='#78789D'
            image={require('../../assets/Icons/cleaning.png')} />

        </ScrollView>
        <Text style={styles.subTitle}>Rating:</Text>

        <View style={{ marginVertical: 10 ,justifyContent:'flex-start',alignItems:'flex-start'}}>

          <Stars
            default={3.5}
            count={5}
            half={true}
            starSize={200}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}
            />}

          />
        </View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    color: '#46369F',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10

  },
  myStarStyle: {
    fontSize: 25,
    color: '#ffb457',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
},
myEmptyStarStyle: {
    color: 'grey',
},


})