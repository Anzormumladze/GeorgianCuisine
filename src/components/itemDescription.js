import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ItemDescription = props => {
  return <Text style={style.itemTextContainer}>{props.text}</Text>;
};

const style = StyleSheet.create({
  itemTextContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
});
export default ItemDescription;
