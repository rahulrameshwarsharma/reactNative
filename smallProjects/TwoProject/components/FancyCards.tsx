import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import globalStyles from '../src/styles/style.tsx';

export default function FancyCard(): JSX.Element {
  return (
    <View>
      <Text style={[globalStyles.headingText]}>Trending Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/z/panorama-hawa-mahal-palace-palace-winds-famous-landmark-beautiful-jaipur-pink-city-rajasthan-also-known-as-72440879.jpg?ct=jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City Jaipur</Text>
          <Text style={styles.cardDescription}>
            Hawa Mahal is a beautiful palace in Jaipur (Pink City), Rajasthan,
            also known as Palace of Winds or Palace of the Breeze, constructed
            of red and pink sandstone built in 1799 by Maharaja Sawai Pratap
            Singh.
          </Text>
          <Text style={styles.cardFooter}>12 KM away from railway station</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 360,
    width: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal:12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    margin:6
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1
  },
  cardFooter: {
    color: '#000000',
  }
});
