import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors, WP} from '../../utils';
import {appIcons} from '../../assets';

import VideoCard from './VideoCard';

const ItemCards = ({onPress, playing, onPlayVideo, type, uri}) => {
  return (
    <>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={onPress}>
          <View
            key={(item, index) => index.toString()}
            style={[styles.imageLayout]}>
            {type === 'video' && (
              <VideoCard
                item={uri}
                playing={playing}
                Radius={5}
                Height={Dimensions.get('screen').height / 4.5}
                Width={Dimensions.get('window').width / 1.2}
              />
            )}
            {type === 'video' && playing == false ? (
              <TouchableOpacity
                hitSlop={styles.hitSlope}
                onPress={onPlayVideo}
                style={{position: 'absolute'}}>
                <Image source={appIcons.play} style={styles.icon50} />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ItemCards;

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageLayout: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 4,
    backgroundColor: colors.b1,
  },

  icon50: {
    height: WP('34'),
    width: WP('34'),

    resizeMode: 'contain',
  },
  hitSlope: {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
  },
});
