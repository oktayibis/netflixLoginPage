import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextComponent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.facebookContainer}>
        <Icon style={styles.facebookIcon} name="social-facebook" size={30} />
        <Text style={styles.facebookText}>Login with Facebook</Text>
      </View>
      <View style={styles.signUp}>
        <Text style={styles.newText}>New to Netflix?</Text>
        <Text style={styles.signUpText}>Sign up now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    marginLeft: 20,
  },
  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookText: {
    color: '#b0b0b0',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 10,
  },
  facebookIcon: {
    color: '#3c579a',
  },
  signUp: {
    marginTop: 30,
    flexDirection: 'row',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  newText: {
    color: '#b0b0b0',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Footer;
