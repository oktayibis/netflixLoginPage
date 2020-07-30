/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Header from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import StatusBarHolder from './components/StatusBarHolder';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBarHolder />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.login}>
          <Login />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flex: 1,
    marginTop: 20,
  },
  login: {
    flex: 4,
    marginTop: 20,
  },
  footer: {
    flex: 1,
    marginTop: 150,
  },
});

export default App;
