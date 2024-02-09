import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import FlatCards from './components/FlatCards.tsx';

function App(): JSX.Element {
  return (
  <SafeAreaView>
    <ScrollView>
        <View>
          <Text>App</Text>
          <FlatCards />
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App;