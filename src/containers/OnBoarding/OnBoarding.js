import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Animated} from 'react-native';
import CustomFlatList from './CustomFlatList';

import {COLORS} from '../../style';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Render Flatlist */}
      <CustomFlatList navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
});
export default OnBoarding;
