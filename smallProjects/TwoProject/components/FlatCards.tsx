import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function FlatCards(): JSX.Element {
  return (
    <View style={styles.Container}>
      <Text>FlatLists</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  Container: {
    // color: 'blue',
}
});