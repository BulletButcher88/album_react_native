/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    paddingTop: 70,
    paddingLeft: 20,
  },
});

export default App;
