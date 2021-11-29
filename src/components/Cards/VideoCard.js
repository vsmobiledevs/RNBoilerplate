import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import {useIsFocused} from '@react-navigation/native';

const VideoCard = ({item, Height, Width, Radius, playing}) => {
  const isFocused = useIsFocused();

  return (
    <>
      {isFocused && (
        <YouTube
          key={Math.random()}
          apiKey={'AIzaSyB3R1Aa37Mu2fPCd2C1yNPI-ZZwPauU-mA'}
          videoId={'t3aGuXnYUF4'} // The YouTube video ID
          play={playing} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => console.log(e)}
          // onChangeState={e => onPressPlay(e)}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          onError={e => console.log({error: e.error})}
          style={{
            height: Height,
            width: Width,
            borderRadius: Radius,
          }}
        />
      )}
    </>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoStyle: {
    height: 200,
    borderRadius: 4,
    marginTop: 10,
  },

  imageLayout: {
    resizeMode: 'cover',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
