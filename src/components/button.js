import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const ButtonContainer = props => {
  return (
    <Button
      full
      onPress={() => props.navigation.props.navigation.push('RECIEPT')}>
      <Text style={style.buttonTextStyle}>{props.text}</Text>
    </Button>
  );
};

const style = StyleSheet.create({
  buttonTextStyle: {
    color: 'white',
  },
});

export default ButtonContainer;
