import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import FlatCards from './components/FlatCards.tsx';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCard from './components/FancyCards.tsx';
import ActionCard from './components/ActionCard.tsx';
import ContactList from './components/ContactList.tsx';

function App(): JSX.Element {
  return (
  <SafeAreaView>
    <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App;