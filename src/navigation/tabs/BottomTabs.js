import React from 'react';
import { View, Platform, StyleSheet, I18nManager } from 'react-native';
import { Icon } from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, HP, WP } from '../../utils';

// Bottom Tabs Screens
import OrdersStack from '../stacks/OrdersStack';
import CartStack from '../stacks/CartStack';
import ProfileStack from '../stacks/ProfileStack';

const Tab = createBottomTabNavigator();

export default BottomTabs = ({ }) => {
  let hasNotch = DeviceInfo.hasNotch();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          android: styles.barStyle,
          ios: hasNotch ? styles.notchBarStyle : styles.barStyle,
        }),
      }}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon',
        showLabel: false,
      }}
      initialRouteName={'Stores'}
    >
      <Tab.Screen
        component={OrdersStack}
        name={'Orders'}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Orders');
          },
        })}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : {}}>
              <Icon
                style={{
                  transform: [
                    { rotateY: I18nManager.isRTL ? '180deg' : '0deg' },

                  ],
                }}
                type={'fontisto'}
                name={'nav-icon-list-a'}
                color={focused ? colors.white : colors.b1}
                size={11}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={CartStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Stores');
          },
        })}
        name={'Cart'}
        options={{
          tabBarLabel: '.',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : {}}>
              <Icon
                style={{
                  transform: [
                    { rotateY: I18nManager.isRTL ? '180deg' : '0deg' },

                  ],
                }}

                type={'materialIcons'}
                name={'shopping-cart'}
                color={focused ? colors.white : colors.b1}
                size={HP('2')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={ProfileStack}
        name={'Profile'}
        listeners={({ navigation }) => ({
          tabPress: e => {
            navigation.navigate('Profile');
          },
        })}
        options={{
          tabBarLabel: '.',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : {}}>
              <Icon
                type={'ionicons'}
                name={'person'}
                color={focused ? colors.white : colors.b1}
                size={HP('2.2')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    borderRadius: 20,
    height: Platform.select({ android: 60, ios: 65 }),
  },
  notchBarStyle: {
    borderRadius: 20,
  },
  iconContainer: {
    width: WP('17'),
    height: WP('17'),
    borderWidth: 4.5,
    alignItems: 'center',
    borderRadius: WP('8.5'),
    justifyContent: 'center',
    borderColor: colors.white,
    backgroundColor: colors.b1,
    bottom: Platform.select({ android: 7, ios: 3 }),
  },
});
