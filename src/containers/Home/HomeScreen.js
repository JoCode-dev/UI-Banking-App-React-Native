import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Cards,
  ActionButtons,
  Transactions,
} from '../../components/molecules';
import {icons, images} from '../../style';

const HomeScreen = ({navigation}) => {
  const [cardNumber, setCardNumber] = React.useState('1762');

  return (
    <View style={styles.container}>
      <Header
        label={'Good Morning'}
        title={'Courtney Henry'}
        icon={icons.menu}
        image={images.daniel}
      />
      <Cards cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ActionButtons navigation={navigation} />

      <Transactions cardNumber={cardNumber} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
