import React from 'react';
import {StatusBar, View, Platform} from 'react-native';
const STATUS_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

const StatusBarHolder = () => {
  return (
    <View
      style={{width: '100%', height: STATUS_HEIGHT, backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default StatusBarHolder;
