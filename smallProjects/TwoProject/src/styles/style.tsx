import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  // For headings or subheadings

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    margin: 8
  },

  // For any text in different colors

  redText: {
    color: '#EF5354',
  },
  greenText: {
    color: '#50DBB4'
  },
  blueText: {
    color: '#5DA3FA'
  },
  purpleText: {
    color: '#333333'
  },
  blackText: {
    color: '#000000'
  },

  // For any box with background color

  lightGrey: {
    backgroundColor: '#CAD5E2'
  }


});

export default globalStyles;
