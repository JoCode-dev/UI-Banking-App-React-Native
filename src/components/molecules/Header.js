import * as React from 'react';
import {View} from 'react-native';
import {SIZES} from '../../style';

import {ImageUser, TitleText, MenuButton} from '../atoms';
const Header = ({label, title, icon, image, onPress}) => {
  return (
    <View
      style={{
        width: SIZES.width,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 60,
      }}>
      <MenuButton icon={icon} onPress={onPress} />
      <TitleText label={label} title={title} />
      <ImageUser image={image} />
    </View>
  );
};

export default Header;
