import * as React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {SIZES, images, FONTS} from '../../style';

const Card = ({
  color,
  cc,
  balance,
  image,
  flatlistRef,
  currentIndex,
  index,
  setCurrentIndex,
  scrollX,
  cardNumber,
  setCardNumber,
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 250,
          height: 300,
          borderRadius: SIZES.padding,
          overflow: 'hidden',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          flatlistRef?.current?.scrollToIndex({
            index: index,
            animated: true,
          });
          setCardNumber(cc);
        }}>
        <Image
          source={image}
          resizeMethod="resize"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.padding,
            position: 'absolute',
          }}
        />

        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            padding: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <Image
            source={images.visa}
            style={{
              width: 50,
              height: 20,
              tintColor: color === 'black' ? 'white' : 'black',
            }}
          />
          <Text
            style={{
              ...FONTS.h3,
              color: color === 'black' ? 'white' : 'black',
            }}>
            •••• {cc}
          </Text>
        </View>

        {/* Bottom */}
        <View
          style={{
            width: '100%',
            padding: SIZES.radius,
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: color === 'black' ? 'white' : 'black',
            }}>
            Balance
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: color === 'black' ? 'white' : 'black',
                fontSize: 40,
              }}>
              $
            </Text>
            <Text
              style={{
                color: color === 'black' ? 'white' : 'black',
                fontSize: 40,
                fontFamily: 'FONTSPRING DEMO - Priego Medium',
              }}>
              {balance}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
