import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const Header = () => {
  return (
    <View>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://egirisim.com/wp-content/uploads/2020/02/netflix-made-in-turkey.jpeg',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 150,
    marginLeft: 10,
  },
});

export default Header;
