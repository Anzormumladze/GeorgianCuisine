import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/Mytabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
