import React from 'react';
import {View, Text, Image} from 'react-native';

const Favorites = () => {
  return (
    <View>
      <Image
        style={{width: 50, height: 50}}
        source={require('../assets/image1.png')}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default Favorites;
