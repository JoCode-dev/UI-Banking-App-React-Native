import * as React from 'react';
import {View, Text, Animated, TouchableOpacity, Image} from 'react-native';
import {SIZES, COLORS, FONTS, constants, icons} from '../../style';

const FooterFlatList = ({
  scrollX,
  flatListRef,
  currentIndex,
  setCurrentIndex,
  navigation,
}) => {
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {constants?.onboarding_screens?.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.gray, COLORS.primaryColor, COLORS.gray],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View
      style={{
        width: SIZES.width,
        height: 200,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Dots />
      </View>

      {/* Button */}
      {currentIndex < constants?.onboarding_screens?.length - 1 && (
        <View
          style={{
            flex: 2,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              backgroundColor: COLORS.secondaryColor,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: COLORS.primaryColor,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.chevron_right}
                resizeMethod="resize"
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      {currentIndex == constants?.onboarding_screens?.length - 1 && (
        <View
          style={{
            flex: 2,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 300,
              height: 70,
              backgroundColor: COLORS.secondaryColor,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.replace('Home');
            }}>
            <Text style={{color: 'white', ...FONTS.h2}}>Let's get started</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FooterFlatList;
