import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NetInfoModal} from 'components';
import {useOnlineStatus} from 'utils';
const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const isOnline = useOnlineStatus();
  const User = ({name, email, avatar}) => (
    <View style={styles.user}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = useCallback(() => {
    setLoading(true);
    axios
      .get('https://randomuser.me/api/?results=30')
      .then(({data}) => {
        const {results} = data;
        setUsers(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isOnline]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onRefresh={fetchUsers}
        refreshing={isLoading}
        data={users}
        renderItem={({item: user}) => (
          <User
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            avatar={user.picture.thumbnail}
          />
        )}
        keyExtractor={user => user.login.uuid}
      />
      {/* <Button title={'Get Data'} onPress={fetchUsers} /> */}

      <NetInfoModal
        show={isOnline}
        onRetry={fetchUsers}
        isRetrying={isLoading}
      />
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  user: {
    width: Dimensions.get('screen').width - 32,
    alignSelf: 'center',
    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  name: {
    color: '#424242',
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    marginTop: 6,
    color: '#888',
  },
});
