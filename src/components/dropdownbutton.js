import React, {useState} from 'react';
    import {StyleSheet, View, Text, Image} from 'react-native';
    import {Dropdown} from 'react-native-element-dropdown';

    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
        {label: 'Item 5', value: '5'},
        {label: 'Item 6', value: '6'},
        {label: 'Item 7', value: '7'},
        {label: 'Item 8', value: '8'},
    ];

    const DropdownScreen = _props => {
        const [dropdown, setDropdown] = useState(null);
        const [selected, setSelected] = useState([]);

         

        return (
            <View>
                <Dropdown
                  
                    data={data}
                    search
                    searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                
                    renderItem={item => _renderItem(item)}
                />

             
            </View>
        );
    };

    export default DropdownScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            padding: 20,
        },
        dropdown: {
            backgroundColor: 'white',
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
            marginTop: 20,
        },
        dropdown2: {
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 0.5,
            marginTop: 20,
            padding: 8,
        },
        icon: {
            marginRight: 5,
            width: 18,
            height: 18,
        },
        item: {
            paddingVertical: 17,
            paddingHorizontal: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textItem: {
            flex: 1,
            fontSize: 16,
        },
    });