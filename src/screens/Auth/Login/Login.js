import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'components/Header/Header';

import {TouchableOpacity} from 'react-native-gesture-handler';
const Login = () => {
  return (
    <View>
      <Header backButton={true} />
      <Text> Login </Text>
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
