import React from 'react';
import {View, FlatList} from 'react-native';
import DATA from '../../data/GeorgianCuisine';
import FoodCard from '../components/foodCard';
const Home = props => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => {
          return <FoodCard item={item} index={index} props={props} />;
        }}></FlatList>
    </View>
  );
};

export default Home;
