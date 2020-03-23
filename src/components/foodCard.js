import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base';

const FoodCard = () => {
  return (
    <View style={style.card}>
      <View style={style.header}>
        <Image
          style={style.imageContainer}
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
        />
      </View>
      <View style={style.text}>
        <Text style={style.food}>CHINESE NOODLES</Text>
        <View style={style.FlexContainer}>
          <View style={style.FlexContainer}>
            <Ionicons
              name="ios-alarm"
              color="purple"
              size={20}
              style={{marginRight: 10}}
            />
            <Text>15 Mins </Text>
          </View>
          <View style={style.FlexContainer}>
            <Text>Serves 2 </Text>
            <Ionicons
              name="ios-people"
              color="purple"
              size={20}
              style={{marginLeft: 10}}
            />
          </View>
        </View>
        <Text style={{marginTop: 20, marginBottom: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          temporibus.
        </Text>
      </View>
      <Button full color="purple">
        <Text>LET'S COOK!</Text>
      </Button>
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
