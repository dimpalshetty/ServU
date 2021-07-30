import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const width = Dimensions.get('window').width

class Select extends Component {
    state = {
        selected: null,
        value: '1'
    };

    _handleClick(flag, button) {
        if (flag == 1) {
            this.setState({ selected: true });
        }
        this.setState({ value: button })
    }

    render() {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity style={{
                    backgroundColor: (this.state.value === '1' ? '#6e6be8' : 'white'),
                    borderRadius: 15,
                    borderColor: (this.state.value === '1' ? 'grey' : 'white'),
                    borderWidth: 1,
                    height: 60,
                    width: width / 2.8,
                    marginRight: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                    onPress={() => this._handleClick('any flag', '1')}
                >
                    <View >
                        <Text style={{ color: (this.state.value === '2' ? 'black' : 'white'), fontSize: 15 }}>
                            User
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: (this.state.value === '2' ? '#6e6be8' : 'white'),
                    borderRadius: 15,
                    borderColor: (this.state.value === '2' ? 'grey' : 'white'),
                    borderWidth: 1,
                    height: 60,
                    alignItems: "center",
                    width: width / 2.8,

                    justifyContent: "center",
                }}
                    onPress={() => this._handleClick('any flag', '2')}
                >
                    <View >
                        <Text style={{ color: (this.state.value === '2' ? 'white' : 'black'), fontSize: 15 }}>
                            Service Provider
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        width: width / 1.18,
        marginVertical: 20,
        justifyContent: 'space-evenly'
    },
    btnContainerStyle: {
        backgroundColor: '#583ef2',
        borderRadius: 15,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    btnTextStyle: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});
export default Select;