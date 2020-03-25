import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Favorites = props => {
  return (
    <View style={style.FlexContainer}>
      <View style={style.FlexContainer}>
        <Ionicons
          name="ios-alarm"
          color="purple"
          size={20}
          style={style.iconTime}
        />
        <Text>{props.time} Mins </Text>
      </View>
      <View style={style.FlexContainer}>
        <Text>Serves {props.serves} </Text>
        <Ionicons
          name="ios-people"
          color="purple"
          size={20}
          style={style.iconPeople}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  FlexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconTime: {
    marginRight: 10,
  },
  iconPeople: {
    marginLeft: 10,
  },
});

export default Favorites;
