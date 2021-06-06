import React from 'react';
import {
  Text, Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';

export default function PrpleBtn () {
return(
  <TouchableOpacity style={styles.button} >
          <Text > Login To Existing Account </Text>
        </TouchableOpacity>

        );
}

