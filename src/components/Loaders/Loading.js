import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {colors} from 'utils';
import PropTypes from 'prop-types';

export const Loading = ({visible}) => (
  <ActivityIndicator
    animating
    color={colors.b1}
    style={visible ? loader.centering : loader.hideIndicator}
    size="large"
  />
);
Loading.propTypes = {
  loader_color: PropTypes.bool,
};
const loader = StyleSheet.create({
  centering: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    opacity: 0.8,
    position: 'absolute',
    backgroundColor: colors.g1,
  },
  hideIndicator: {
    top: -100,
    opacity: 0,
    position: 'absolute',
  },
});
