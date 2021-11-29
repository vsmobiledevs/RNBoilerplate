import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from 'screens/App/Home';
import Settings from 'screens/App/Settings';

const Stack = createNativeStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default HomeStack;
