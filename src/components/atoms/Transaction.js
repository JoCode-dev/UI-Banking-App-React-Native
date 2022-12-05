import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  Animated,
  Easing,
} from 'react-native';

const Transaction = ({image, title, category, amount, type}) => {
  
  return (
    <Animated.View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          height: 70,
          width: 400,
          borderRadius: 20,
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <Image
              source={image}
              style={{
                width: 25,
                height: 25,
                tintColor: 'white',
              }}
            />
          </View>
        </View>
        <View style={{width: 170}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'FONTSPRING DEMO - Priego SemiBold',
            }}>
            {title}
          </Text>

          <Text
            style={{
              color: 'gray',
              fontFamily: 'FONTSPRING DEMO - Priego',
            }}>
            {category}
          </Text>
        </View>

        <View
          style={{
            width: 130,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              marginHorizontal: 10,
            }}>
            {type === 'sent' ? `-$${amount}` : amount}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Transaction;
