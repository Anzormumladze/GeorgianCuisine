import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from './button';
import ItemDescription from './itemDescription';
import ItemDetails from './itemDetails';
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
        <ItemDetails time={props.item.time} serves={props.item.serves} />
        <ItemDescription text={props.item.description} />
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
});

export default FoodCard;
