import Slideshow from 'react-native-image-slider-show';
import {Component} from 'react';
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

} from 'react-native';
import eg from '../../assets/images/eg.jpg';
const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    

];


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Slider = () => {

return(
<FlatList data={data}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment='center'
                    renderItem={({ item }) => {
                        return <View style={{width, justifyContent: 'center', alignItems:'center',}}>
                            <Image source={{ uri: item }} style={{
                                width: width,
                                height: height/3.3,
                                borderRadius: 10,
                            }} />
                    </View>

                    }}
                    />
)
                }


                export default Slider;