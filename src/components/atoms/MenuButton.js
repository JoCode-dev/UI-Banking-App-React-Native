import * as React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {icons, SIZES, COLORS} from '../../style';

const MenuButton = ({icon, onPress}) => {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.gray,
          height: 40,
          width: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Image
          source={icon}
          resizeMode="contain"
          resizeMethod="scale"
          style={{
            width: 30,
            height: 30,
            tintColor: '#bbb',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
