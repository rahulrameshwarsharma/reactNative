import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import globalStyles from '../src/styles/style.tsx'

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={globalStyles.headingText}>FlatLists</Text>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.cards, styles.cardOne]}>
            <Text>Red</Text>
          </View>

          <View style={[styles.cards, styles.cardTwo]}>
            <Text>Green</Text>
          </View>

          <View style={[styles.cards, styles.cardThree]}>
            <Text>Blue</Text>
          </View>

          <View style={[styles.cards, styles.cardOne]}>
            <Text>Red</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  cards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
