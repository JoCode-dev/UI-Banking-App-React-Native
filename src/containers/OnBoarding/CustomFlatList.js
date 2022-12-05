import * as React from 'react';
import {FlatList, Image, Text, Animated, View} from 'react-native';

import {COLORS, icons, constants, SIZES, FONTS} from '../../style';
import FooterFlatList from './FooterFlatList';

const CustomFlatList = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0]?.index);
  });

  const renderFlatListItem = item => {
    return (
      <View
        style={{
          width: SIZES.width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Header */}
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={item?.bannerImage}
            style={{
              width: SIZES.width,
              height: SIZES.width,
            }}
          />
        </View>

        {/* Description */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: SIZES.width / 1.7,
            height: 50,
          }}>
          <Text
            style={{
              ...FONTS.h3,
              color: 'white',
              fontFamily: 'FONTSPRING DEMO - Priego Light',
              textAlign: 'center',
            }}>
            {item?.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => renderFlatListItem(item, index)}
      />
      <FooterFlatList
        flatListRef={flatListRef}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        scrollX={scrollX}
        navigation={navigation}
      />
    </>
  );
};

export default CustomFlatList;
