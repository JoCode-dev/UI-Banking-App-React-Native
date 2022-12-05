import * as React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {icons, SIZES, COLORS} from '../../style';

const HomeButton = ({label, icon, color, onPress}) => {
  return (
    <View
      style={{
        height: 130,
        width: 100,
        padding: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 65,
          width: 65,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:
            color === 'primary' ? COLORS.primaryColor : COLORS.white,
          borderRadius: 100,
        }}>
        <Image
          source={icon}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'FONTSPRING DEMO - Priego',
          fontSize: 16,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default HomeButton;
