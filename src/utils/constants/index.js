import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';

export const userNameRegEx = new RegExp(/@([\w\d.\-_]+)?/g);

export const Constants = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};

export let authHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export let header = async () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${await GetToken()}`,
});

export let GetToken = async () => {
  const token = await AsyncStorage.getItem('usertoken');
  console.log(token);
  return token;
};

export let image_options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const phoneRegExp = /^[0-9]+$/;
export const phoneArRegExp = /^[۰-۹]+$/;
export const character_format = /[ `!@#$%٪^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export const phonePrefix = '+962';
export const pkphonePrefix = '+962';
