import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import globalStyles from '../src/styles/style.tsx';

export default function ElevatedCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}> Elevated Cards </Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={[globalStyles.redText]}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={[globalStyles.greenText]}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={[globalStyles.blueText]}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={globalStyles.purpleText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={[globalStyles.redText]}>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={[globalStyles.greenText]}>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: '#EF5354',
    shadowOpacity: 1,
    shadowRadius: 10
  },
});
