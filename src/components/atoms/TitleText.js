import * as React from 'react';
import {View, Text} from 'react-native';
import {FONTS} from '../../style';

const TitleText = ({label, title}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
      }}>
      <Text
        style={{
          fontFamily: 'FONTSPRING DEMO - Priego',
        }}>
        {label}
      </Text>
      {title?.length ? (
        <Text
          style={{
            ...FONTS.h3,
          }}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

export default TitleText;
