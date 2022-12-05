import * as React from 'react';
import {View} from 'react-native';
import {icons, SIZES} from '../../style';
import {HomeButton} from '../atoms';

const ActionButtons = ({navigation}) => {
  return (
    <View
      style={{
        width: SIZES.width,
        flexDirection: 'row',
      }}>
      {/* Top up */}
      <HomeButton label={'Top up'} color={'primary'} icon={icons.plus} />

      {/* Top up */}
      <HomeButton label={'Transfer'} color={'white'} icon={icons.transfer} />

      {/* Top up */}
      <HomeButton
        label={'Send'}
        color={'white'}
        icon={icons.share}
        onPress={() => navigation.navigate('SendMoney')}
      />

      {/* Top up */}
      <HomeButton label={'Analytics'} color={'white'} icon={icons.analytics} />
    </View>
  );
};

export default ActionButtons;
