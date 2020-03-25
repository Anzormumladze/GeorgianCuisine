import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './button';
const FoodCard = props => {
  return (
    <View style={style.card}>
      <View style={style.header}>
        <Image
          style={style.imageContainer}
          source={require('../assets/imag2.jpg')}
        />
      </View>
      <View style={style.text}>
        <Text style={style.food}>{props.item.name}</Text>
        <View style={style.FlexContainer}>
          <View style={style.FlexContainer}>
            <Ionicons
              name="ios-alarm"
              color="purple"
              size={20}
              style={{marginRight: 10}}
            />
            <Text>{props.item.time} Mins </Text>
          </View>
          <View style={style.FlexContainer}>
            <Text>Serves {props.item.serves} </Text>
            <Ionicons
              name="ios-people"
              color="purple"
              size={20}
              style={{marginLeft: 10}}
            />
          </View>
        </View>
        <Text
          style={{
            marginBottom: 20,
            marginTop: 20,
          }}>
          {props.item.description}
        </Text>
      </View>
      <Button text="LETS COOK" />
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    maxWidth: 300,
    margin: 20,
  },
  imageContainer: {
    flex: 1,
    height: 100,
    width: 280,
  },
  header: {
    minHeight: 300,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  food: {
    flex: 1,
    textAlign: 'center',
    letterSpacing: 0.1,
    fontSize: 20,
  },
  FlexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default FoodCard;
