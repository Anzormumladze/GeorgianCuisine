import React from 'react';
import {View, Text} from 'react-native';

const ItemReciept = props => {
  console.log(props.route.params);
  return (
    <View>
      <Text>{props.route.params}</Text>
    </View>
  );
};

export default ItemReciept;
