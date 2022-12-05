import * as React from 'react';
import {View, Image} from 'react-native';
import {images} from '../../style';

const ImageUser = ({image}) => {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
          borderRadius: 100,
          overflow: 'hidden',
        }}>
        <Image
          source={image}
          resizeMode="cover"
          resizeMethod="scale"
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
    </View>
  );
};

export default ImageUser;
